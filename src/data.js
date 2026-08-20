export const demoData = {
  subjects: [
    { id: 'excel', name: 'Excel', description: 'اختبارات وأسئلة في برنامج Microsoft Excel', icon: 'X' },
    { id: 'powerpoint', name: 'PowerPoint', description: 'اختبارات وأسئلة في برنامج Microsoft PowerPoint', icon: 'P' },
    { id: 'word', name: 'Word', description: 'اختبارات وأسئلة في برنامج Microsoft Word', icon: 'W' },
  ],
  quizzes: [],
}

export const cloneDemoData = () => JSON.parse(JSON.stringify(demoData))
