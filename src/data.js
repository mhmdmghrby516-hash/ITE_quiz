import excelLogo from './assets/excel-logo.svg'
import powerpointLogo from './assets/powerpoint-logo.svg'
import wordLogo from './assets/word-logo.svg'

export const demoData = {
  subjects: [
    { id: 'excel', name: 'Excel', description: 'اختبارات وأسئلة في برنامج Microsoft Excel', icon: 'X', logo: excelLogo, theme: 'excel' },
    { id: 'powerpoint', name: 'PowerPoint', description: 'اختبارات وأسئلة في برنامج Microsoft PowerPoint', icon: 'P', logo: powerpointLogo, theme: 'powerpoint' },
    { id: 'word', name: 'Word', description: 'اختبارات وأسئلة في برنامج Microsoft Word', icon: 'W', logo: wordLogo, theme: 'word' },
  ],
  quizzes: [],
}

export const cloneDemoData = () => JSON.parse(JSON.stringify(demoData))
