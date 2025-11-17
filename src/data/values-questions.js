// CRITICAL: Australian Values Questions
// In the real test, you MUST answer ALL values questions correctly to pass
// Even if you get 19/20 correct overall, missing ONE values question = FAIL

export const VALUES_QUESTIONS = [
  {
    id: 'val1',
    question: 'What are the shared values of Australian society?',
    options: [
      { id: 'val1a', text: 'Freedom, respect, fairness and equality' },
      { id: 'val1b', text: 'Respect, democracy and commitment' },
      { id: 'val1c', text: 'Mateship, equality and democracy', correct: true }
    ],
    explanation: 'Australian society values include mutual respect, freedom, equality of opportunity, democracy, and the rule of law. These values form the foundation of Australian democracy.',
    category: 'australian-values',
    difficulty: 'hard',
    isValueQuestion: true
  },
  {
    id: 'val2',
    question: 'What does parliamentary democracy mean?',
    options: [
      { id: 'val2a', text: 'The King chooses our Members of Parliament' },
      { id: 'val2b', text: 'Australian citizens vote to elect Members of Parliament', correct: true },
      { id: 'val2c', text: 'Trade unions choose our Members of Parliament' }
    ],
    explanation: 'Australia is a parliamentary democracy. This means Australian citizens vote to elect representatives to make laws and decisions on their behalf in Parliament.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val3',
    question: 'What is the rule of law?',
    options: [
      { id: 'val3a', text: 'Everyone must obey the law, including government officials', correct: true },
      { id: 'val3b', text: 'Only citizens must obey the law' },
      { id: 'val3c', text: 'Government officials are above the law' }
    ],
    explanation: 'The rule of law means that no person or group is above the law. Everyone in Australia must obey the laws, including police officers, politicians, and government officials.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val4',
    question: 'Which of these statements about Australian values is correct?',
    options: [
      { id: 'val4a', text: 'Men and women have equal rights in Australia', correct: true },
      { id: 'val4b', text: 'In Australia, men have more rights than women' },
      { id: 'val4c', text: 'In Australia, women have more rights than men' }
    ],
    explanation: 'Men and women are equal under Australian law. Everyone has the same rights regardless of gender, background, or religion.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val5',
    question: 'What does freedom of speech mean in Australia?',
    options: [
      { id: 'val5a', text: 'People can say and write what they think, within the law', correct: true },
      { id: 'val5b', text: 'People can say anything they want without any limits' },
      { id: 'val5c', text: 'Only politicians have freedom of speech' }
    ],
    explanation: 'Freedom of speech allows people to express their views and opinions within the bounds of the law. Speech that incites violence or hatred is not protected.',
    category: 'australian-values',
    difficulty: 'medium',
    isValueQuestion: true
  },
  {
    id: 'val6',
    question: 'Which of these is an example of equality in Australia?',
    options: [
      { id: 'val6a', text: 'Everyone follows the same laws' },
      { id: 'val6b', text: 'Men and women have the same rights' },
      { id: 'val6c', text: 'All of the above', correct: true }
    ],
    explanation: 'Equality in Australia means everyone is equal before the law and has equal opportunities, regardless of their background, gender, or religion.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val7',
    question: 'What is freedom of religion in Australia?',
    options: [
      { id: 'val7a', text: 'Everyone must follow the same religion' },
      { id: 'val7b', text: 'People can choose to follow any religion or no religion', correct: true },
      { id: 'val7c', text: 'Only Christianity is allowed' }
    ],
    explanation: 'Freedom of religion means people can practice any religion they choose, or practice no religion at all. The government does not interfere in people\'s religious choices.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val8',
    question: 'Which of these is an important Australian value?',
    options: [
      { id: 'val8a', text: 'Respect for other people\'s freedom and dignity', correct: true },
      { id: 'val8b', text: 'People must speak English at home' },
      { id: 'val8c', text: 'Everyone must have the same culture' }
    ],
    explanation: 'Mutual respect and respect for others\' freedom and dignity is a core Australian value. Australia is a multicultural society that respects diversity.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val9',
    question: 'In Australia, can people choose who they marry?',
    options: [
      { id: 'val9a', text: 'No, parents must choose for their children' },
      { id: 'val9b', text: 'Yes, and no one can be forced into marriage', correct: true },
      { id: 'val9c', text: 'Only men can choose who they marry' }
    ],
    explanation: 'In Australia, everyone has the right to choose who they marry. Forced marriage is against the law. Men and women have equal rights in marriage.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val10',
    question: 'What is encouraged in Australian society?',
    options: [
      { id: 'val10a', text: 'People should all think the same way' },
      { id: 'val10b', text: 'People should only associate with those from their own culture' },
      { id: 'val10c', text: 'People should try to learn English and participate in Australian society', correct: true }
    ],
    explanation: 'While people are free to maintain their cultural traditions, they are encouraged to learn English and participate in Australian society. This helps integration while respecting diversity.',
    category: 'australian-values',
    difficulty: 'medium',
    isValueQuestion: true
  },
  {
    id: 'val11',
    question: 'What should you do if you disagree with a law in Australia?',
    options: [
      { id: 'val11a', text: 'You do not have to obey the law if you disagree with it' },
      { id: 'val11b', text: 'You must obey the law but can work peacefully to change it', correct: true },
      { id: 'val11c', text: 'You can use violence to protest against it' }
    ],
    explanation: 'Even if you disagree with a law, you must obey it. You can work peacefully to change laws through the democratic process, but violence is never acceptable.',
    category: 'australian-values',
    difficulty: 'medium',
    isValueQuestion: true
  },
  {
    id: 'val12',
    question: 'Is domestic violence acceptable in Australia?',
    options: [
      { id: 'val12a', text: 'No, it is a serious crime', correct: true },
      { id: 'val12b', text: 'Yes, within the family home' },
      { id: 'val12c', text: 'It depends on the cultural background' }
    ],
    explanation: 'Violence against women, children, or any family member is a serious crime in Australia. There is no excuse for domestic violence under any circumstances.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val13',
    question: 'Which of these statements about religion in Australia is correct?',
    options: [
      { id: 'val13a', text: 'Australia has an official religion' },
      { id: 'val13b', text: 'The government can tell you what religion to follow' },
      { id: 'val13c', text: 'Australia does not have an official religion', correct: true }
    ],
    explanation: 'Australia does not have an official state religion. Everyone is free to practice any religion or no religion at all.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val14',
    question: 'What is a responsibility of all Australians?',
    options: [
      { id: 'val14a', text: 'To obey the law' },
      { id: 'val14b', text: 'To respect others\' freedoms and rights' },
      { id: 'val14c', text: 'Both of the above', correct: true }
    ],
    explanation: 'All people in Australia, whether citizens or not, must obey Australian laws and respect the rights and freedoms of others.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'val15',
    question: 'Which of these freedoms do Australians have?',
    options: [
      { id: 'val15a', text: 'Freedom of speech and freedom of association', correct: true },
      { id: 'val15b', text: 'Freedom to break laws they don\'t agree with' },
      { id: 'val15c', text: 'Freedom to not pay taxes' }
    ],
    explanation: 'Australians have freedom of speech (to express their views) and freedom of association (to join groups and organizations). These freedoms exist within the law.',
    category: 'australian-values',
    difficulty: 'medium',
    isValueQuestion: true
  }
];
