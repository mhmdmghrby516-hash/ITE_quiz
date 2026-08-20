import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { cloneDemoData } from './data'
import './styles.css'

const DATA_KEY = 'asmaa-react-quiz-data-v1'
const RESULTS_KEY = 'asmaa-react-quiz-results-v1'
const ADMIN_SESSION_KEY = 'asmaa-react-admin-session'
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'Admin@12345'

function readData() {
  try {
    const saved = localStorage.getItem(DATA_KEY)
    return saved ? JSON.parse(saved) : cloneDemoData()
  } catch {
    return cloneDemoData()
  }
}

function routeFromHash() {
  const value = window.location.hash.replace(/^#\/?/, '') || 'home'
  const [page, id] = value.split('/')
  return { page, id }
}

function go(path = 'home') {
  window.location.hash = `#/${path}`
}

function App() {
  const [data, setData] = useState(readData)
  const [route, setRoute] = useState(routeFromHash)
  const [lastResult, setLastResult] = useState(null)
  const [adminAuthenticated, setAdminAuthenticated] = useState(() => sessionStorage.getItem(ADMIN_SESSION_KEY) === 'active')

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    localStorage.setItem(DATA_KEY, JSON.stringify(data))
  }, [data])

  const updateData = (nextData) => setData(nextData)

  let content
  if (route.page === 'subject') content = <SubjectPage data={data} subjectId={route.id} />
  else if (route.page === 'quiz') content = <QuizPage data={data} quizId={route.id} onFinish={(result) => { setLastResult(result); go('result') }} />
  else if (route.page === 'result') content = <ResultPage result={lastResult} data={data} />
  else if (route.page === 'admin') content = adminAuthenticated
    ? <AdminPage data={data} onChange={updateData} onLogout={() => { sessionStorage.removeItem(ADMIN_SESSION_KEY); setAdminAuthenticated(false) }} />
    : <AdminLogin onLogin={() => { sessionStorage.setItem(ADMIN_SESSION_KEY, 'active'); setAdminAuthenticated(true) }} />
  else content = <HomePage data={data} />

  return (
    <div className="app-shell">
      <Header adminAuthenticated={adminAuthenticated} onLogout={() => { sessionStorage.removeItem(ADMIN_SESSION_KEY); setAdminAuthenticated(false); go() }} />
      <main className="container page-space">{content}</main>
      <footer className="footer"><div className="container">منصة كويزات React — تعمل دون Backend</div></footer>
    </div>
  )
}

function Header({ adminAuthenticated, onLogout }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <button className="brand link-button" onClick={() => go()}>🎓 منصة الكويزات</button>
        <nav>
          <button className="nav-link link-button" onClick={() => go()}>الرئيسية</button>
          {adminAuthenticated
            ? <button className="nav-link link-button" onClick={onLogout}>تسجيل الخروج</button>
            : <button className="nav-link link-button" onClick={() => go('admin')}>دخول الأدمن</button>}
        </nav>
      </div>
    </header>
  )
}

function HomePage({ data }) {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">تعلّم واختبر نفسك</span>
        <h1>اختبر معلوماتك بسهولة</h1>
        <p>اختر المادة، أجب عن الأسئلة، واعرف الإجابة الصحيحة فورًا.</p>
      </section>
      <div className="section-heading"><div><h2>المواد المتاحة</h2><p>اختر مجالًا للبدء</p></div></div>
      <div className="grid">
        {data.subjects.map((subject) => {
          const count = data.quizzes.filter((quiz) => quiz.subjectId === subject.id).length
          return (
            <article className="card subject-card" key={subject.id}>
              <div className="subject-icon">{subject.icon || '✦'}</div>
              <span className="badge">{count} اختبار</span>
              <h3>{subject.name}</h3>
              <p>{subject.description}</p>
              <button className="btn" onClick={() => go(`subject/${subject.id}`)}>عرض الاختبارات</button>
            </article>
          )
        })}
      </div>
    </>
  )
}

function SubjectPage({ data, subjectId }) {
  const subject = data.subjects.find((item) => item.id === subjectId)
  const quizzes = data.quizzes.filter((quiz) => quiz.subjectId === subjectId)
  if (!subject) return <NotFound />

  return (
    <>
      <button className="back-link" onClick={() => go()}>→ العودة إلى المواد</button>
      <div className="page-title"><div className="subject-icon large">{subject.icon || '✦'}</div><div><h1>{subject.name}</h1><p>{subject.description}</p></div></div>
      <div className="grid">
        {quizzes.map((quiz) => (
          <article className="card quiz-card" key={quiz.id}>
            <div className="quiz-meta"><span>⏱ {quiz.timeLimit} دقيقة</span><span>✓ النجاح {quiz.passingScore}%</span></div>
            <h3>{quiz.title}</h3><p>{quiz.description}</p>
            <span className="question-count">{quiz.questions.length} أسئلة</span>
            <button className="btn" onClick={() => go(`quiz/${quiz.id}`)}>ابدأ الاختبار</button>
          </article>
        ))}
        {!quizzes.length && <div className="card empty-state">لا توجد اختبارات لهذه المادة بعد.</div>}
      </div>
    </>
  )
}

function QuizPage({ data, quizId, onFinish }) {
  const quiz = data.quizzes.find((item) => item.id === quizId)
  const [answers, setAnswers] = useState({})
  if (!quiz) return <NotFound />

  const answerQuestion = (question, answerIndex) => {
    if (answers[question.id] !== undefined) return
    setAnswers((current) => ({ ...current, [question.id]: answerIndex }))
  }

  const finishQuiz = () => {
    const details = quiz.questions.map((question) => ({ question, selectedIndex: answers[question.id] }))
    const correct = details.filter(({ question, selectedIndex }) => selectedIndex === question.correctIndex).length
    const wrong = details.filter(({ selectedIndex }) => selectedIndex !== undefined).length - correct
    const unanswered = details.length - correct - wrong
    const percentage = details.length ? Math.round((correct / details.length) * 100) : 0
    const result = { quizId: quiz.id, title: quiz.title, passingScore: quiz.passingScore, correct, wrong, unanswered, percentage, details, date: new Date().toISOString() }
    const previous = JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]')
    localStorage.setItem(RESULTS_KEY, JSON.stringify([result, ...previous].slice(0, 20)))
    onFinish(result)
  }

  return (
    <>
      <button className="back-link" onClick={() => go(`subject/${quiz.subjectId}`)}>→ العودة إلى الاختبارات</button>
      <div className="quiz-heading"><div><h1>{quiz.title}</h1><p>{quiz.description}</p></div><div className="progress-pill">أجبت عن {Object.keys(answers).length} من {quiz.questions.length}</div></div>
      {quiz.questions.map((question, questionIndex) => {
        const selectedIndex = answers[question.id]
        const answered = selectedIndex !== undefined
        return (
          <section className={`card question-card ${answered ? 'answered' : ''}`} key={question.id}>
            <h3><span>{questionIndex + 1}</span>{question.text}</h3>
            <div className="options-list">
              {question.answers.map((answer, answerIndex) => {
                const isCorrect = answerIndex === question.correctIndex
                const isSelected = answerIndex === selectedIndex
                let state = ''
                if (answered && isCorrect) state = 'correct'
                else if (answered && isSelected) state = 'wrong'
                return (
                  <button className={`answer-option ${state}`} disabled={answered} onClick={() => answerQuestion(question, answerIndex)} key={answerIndex}>
                    <span className="radio-dot">{isSelected ? '●' : '○'}</span><span>{answer}</span>
                    {state === 'correct' && <strong>✓ صحيحة</strong>}{state === 'wrong' && <strong>✕ خاطئة</strong>}
                  </button>
                )
              })}
            </div>
            {answered && <p className="explanation">💡 {question.explanation}</p>}
          </section>
        )
      })}
      <div className="finish-bar"><span>{quiz.questions.length - Object.keys(answers).length ? `بقي ${quiz.questions.length - Object.keys(answers).length} سؤال` : 'أجبت عن جميع الأسئلة'}</span><button className="btn" onClick={finishQuiz}>إنهاء الاختبار</button></div>
    </>
  )
}

function ResultPage({ result, data }) {
  if (!result) return <div className="card empty-state"><h2>لا توجد نتيجة حديثة</h2><button className="btn" onClick={() => go()}>ابدأ اختبارًا</button></div>
  const passed = result.percentage >= result.passingScore
  const quiz = data.quizzes.find((item) => item.id === result.quizId)
  return (
    <>
      <section className={`card result-summary ${passed ? 'passed' : 'failed'}`}>
        <div className="result-icon">{passed ? '🏆' : '📘'}</div><p>{result.title}</p><div className="result-score">{result.percentage}%</div>
        <h1>{passed ? 'أحسنت، لقد نجحت!' : 'حاول مرة أخرى'}</h1>
        <div className="result-stats"><span>صحيح <strong>{result.correct}</strong></span><span>خطأ <strong>{result.wrong}</strong></span><span>بدون إجابة <strong>{result.unanswered}</strong></span></div>
        <button className="btn" onClick={() => go(`quiz/${result.quizId}`)}>إعادة الاختبار</button>
        {quiz && <button className="btn secondary" onClick={() => go(`subject/${quiz.subjectId}`)}>اختبارات المادة</button>}
      </section>
      <h2>مراجعة الإجابات</h2>
      {result.details.map(({ question, selectedIndex }, index) => (
        <section className="card review-card" key={question.id}>
          <h3>{index + 1}. {question.text}</h3>
          {question.answers.map((answer, answerIndex) => {
            const isCorrect = answerIndex === question.correctIndex
            const isSelected = answerIndex === selectedIndex
            return <div className={`review-answer ${isCorrect ? 'correct' : isSelected ? 'wrong' : ''}`} key={answerIndex}><span>{answer}</span>{isCorrect && <strong>✓ الإجابة الصحيحة</strong>}{isSelected && !isCorrect && <strong>✕ إجابتك</strong>}</div>
          })}
        </section>
      ))}
    </>
  )
}

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const submit = (event) => {
    event.preventDefault()
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setError('')
      onLogin()
      return
    }
    setError('اسم المستخدم أو كلمة المرور غير صحيحة.')
  }

  return (
    <section className="login-layout">
      <div className="login-intro">
        <div className="login-icon">🔐</div>
        <span className="eyebrow dark">منطقة الإدارة</span>
        <h1>مرحبًا بعودتك</h1>
        <p>سجّل الدخول لإدارة المواد والاختبارات والأسئلة المحفوظة في هذا المتصفح.</p>
      </div>
      <form className="card login-card form-card" onSubmit={submit}>
        <h2>تسجيل دخول الأدمن</h2>
        <p>أدخل بيانات حساب الإدارة للمتابعة.</p>
        {error && <div className="login-error" role="alert">{error}</div>}
        <label>اسم المستخدم<input autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} required autoFocus /></label>
        <label>كلمة المرور<div className="password-field"><input type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required /><button type="button" className="password-toggle" aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'} title={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'} onClick={() => setShowPassword((visible) => !visible)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/>{showPassword && <path d="M4 4l16 16"/>}</svg></button></div></label>
        <button className="btn login-submit" type="submit">دخول إلى الإدارة</button>
      </form>
    </section>
  )
}

function AdminPage({ data, onChange, onLogout }) {
  const [subjectName, setSubjectName] = useState('')
  const [quizForm, setQuizForm] = useState({ subjectId: data.subjects[0]?.id || '', title: '', description: '' })
  const [questionForm, setQuestionForm] = useState({ quizId: data.quizzes[0]?.id || '', text: '', answers: ['', '', '', ''], correctIndex: 0, explanation: '' })
  const totalQuestions = useMemo(() => data.quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0), [data])

  const addSubject = (event) => {
    event.preventDefault(); if (!subjectName.trim()) return
    const id = `subject-${Date.now()}`
    onChange({ ...data, subjects: [...data.subjects, { id, name: subjectName.trim(), description: 'مادة مضافة محليًا', icon: '✦' }] }); setSubjectName('')
  }

  const addQuiz = (event) => {
    event.preventDefault(); if (!quizForm.subjectId || !quizForm.title.trim()) return
    onChange({ ...data, quizzes: [...data.quizzes, { id: `quiz-${Date.now()}`, subjectId: quizForm.subjectId, title: quizForm.title.trim(), description: quizForm.description.trim(), timeLimit: 15, passingScore: 60, questions: [] }] })
    setQuizForm((current) => ({ ...current, title: '', description: '' }))
  }

  const addQuestion = (event) => {
    event.preventDefault(); if (!questionForm.quizId || !questionForm.text.trim() || questionForm.answers.some((answer) => !answer.trim())) return
    const nextQuizzes = data.quizzes.map((quiz) => quiz.id === questionForm.quizId ? { ...quiz, questions: [...quiz.questions, { id: `question-${Date.now()}`, text: questionForm.text.trim(), answers: questionForm.answers.map((answer) => answer.trim()), correctIndex: Number(questionForm.correctIndex), explanation: questionForm.explanation.trim() || 'لا يوجد شرح إضافي.' }] } : quiz)
    onChange({ ...data, quizzes: nextQuizzes }); setQuestionForm((current) => ({ ...current, text: '', answers: ['', '', '', ''], correctIndex: 0, explanation: '' }))
  }

  const resetData = () => { if (window.confirm('إعادة جميع بيانات النسخة التجريبية؟')) onChange(cloneDemoData()) }

  return (
    <>
      <div className="admin-heading"><div><span className="eyebrow dark">محفوظ في هذا المتصفح فقط</span><h1>الإدارة المحلية</h1><p>التعديلات لا تحتاج خادمًا، لكنها لن تظهر على جهاز آخر.</p></div><div className="admin-actions"><button className="btn secondary" onClick={onLogout}>تسجيل الخروج</button><button className="btn danger" onClick={resetData}>إعادة البيانات التجريبية</button></div></div>
      <div className="stats-grid"><div className="stat-card"><strong>{data.subjects.length}</strong><span>مواد</span></div><div className="stat-card"><strong>{data.quizzes.length}</strong><span>اختبارات</span></div><div className="stat-card"><strong>{totalQuestions}</strong><span>أسئلة</span></div></div>
      <div className="admin-grid">
        <form className="card form-card" onSubmit={addSubject}><h2>إضافة مادة</h2><label>اسم المادة<input value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required /></label><button className="btn">إضافة</button></form>
        <form className="card form-card" onSubmit={addQuiz}><h2>إضافة اختبار</h2><label>المادة<select value={quizForm.subjectId} onChange={(e) => setQuizForm({ ...quizForm, subjectId: e.target.value })}>{data.subjects.map((subject) => <option value={subject.id} key={subject.id}>{subject.name}</option>)}</select></label><label>العنوان<input value={quizForm.title} onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })} required /></label><label>الوصف<input value={quizForm.description} onChange={(e) => setQuizForm({ ...quizForm, description: e.target.value })} /></label><button className="btn">إضافة الاختبار</button></form>
      </div>
      <form className="card form-card question-form" onSubmit={addQuestion}><h2>إضافة سؤال</h2><label>الاختبار<select value={questionForm.quizId} onChange={(e) => setQuestionForm({ ...questionForm, quizId: e.target.value })}>{data.quizzes.map((quiz) => <option value={quiz.id} key={quiz.id}>{quiz.title}</option>)}</select></label><label>نص السؤال<input value={questionForm.text} onChange={(e) => setQuestionForm({ ...questionForm, text: e.target.value })} required /></label><div className="answers-editor">{questionForm.answers.map((answer, index) => <label key={index}><span><input type="radio" name="correct" checked={Number(questionForm.correctIndex) === index} onChange={() => setQuestionForm({ ...questionForm, correctIndex: index })} /> الصحيحة</span><input value={answer} placeholder={`الإجابة ${index + 1}`} onChange={(e) => { const answers = [...questionForm.answers]; answers[index] = e.target.value; setQuestionForm({ ...questionForm, answers }) }} required /></label>)}</div><label>الشرح<input value={questionForm.explanation} onChange={(e) => setQuestionForm({ ...questionForm, explanation: e.target.value })} /></label><button className="btn">إضافة السؤال</button></form>
    </>
  )
}

function NotFound() {
  return <div className="card empty-state"><h2>الصفحة غير موجودة</h2><button className="btn" onClick={() => go()}>العودة للرئيسية</button></div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
