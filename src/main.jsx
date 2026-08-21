import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { cloneDemoData } from './data'
import './styles.css'

const DATA_KEY = 'asmaa-react-quiz-data-v4'
const RESULTS_KEY = 'asmaa-react-quiz-results-v1'
const ADMIN_SESSION_KEY = 'asmaa-react-admin-session'
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'Admin@12345'

function readData() {
  try {
    const saved = localStorage.getItem(DATA_KEY)
    if (!saved) return cloneDemoData()

    const current = JSON.parse(saved)
    const defaults = cloneDemoData()
    const savedSubjects = Array.isArray(current.subjects) ? current.subjects : []
    const savedQuizzes = Array.isArray(current.quizzes) ? current.quizzes : []
    const subjectIds = new Set(savedSubjects.map((subject) => subject.id))
    const quizIds = new Set(savedQuizzes.map((quiz) => quiz.id))

    return {
      subjects: [...savedSubjects, ...defaults.subjects.filter((subject) => !subjectIds.has(subject.id))],
      quizzes: [...savedQuizzes, ...defaults.quizzes.filter((quiz) => !quizIds.has(quiz.id))],
    }
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
      <a className="skip-link" href="#main-content">انتقل إلى المحتوى الرئيسي</a>
      <Header activePage={route.page} adminAuthenticated={adminAuthenticated} onLogout={() => { sessionStorage.removeItem(ADMIN_SESSION_KEY); setAdminAuthenticated(false); go() }} />
      <main className="container page-space" id="main-content" tabIndex="-1">{content}</main>
      <Footer />
    </div>
  )
}

function PlatformMark() {
  return (
    <svg className="platform-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 14 24 6l17 8-17 8z" />
      <path d="M13 19v10c0 4 5 8 11 8s11-4 11-8V19" />
      <path d="M41 14v13" />
      <circle cx="41" cy="30" r="2" />
    </svg>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <button className="brand brand-lockup link-button" type="button" aria-label="العودة إلى الصفحة الرئيسية" onClick={() => go()}><PlatformMark /><span>منصة الكويزات</span></button>
          <p>منصة تعليمية تساعدك على مراجعة معلوماتك، حل الاختبارات، ومعرفة الإجابات الصحيحة فورًا.</p>
        </div>
        <nav className="footer-column" aria-label="روابط التذييل">
          <h3>روابط سريعة</h3>
          <button className="footer-link link-button" type="button" onClick={() => go()}>الرئيسية</button>
          <button className="footer-link link-button" type="button" onClick={() => go('subject/excel')}>Excel</button>
          <button className="footer-link link-button" type="button" onClick={() => go('subject/powerpoint')}>PowerPoint</button>
          <button className="footer-link link-button" type="button" onClick={() => go('subject/word')}>Word</button>
          <button className="footer-link link-button" type="button" onClick={() => go('admin')}>دخول الأدمن</button>
        </nav>
        <div className="footer-column">
          <h3>تعلّم بذكاء</h3>
          <p>تدرّب باستمرار، راجع أخطاءك، وحوّل كل محاولة إلى خطوة جديدة نحو التفوق.</p>
          <span className="footer-badge"><span aria-hidden="true">✓</span> اختبارات تفاعلية وتصحيح فوري</span>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="container footer-bottom">
        <span>© {currentYear} منصة الكويزات. جميع الحقوق محفوظة.</span>
        <span>صُممت بعناية لدعم رحلة الطلاب التعليمية.</span>
      </div>
    </footer>
  )
}

function Header({ activePage, adminAuthenticated, onLogout }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <button className="brand brand-lockup link-button" type="button" aria-label="منصة الكويزات - الرئيسية" onClick={() => go()}><PlatformMark /><span>منصة الكويزات</span></button>
        <nav aria-label="التنقل الرئيسي">
          <button className="nav-link link-button" type="button" aria-current={activePage === 'home' ? 'page' : undefined} onClick={() => go()}>الرئيسية</button>
          {adminAuthenticated
            ? <button className="nav-link link-button" type="button" onClick={onLogout}>تسجيل الخروج</button>
            : <button className="nav-link nav-cta link-button" type="button" aria-current={activePage === 'admin' ? 'page' : undefined} onClick={() => go('admin')}>دخول الأدمن</button>}
        </nav>
      </div>
    </header>
  )
}

function SubjectLogo({ subject, large = false }) {
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => setImageFailed(false), [subject.logo])

  return (
    <div className={`subject-icon ${large ? 'large' : ''} ${subject.theme ? `subject-icon--${subject.theme}` : ''}`} aria-hidden={imageFailed || !subject.logo ? undefined : 'false'}>
      {subject.logo && !imageFailed
        ? <img src={subject.logo} alt={`شعار ${subject.name}`} loading="lazy" decoding="async" onError={() => setImageFailed(true)} />
        : <span className="subject-icon-fallback" aria-label={`رمز ${subject.name}`}>{subject.icon || subject.name?.charAt(0) || '✦'}</span>}
    </div>
  )
}

function HomePage({ data }) {
  const scrollToSubjects = () => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <span className="eyebrow"><span aria-hidden="true">✦</span> تعلّم واختبر نفسك</span>
          <h1 id="hero-title">طوّر مهاراتك،<br /><span>اختبارًا بعد اختبار.</span></h1>
          <p>تدرّب على أدوات Microsoft Office من خلال تجربة تعليمية واضحة، سريعة، ومصممة لتمنحك نتيجة فورية.</p>
          <div className="hero-actions">
            <button className="btn hero-primary" type="button" onClick={scrollToSubjects}>استكشف المواد <span aria-hidden="true">←</span></button>
            <button className="btn hero-secondary" type="button" onClick={() => go('admin')}>دخول الأدمن</button>
          </div>
          <div className="hero-features" aria-label="مميزات المنصة">
            <span><strong>3</strong> مواد متخصصة</span>
            <span><strong>فوري</strong> تصحيح الإجابات</span>
            <span><strong>100%</strong> متجاوب</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-glow" />
          <div className="hero-dashboard-card">
            <div className="hero-dashboard-head"><span>رحلتك التعليمية</span><span className="status-dot">مباشر</span></div>
            <div className="hero-apps">
              {data.subjects.slice(0, 3).map((subject, index) => <div className={`hero-app hero-app-${index + 1}`} key={subject.id}><SubjectLogo subject={subject} /><span>{subject.name}</span></div>)}
            </div>
            <div className="hero-progress"><div><span>تقدمك القادم</span><strong>ابدأ الآن</strong></div><span className="progress-ring">75%</span></div>
          </div>
        </div>
      </section>
      <section className="subjects-section" id="subjects" aria-labelledby="subjects-title">
        <div className="section-heading"><div><span className="section-kicker">مسارات التعلّم</span><h2 id="subjects-title">اختر المادة وابدأ رحلتك</h2><p>كل مسار مصمم ليمنحك ممارسة عملية وتجربة اختبار سلسة.</p></div><span className="section-count">{data.subjects.length} مواد متاحة</span></div>
        <div className="grid subjects-grid">
          {data.subjects.map((subject) => {
            const count = data.quizzes.filter((quiz) => quiz.subjectId === subject.id).length
            return (
              <article className={`card subject-card ${subject.theme ? `subject-card--${subject.theme}` : ''}`} style={subject.logo ? { '--subject-watermark': `url("${subject.logo}")` } : undefined} key={subject.id}>
                <div className="subject-card-top"><SubjectLogo subject={subject} /><span className="badge">{count} اختبار</span></div>
                <div className="subject-card-body"><h3>{subject.name}</h3><p>{subject.description}</p></div>
                <button className="btn subject-start" type="button" aria-label={`ابدأ مادة ${subject.name}`} onClick={() => go(`subject/${subject.id}`)}><span>ابدأ</span><span aria-hidden="true">←</span></button>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

function SubjectPage({ data, subjectId }) {
  const subject = data.subjects.find((item) => item.id === subjectId)
  const quizzes = data.quizzes.filter((quiz) => quiz.subjectId === subjectId)
  if (!subject) return <NotFound />

  return (
    <>
      <button className="back-link" type="button" aria-label="العودة إلى قائمة المواد" onClick={() => go()}><span aria-hidden="true">→</span> العودة إلى المواد</button>
      <div className="page-title"><SubjectLogo subject={subject} large /><div><span className="section-kicker">مسار تعليمي</span><h1>{subject.name}</h1><p>{subject.description}</p></div></div>
      <div className="grid">
        {quizzes.map((quiz) => (
          <article className="card quiz-card" key={quiz.id}>
            <div className="quiz-meta"><span>⏱ {quiz.timeLimit} دقيقة</span><span>✓ النجاح {quiz.passingScore}%</span></div>
            <h3>{quiz.title}</h3><p>{quiz.description}</p>
            <span className="question-count">{quiz.questions.length} أسئلة</span>
            <button className="btn" type="button" aria-label={`ابدأ اختبار ${quiz.title}`} onClick={() => go(`quiz/${quiz.id}`)}>ابدأ الاختبار</button>
          </article>
        ))}
        {!quizzes.length && <div className="card empty-state subject-empty"><span className="empty-icon" aria-hidden="true">＋</span><h2>الاختبارات قيد الإعداد</h2><p>لا توجد اختبارات لهذه المادة حاليًا. يمكنك العودة قريبًا أو إضافة اختبار من لوحة الإدارة.</p><button className="btn secondary" type="button" onClick={() => go('admin')}>فتح لوحة الإدارة</button></div>}
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
      <button className="back-link" type="button" onClick={() => go(`subject/${quiz.subjectId}`)}><span aria-hidden="true">→</span> العودة إلى الاختبارات</button>
      <div className="quiz-heading"><div><h1>{quiz.title}</h1><p>{quiz.description}</p></div><div className="progress-pill" aria-live="polite">أجبت عن {Object.keys(answers).length} من {quiz.questions.length}</div></div>
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
                  <button className={`answer-option ${state}`} type="button" aria-pressed={isSelected} aria-label={`الإجابة ${answerIndex + 1}: ${answer}`} disabled={answered} onClick={() => answerQuestion(question, answerIndex)} key={answerIndex}>
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
      <div className="finish-bar"><span aria-live="polite">{quiz.questions.length - Object.keys(answers).length ? `بقي ${quiz.questions.length - Object.keys(answers).length} سؤال` : 'أجبت عن جميع الأسئلة'}</span><button className="btn" type="button" onClick={finishQuiz}>إنهاء الاختبار</button></div>
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
  const firstSubject = data.subjects[0]
  const firstEditableQuiz = data.quizzes.find((quiz) => quiz.questions.length) || data.quizzes[0]
  const firstEditableQuestion = firstEditableQuiz?.questions[0]
  const [editSubjectId, setEditSubjectId] = useState(firstSubject?.id || '')
  const [subjectEdit, setSubjectEdit] = useState({ name: firstSubject?.name || '', description: firstSubject?.description || '', icon: firstSubject?.icon || '✦', logo: firstSubject?.logo || '' })
  const [editQuizId, setEditQuizId] = useState(firstEditableQuiz?.id || '')
  const [editQuestionId, setEditQuestionId] = useState(firstEditableQuestion?.id || '')
  const [questionEdit, setQuestionEdit] = useState({ text: firstEditableQuestion?.text || '', answers: firstEditableQuestion?.answers || [], correctIndex: firstEditableQuestion?.correctIndex || 0, explanation: firstEditableQuestion?.explanation || '' })
  const [adminNotice, setAdminNotice] = useState('')
  const totalQuestions = useMemo(() => data.quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0), [data])
  const editableQuiz = data.quizzes.find((quiz) => quiz.id === editQuizId)
  const editableQuestions = editableQuiz?.questions || []

  const addSubject = (event) => {
    event.preventDefault(); if (!subjectName.trim()) return
    const id = `subject-${Date.now()}`
    onChange({ ...data, subjects: [...data.subjects, { id, name: subjectName.trim(), description: 'مادة مضافة محليًا', icon: '✦' }] }); setSubjectName('')
  }

  const addQuiz = (event) => {
    event.preventDefault()
    const subjectId = quizForm.subjectId || data.subjects[0]?.id
    if (!subjectId || !quizForm.title.trim()) return
    const newQuiz = { id: `quiz-${Date.now()}`, subjectId, title: quizForm.title.trim(), description: quizForm.description.trim(), timeLimit: 15, passingScore: 60, questions: [] }
    onChange({ ...data, quizzes: [...data.quizzes, newQuiz] })
    setQuizForm((current) => ({ ...current, title: '', description: '' }))
    setQuestionForm((current) => current.quizId ? current : { ...current, quizId: newQuiz.id })
    if (!editQuizId) setEditQuizId(newQuiz.id)
  }

  const addQuestion = (event) => {
    event.preventDefault()
    const quizId = questionForm.quizId || data.quizzes[0]?.id
    if (!quizId || !questionForm.text.trim() || questionForm.answers.length < 2 || questionForm.answers.some((answer) => !answer.trim())) return
    const newQuestion = { id: `question-${Date.now()}`, text: questionForm.text.trim(), answers: questionForm.answers.map((answer) => answer.trim()), correctIndex: Number(questionForm.correctIndex), explanation: questionForm.explanation.trim() || 'لا يوجد شرح إضافي.' }
    const nextQuizzes = data.quizzes.map((quiz) => quiz.id === quizId ? { ...quiz, questions: [...quiz.questions, newQuestion] } : quiz)
    onChange({ ...data, quizzes: nextQuizzes })
    setQuestionForm((current) => ({ ...current, text: '', answers: ['', '', '', ''], correctIndex: 0, explanation: '' }))
    setEditQuizId(quizId)
    setEditQuestionId(newQuestion.id)
    setQuestionEdit({ text: newQuestion.text, answers: [...newQuestion.answers], correctIndex: newQuestion.correctIndex, explanation: newQuestion.explanation })
  }

  const addAnswerToNewQuestion = () => setQuestionForm((current) => ({ ...current, answers: [...current.answers, ''] }))

  const removeAnswerFromNewQuestion = (answerIndex) => setQuestionForm((current) => {
    if (current.answers.length <= 2) return current
    const correctIndex = Number(current.correctIndex)
    return {
      ...current,
      answers: current.answers.filter((_, index) => index !== answerIndex),
      correctIndex: answerIndex === correctIndex ? 0 : answerIndex < correctIndex ? correctIndex - 1 : correctIndex,
    }
  })

  const selectSubjectToEdit = (subjectId) => {
    const subject = data.subjects.find((item) => item.id === subjectId)
    setEditSubjectId(subjectId)
    setSubjectEdit({ name: subject?.name || '', description: subject?.description || '', icon: subject?.icon || '✦', logo: subject?.logo || '' })
    setAdminNotice('')
  }

  const uploadSubjectLogo = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'].includes(file.type)) {
      setAdminNotice('يرجى اختيار صورة PNG أو JPG أو WebP أو GIF أو SVG.')
      event.target.value = ''
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setAdminNotice('حجم الصورة كبير. يجب ألا يتجاوز 2 MB.')
      event.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setSubjectEdit((current) => ({ ...current, logo: String(reader.result || '') }))
      setAdminNotice('')
    }
    reader.readAsDataURL(file)
  }

  const saveSubject = (event) => {
    event.preventDefault()
    if (!editSubjectId || !subjectEdit.name.trim()) return
    const subjects = data.subjects.map((subject) => subject.id === editSubjectId ? {
      ...subject,
      name: subjectEdit.name.trim(),
      description: subjectEdit.description.trim(),
      icon: subjectEdit.icon.trim() || '✦',
      logo: subjectEdit.logo || '',
    } : subject)
    onChange({ ...data, subjects })
    setAdminNotice('تم حفظ تعديلات المادة بنجاح.')
  }

  const loadQuestionToEdit = (quizId, questionId) => {
    const quiz = data.quizzes.find((item) => item.id === quizId)
    const question = quiz?.questions.find((item) => item.id === questionId)
    setEditQuizId(quizId)
    setEditQuestionId(question?.id || '')
    setQuestionEdit({
      text: question?.text || '',
      answers: question ? [...question.answers] : [],
      correctIndex: question?.correctIndex || 0,
      explanation: question?.explanation || '',
    })
    setAdminNotice('')
  }

  const selectQuizToEdit = (quizId) => {
    const quiz = data.quizzes.find((item) => item.id === quizId)
    loadQuestionToEdit(quizId, quiz?.questions[0]?.id || '')
  }

  const saveQuestion = (event) => {
    event.preventDefault()
    if (!editQuizId || !editQuestionId || !questionEdit.text.trim() || questionEdit.answers.length < 2 || questionEdit.answers.some((answer) => !answer.trim())) return
    const quizzes = data.quizzes.map((quiz) => quiz.id === editQuizId ? {
      ...quiz,
      questions: quiz.questions.map((question) => question.id === editQuestionId ? {
        ...question,
        text: questionEdit.text.trim(),
        answers: questionEdit.answers.map((answer) => answer.trim()),
        correctIndex: Number(questionEdit.correctIndex),
        explanation: questionEdit.explanation.trim() || 'لا يوجد شرح إضافي.',
      } : question),
    } : quiz)
    onChange({ ...data, quizzes })
    setAdminNotice('تم حفظ تعديلات السؤال والإجابات بنجاح.')
  }

  const deleteQuestion = () => {
    if (!editQuizId || !editQuestionId) return
    const question = editableQuestions.find((item) => item.id === editQuestionId)
    if (!question || !window.confirm(`هل أنت متأكد من حذف السؤال: "${question.text}"؟`)) return
    const remainingQuestions = editableQuestions.filter((item) => item.id !== editQuestionId)
    const quizzes = data.quizzes.map((quiz) => quiz.id === editQuizId ? { ...quiz, questions: remainingQuestions } : quiz)
    onChange({ ...data, quizzes })
    const nextQuestion = remainingQuestions[0]
    setEditQuestionId(nextQuestion?.id || '')
    setQuestionEdit({
      text: nextQuestion?.text || '',
      answers: nextQuestion ? [...nextQuestion.answers] : [],
      correctIndex: nextQuestion?.correctIndex || 0,
      explanation: nextQuestion?.explanation || '',
    })
    setAdminNotice('تم حذف السؤال بنجاح.')
  }

  const addAnswerToEditedQuestion = () => setQuestionEdit((current) => ({ ...current, answers: [...current.answers, ''] }))

  const removeAnswerFromEditedQuestion = (answerIndex) => setQuestionEdit((current) => {
    if (current.answers.length <= 2) return current
    const correctIndex = Number(current.correctIndex)
    return {
      ...current,
      answers: current.answers.filter((_, index) => index !== answerIndex),
      correctIndex: answerIndex === correctIndex ? 0 : answerIndex < correctIndex ? correctIndex - 1 : correctIndex,
    }
  })

  const resetData = () => { if (window.confirm('إعادة جميع بيانات النسخة التجريبية؟')) onChange(cloneDemoData()) }

  return (
    <>
      <div className="admin-heading"><div><span className="eyebrow dark">محفوظ في هذا المتصفح فقط</span><h1>الإدارة المحلية</h1><p>التعديلات لا تحتاج خادمًا، لكنها لن تظهر على جهاز آخر.</p></div><div className="admin-actions"><button className="btn secondary" onClick={onLogout}>تسجيل الخروج</button><button className="btn danger" onClick={resetData}>إعادة البيانات التجريبية</button></div></div>
      <div className="stats-grid"><div className="stat-card"><strong>{data.subjects.length}</strong><span>مواد</span></div><div className="stat-card"><strong>{data.quizzes.length}</strong><span>اختبارات</span></div><div className="stat-card"><strong>{totalQuestions}</strong><span>أسئلة</span></div></div>
      {adminNotice && <div className="admin-notice" role="status">✓ {adminNotice}</div>}
      <div className="admin-grid">
        <form className="card form-card" onSubmit={addSubject}><h2>إضافة مادة</h2><label>اسم المادة<input value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required /></label><button className="btn">إضافة</button></form>
        <form className="card form-card" onSubmit={addQuiz}><h2>إضافة اختبار</h2><label>المادة<select value={quizForm.subjectId || data.subjects[0]?.id || ''} onChange={(e) => setQuizForm({ ...quizForm, subjectId: e.target.value })}>{data.subjects.map((subject) => <option value={subject.id} key={subject.id}>{subject.name}</option>)}</select></label><label>العنوان<input value={quizForm.title} onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })} required /></label><label>الوصف<input value={quizForm.description} onChange={(e) => setQuizForm({ ...quizForm, description: e.target.value })} /></label><button className="btn">إضافة الاختبار</button></form>
      </div>
      <form className="card form-card question-form" onSubmit={addQuestion}>
        <h2>إضافة سؤال</h2>
        <label>الاختبار<select value={questionForm.quizId || data.quizzes[0]?.id || ''} onChange={(event) => setQuestionForm({ ...questionForm, quizId: event.target.value })}>{data.quizzes.map((quiz) => <option value={quiz.id} key={quiz.id}>{quiz.title}</option>)}</select></label>
        <label>نص السؤال<input value={questionForm.text} onChange={(event) => setQuestionForm({ ...questionForm, text: event.target.value })} required /></label>
        <div className="answers-section-heading"><div><h3>الإجابات</h3><p>اختر الإجابة الصحيحة، وأضف أو احذف الخيارات حسب الحاجة.</p></div><span>{questionForm.answers.length} إجابات</span></div>
        <div className="answers-editor">{questionForm.answers.map((answer, index) => <div className="answer-editor-item" key={index}>
          <div className="answer-editor-head"><label className="answer-correct-control"><input type="radio" name="correct" checked={Number(questionForm.correctIndex) === index} onChange={() => setQuestionForm({ ...questionForm, correctIndex: index })} /> الصحيحة</label><button className="remove-answer-btn" type="button" disabled={questionForm.answers.length <= 2} aria-label={`حذف الإجابة ${index + 1}`} onClick={() => removeAnswerFromNewQuestion(index)}>حذف</button></div>
          <input value={answer} aria-label={`نص الإجابة ${index + 1}`} placeholder={`الإجابة ${index + 1}`} onChange={(event) => { const answers = [...questionForm.answers]; answers[index] = event.target.value; setQuestionForm({ ...questionForm, answers }) }} required />
        </div>)}</div>
        <button className="add-answer-btn" type="button" onClick={addAnswerToNewQuestion}><span aria-hidden="true">＋</span> إضافة إجابة أخرى</button>
        <label>الشرح<input value={questionForm.explanation} onChange={(event) => setQuestionForm({ ...questionForm, explanation: event.target.value })} /></label>
        <button className="btn" type="submit">إضافة السؤال</button>
      </form>
      <div className="admin-section-heading">
        <span className="eyebrow dark">إدارة المحتوى الحالي</span>
        <h2>تعديل المواد والأسئلة</h2>
        <p>اختر العنصر المطلوب، عدّل بياناته، ثم اضغط حفظ التعديلات.</p>
      </div>
      <div className="admin-grid edit-grid">
        <form className="card form-card" onSubmit={saveSubject}>
          <h2>تعديل مادة</h2>
          <label>اختر المادة<select value={editSubjectId} onChange={(event) => selectSubjectToEdit(event.target.value)}>{data.subjects.map((subject) => <option value={subject.id} key={subject.id}>{subject.name}</option>)}</select></label>
          <label>اسم المادة<input value={subjectEdit.name} onChange={(event) => setSubjectEdit({ ...subjectEdit, name: event.target.value })} required /></label>
          <label>الوصف<textarea rows="4" value={subjectEdit.description} onChange={(event) => setSubjectEdit({ ...subjectEdit, description: event.target.value })} /></label>
          <label>الأيقونة أو الرمز<input value={subjectEdit.icon} onChange={(event) => setSubjectEdit({ ...subjectEdit, icon: event.target.value })} /></label>
          <div className="logo-upload-field">
            <span className="field-label">صورة أو شعار المادة</span>
            <div className="logo-upload-row">
              <SubjectLogo subject={{ ...subjectEdit, name: subjectEdit.name || 'المادة' }} />
              <div className="logo-upload-actions">
                <label className="file-upload-btn">اختيار صورة<input type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml" onChange={uploadSubjectLogo} /></label>
                <small>PNG، JPG، WebP، GIF أو SVG — حتى 2 MB</small>
                {subjectEdit.logo && <button className="remove-logo-btn" type="button" onClick={() => setSubjectEdit({ ...subjectEdit, logo: '' })}>إزالة الصورة</button>}
              </div>
            </div>
          </div>
          <button className="btn" type="submit">حفظ تعديلات المادة</button>
        </form>
        <form className="card form-card edit-question-form" onSubmit={saveQuestion}>
          <h2>تعديل سؤال</h2>
          <label>اختر الاختبار<select value={editQuizId} onChange={(event) => selectQuizToEdit(event.target.value)}>{data.quizzes.map((quiz) => <option value={quiz.id} key={quiz.id}>{quiz.title}</option>)}</select></label>
          {editableQuestions.length ? <>
            <label>اختر السؤال<select value={editQuestionId} onChange={(event) => loadQuestionToEdit(editQuizId, event.target.value)}>{editableQuestions.map((question, index) => <option value={question.id} key={question.id}>{index + 1}. {question.text.slice(0, 70)}</option>)}</select></label>
            <label>نص السؤال<textarea rows="4" value={questionEdit.text} onChange={(event) => setQuestionEdit({ ...questionEdit, text: event.target.value })} required /></label>
            <div className="answers-section-heading"><div><h3>الإجابات</h3><p>يمكن تعديل عدد الخيارات مع تحديد إجابة صحيحة واحدة.</p></div><span>{questionEdit.answers.length} إجابات</span></div>
            <div className="answers-editor">{questionEdit.answers.map((answer, index) => <div className="answer-editor-item" key={index}>
              <div className="answer-editor-head"><label className="answer-correct-control"><input type="radio" name="edit-correct" checked={Number(questionEdit.correctIndex) === index} onChange={() => setQuestionEdit({ ...questionEdit, correctIndex: index })} /> الإجابة الصحيحة</label><button className="remove-answer-btn" type="button" disabled={questionEdit.answers.length <= 2} aria-label={`حذف الإجابة ${index + 1}`} onClick={() => removeAnswerFromEditedQuestion(index)}>حذف</button></div>
              <input value={answer} aria-label={`نص الإجابة ${index + 1}`} onChange={(event) => { const answers = [...questionEdit.answers]; answers[index] = event.target.value; setQuestionEdit({ ...questionEdit, answers }) }} required />
            </div>)}</div>
            <button className="add-answer-btn" type="button" onClick={addAnswerToEditedQuestion}><span aria-hidden="true">＋</span> إضافة إجابة أخرى</button>
            <label>شرح الإجابة<textarea rows="3" value={questionEdit.explanation} onChange={(event) => setQuestionEdit({ ...questionEdit, explanation: event.target.value })} /></label>
            <div className="question-edit-actions"><button className="btn" type="submit">حفظ تعديلات السؤال</button><button className="btn danger" type="button" onClick={deleteQuestion}>حذف السؤال</button></div>
          </> : <p className="empty-edit-state">لا يحتوي هذا الاختبار على أسئلة لتعديلها.</p>}
        </form>
      </div>
    </>
  )
}

function NotFound() {
  return <div className="card empty-state"><h2>الصفحة غير موجودة</h2><button className="btn" onClick={() => go()}>العودة للرئيسية</button></div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
