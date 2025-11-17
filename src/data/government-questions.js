// Government and Law Questions - Identified as HARDEST by research
// These questions have the highest fail rate on the real test

export const GOVERNMENT_QUESTIONS = [
  {
    id: 'gov1',
    question: 'What are Senators?',
    options: [
      { id: 'gov1a', text: 'People who work for the government' },
      { id: 'gov1b', text: 'Elected representatives in the Australian Parliament', correct: true },
      { id: 'gov1c', text: 'People who make laws in the states' }
    ],
    explanation: 'Senators are elected representatives in the Australian Parliament. They represent the states and territories in the Senate (upper house).',
    category: 'government-law',
    difficulty: 'hard',
    commonMistake: true,
    failRate: 26 // 26% got this correct = 74% fail rate
  },
  {
    id: 'gov2',
    question: 'What happened in Australia on 26 January 1788?',
    options: [
      { id: 'gov2a', text: 'The First Fleet from Great Britain arrived', correct: true },
      { id: 'gov2b', text: 'The first Australian parliament opened' },
      { id: 'gov2c', text: 'Australia became a federation' }
    ],
    explanation: 'The First Fleet arrived at Sydney Cove on 26 January 1788. This marks the beginning of European settlement in Australia. We now celebrate Australia Day on this date.',
    category: 'australia-people',
    difficulty: 'hard',
    commonMistake: true,
    failRate: 27
  },
  {
    id: 'gov3',
    question: 'How are Government Ministers chosen?',
    options: [
      { id: 'gov3a', text: 'By the Governor-General' },
      { id: 'gov3b', text: 'By the Prime Minister', correct: true },
      { id: 'gov3c', text: 'By the Australian people' }
    ],
    explanation: 'Government Ministers are chosen by the Prime Minister from members of parliament. They are responsible for specific areas of government (e.g., Health, Education, Defense).',
    category: 'government-law',
    difficulty: 'hard',
    commonMistake: true,
    failRate: 30
  },
  {
    id: 'gov4',
    question: 'Into what kind of electorates is Australia divided?',
    options: [
      { id: 'gov4a', text: 'State and territory electorates' },
      { id: 'gov4b', text: 'Federal electorates', correct: true },
      { id: 'gov4c', text: 'Council electorates' }
    ],
    explanation: 'Australia is divided into federal electorates (also called electoral divisions). Each electorate elects one member to the House of Representatives.',
    category: 'government-law',
    difficulty: 'hard',
    commonMistake: true,
    failRate: 31
  },
  {
    id: 'gov5',
    question: 'What is the name of an elected representative of a state or territory in the Australian Parliament?',
    options: [
      { id: 'gov5a', text: 'A Councillor' },
      { id: 'gov5b', text: 'A Member of Parliament (MP)' },
      { id: 'gov5c', text: 'A Senator', correct: true }
    ],
    explanation: 'Senators represent states and territories in the Australian Parliament. Each state has 12 senators, and each mainland territory has 2 senators.',
    category: 'government-law',
    difficulty: 'hard',
    commonMistake: true,
    failRate: 16 // Only 16% got this correct!
  },
  {
    id: 'gov6',
    question: 'How many senators are there in the Australian Parliament?',
    options: [
      { id: 'gov6a', text: '76 senators', correct: true },
      { id: 'gov6b', text: '150 senators' },
      { id: 'gov6c', text: '100 senators' }
    ],
    explanation: 'There are 76 senators in total: 12 from each of the 6 states (72) plus 2 from each of the 2 mainland territories (4).',
    category: 'government-law',
    difficulty: 'hard',
    commonMistake: true
  },
  {
    id: 'gov7',
    question: 'Which house of Parliament is the Senate sometimes called?',
    options: [
      { id: 'gov7a', text: 'The Lower House' },
      { id: 'gov7b', text: 'The Upper House', correct: true },
      { id: 'gov7c', text: 'The People\'s House' }
    ],
    explanation: 'The Senate is sometimes called the Upper House, the House of Review, or the House of States. It reviews legislation passed by the House of Representatives.',
    category: 'government-law',
    difficulty: 'medium',
    commonMistake: true
  },
  {
    id: 'gov8',
    question: 'What is the name given to the party with the second largest number of members in the House of Representatives?',
    options: [
      { id: 'gov8a', text: 'The Opposition', correct: true },
      { id: 'gov8b', text: 'The Senate' },
      { id: 'gov8c', text: 'The Minor party' }
    ],
    explanation: 'The party or coalition with the second largest number of members in the House of Representatives is called the Opposition. The leader is the Leader of the Opposition.',
    category: 'government-law',
    difficulty: 'medium',
    commonMistake: true
  },
  {
    id: 'gov9',
    question: 'Who do Members of Parliament represent?',
    options: [
      { id: 'gov9a', text: 'Only the people who voted for them' },
      { id: 'gov9b', text: 'All Australians' },
      { id: 'gov9c', text: 'All people living in their electorate', correct: true }
    ],
    explanation: 'Members of Parliament represent all people living in their electorate, not just those who voted for them. They have a duty to serve everyone in their electoral division.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'gov10',
    question: 'How many members are in the House of Representatives?',
    options: [
      { id: 'gov10a', text: '76 members' },
      { id: 'gov10b', text: '150 members', correct: true },
      { id: 'gov10c', text: '100 members' }
    ],
    explanation: 'There are 150 members in the House of Representatives. Each member represents one federal electorate.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'gov11',
    question: 'Who elects Members of Parliament?',
    options: [
      { id: 'gov11a', text: 'The Prime Minister' },
      { id: 'gov11b', text: 'Australian citizens aged 18 years or over', correct: true },
      { id: 'gov11c', text: 'The Governor-General' }
    ],
    explanation: 'Members of Parliament are elected by Australian citizens who are aged 18 years or over. Voting is compulsory for all eligible Australian citizens.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'gov12',
    question: 'What are the three levels of government in Australia?',
    options: [
      { id: 'gov12a', text: 'Federal, state/territory, and local', correct: true },
      { id: 'gov12b', text: 'Federal, High Court, and local' },
      { id: 'gov12c', text: 'Senate, House of Representatives, and Courts' }
    ],
    explanation: 'Australia has three levels of government: Federal (Commonwealth), State/Territory, and Local (Council). Each level has different responsibilities.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'gov13',
    question: 'What is the role of the Governor-General?',
    options: [
      { id: 'gov13a', text: 'To make the laws' },
      { id: 'gov13b', text: 'To represent the King in Australia', correct: true },
      { id: 'gov13c', text: 'To be the Prime Minister' }
    ],
    explanation: 'The Governor-General is the representative of the King of Australia. The Governor-General signs all Bills passed by parliament into law and performs ceremonial duties.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'gov14',
    question: 'When were the first federal elections held in Australia?',
    options: [
      { id: 'gov14a', text: '1788' },
      { id: 'gov14b', text: '1901', correct: true },
      { id: 'gov14c', text: '1967' }
    ],
    explanation: 'The first federal elections were held in 1901, the same year Australia became a nation through Federation.',
    category: 'australia-people',
    difficulty: 'hard'
  },
  {
    id: 'gov15',
    question: 'What is the role of the courts in Australia?',
    options: [
      { id: 'gov15a', text: 'To make laws' },
      { id: 'gov15b', text: 'To enforce laws' },
      { id: 'gov15c', text: 'To apply and interpret the laws', correct: true }
    ],
    explanation: 'Courts apply and interpret the laws. They settle disputes and decide if people have broken the law. This is separate from parliament (makes laws) and police (enforce laws).',
    category: 'government-law',
    difficulty: 'medium'
  }
];
