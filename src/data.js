import { aiQuizzes, aiSubject } from './aiQuestions.js'

export const demoData = {
  subjects: [
    { id: 'math', name: 'الرياضيات', description: 'اختبارات وأسئلة في مادة الرياضيات', icon: '∑' },
    { id: 'physics', name: 'الفيزياء', description: 'اختبارات وأسئلة في مادة الفيزياء', icon: '⚛' },
    { id: 'chemistry', name: 'الكيمياء', description: 'اختبارات وأسئلة في مادة الكيمياء', icon: '⚗' },
    aiSubject,
  ],
  quizzes: [
    {
      id: 'math-basics', subjectId: 'math', title: 'اختبار الرياضيات الأساسي',
      description: 'اختبار تجريبي في أساسيات الرياضيات', timeLimit: 15, passingScore: 60,
      questions: [
        { id: 'm1', text: 'كم ناتج 5 × 5؟', explanation: 'خمسة مضروبة بخمسة تساوي خمسة وعشرين.', answers: ['10', '15', '25', '30'], correctIndex: 2 },
        { id: 'm2', text: 'كم ناتج 12 + 8؟', explanation: '12 + 8 = 20.', answers: ['18', '20', '22', '24'], correctIndex: 1 },
        { id: 'm3', text: 'ما هو الجذر التربيعي للعدد 81؟', explanation: '9 × 9 = 81.', answers: ['7', '8', '9', '10'], correctIndex: 2 },
        { id: 'm4', text: 'أي من الأعداد التالية عدد أولي؟', explanation: 'العدد 13 لا يقبل القسمة إلا على 1 ونفسه.', answers: ['9', '12', '13', '15'], correctIndex: 2 },
        { id: 'm5', text: 'كم تساوي 10% من 200؟', explanation: '10% من 200 تساوي 20.', answers: ['10', '20', '30', '40'], correctIndex: 1 },
      ],
    },
    {
      id: 'physics-basics', subjectId: 'physics', title: 'اختبار الفيزياء الأساسي',
      description: 'اختبار تجريبي في أساسيات الفيزياء', timeLimit: 15, passingScore: 60,
      questions: [
        { id: 'p1', text: 'ما وحدة قياس القوة في النظام الدولي؟', explanation: 'وحدة القوة هي النيوتن.', answers: ['جول', 'واط', 'نيوتن', 'باسكال'], correctIndex: 2 },
        { id: 'p2', text: 'ما سرعة الضوء تقريبًا في الفراغ؟', explanation: 'سرعة الضوء تقارب 300,000 كم/ث.', answers: ['30,000 كم/ث', '150,000 كم/ث', '300,000 كم/ث', '600,000 كم/ث'], correctIndex: 2 },
      ],
    },
    ...aiQuizzes,
  ],
}

export const cloneDemoData = () => JSON.parse(JSON.stringify(demoData))
