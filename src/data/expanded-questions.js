// Expanded question bank with difficulty levels and categories

export const EXPANDED_QUESTIONS = [
  // EASY QUESTIONS - Part 1: Australia and its people
  {
    id: 'q1',
    question: 'What are the national colors of Australia?',
    options: [
      { id: 'q1a', text: 'Red, white, and blue' },
      { id: 'q1b', text: 'Green and gold', correct: true },
      { id: 'q1c', text: 'Black, red, and yellow' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'The national colors of Australia are green and gold, officially recognized in 1984.'
  },
  {
    id: 'q2',
    question: 'What is the capital city of Australia?',
    options: [
      { id: 'q2a', text: 'Sydney' },
      { id: 'q2b', text: 'Melbourne' },
      { id: 'q2c', text: 'Canberra', correct: true }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'Canberra is the capital city of Australia, located in the Australian Capital Territory.'
  },
  {
    id: 'q3',
    question: 'What do we remember on Anzac Day?',
    options: [
      { id: 'q3a', text: 'The arrival of the first free settlers from Great Britain' },
      { id: 'q3b', text: 'The landing of the Australian and New Zealand Army Corps in Gallipoli', correct: true },
      { id: 'q3c', text: 'The arrival of the First Fleet at Sydney Cove' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'Anzac Day (25 April) commemorates the Australian and New Zealand Army Corps landing at Gallipoli in Turkey during World War I.'
  },
  {
    id: 'q4',
    question: "What is Australia's national flower?",
    options: [
      { id: 'q4a', text: 'Waratah' },
      { id: 'q4b', text: 'Golden Wattle', correct: true },
      { id: 'q4c', text: 'Kangaroo Paw' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'The Golden Wattle (Acacia pycnantha) is Australia\'s national floral emblem.'
  },
  {
    id: 'q5',
    question: 'In what year did European settlement begin in Australia?',
    options: [
      { id: 'q5a', text: '1788', correct: true },
      { id: 'q5b', text: '1901' },
      { id: 'q5c', text: '1851' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'European settlement began in 1788 with the arrival of the First Fleet at Sydney Cove.'
  },

  // MEDIUM QUESTIONS - Part 2: Democratic beliefs, rights and liberties
  {
    id: 'q6',
    question: 'What is the Commonwealth Coat of Arms?',
    options: [
      { id: 'q6a', text: 'The national flower of Australia' },
      { id: 'q6b', text: 'The national anthem of Australia' },
      { id: 'q6c', text: 'The official symbol of Australia that identifies Commonwealth property', correct: true }
    ],
    difficulty: 'medium',
    category: 'democratic-beliefs',
    explanation: 'The Commonwealth Coat of Arms is the official symbol of Australia and identifies Commonwealth property.'
  },
  {
    id: 'q7',
    question: 'Who was the first Prime Minister of Australia?',
    options: [
      { id: 'q7a', text: 'Edmund Barton', correct: true },
      { id: 'q7b', text: 'John Howard' },
      { id: 'q7c', text: 'Robert Menzies' }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'Sir Edmund Barton was Australia\'s first Prime Minister, serving from 1901 to 1903.'
  },
  {
    id: 'q8',
    question: 'In what year did Federation occur?',
    options: [
      { id: 'q8a', text: '1788' },
      { id: 'q8b', text: '1901', correct: true },
      { id: 'q8c', text: '1914' }
    ],
    difficulty: 'medium',
    category: 'australia-people',
    explanation: 'The Federation of Australia occurred on 1 January 1901, when the six separate British colonies became one nation.'
  },
  {
    id: 'q9',
    question: 'What is the system of government in Australia?',
    options: [
      { id: 'q9a', text: 'Parliamentary democracy', correct: true },
      { id: 'q9b', text: 'Presidential republic' },
      { id: 'q9c', text: 'Absolute monarchy' }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'Australia has a parliamentary democracy with a constitutional monarch.'
  },
  {
    id: 'q10',
    question: 'How many states and territories does Australia have?',
    options: [
      { id: 'q10a', text: '5 states and 2 territories' },
      { id: 'q10b', text: '6 states and 2 territories', correct: true },
      { id: 'q10c', text: '7 states and 1 territory' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'Australia has 6 states (NSW, Victoria, Queensland, SA, WA, Tasmania) and 2 territories (ACT, NT).'
  },

  // MEDIUM QUESTIONS - Government and Law
  {
    id: 'q11',
    question: 'Who is the Head of State of Australia?',
    options: [
      { id: 'q11a', text: 'The Prime Minister' },
      { id: 'q11b', text: 'The Governor-General' },
      { id: 'q11c', text: 'The King of the United Kingdom', correct: true }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'The King of the United Kingdom is Australia\'s Head of State, represented by the Governor-General.'
  },
  {
    id: 'q12',
    question: 'What is the name of the lower house of the Australian Parliament?',
    options: [
      { id: 'q12a', text: 'House of Representatives', correct: true },
      { id: 'q12b', text: 'The Senate' },
      { id: 'q12c', text: 'House of Commons' }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'The lower house is called the House of Representatives, where government is formed.'
  },
  {
    id: 'q13',
    question: 'How many senators does each state elect to the Senate?',
    options: [
      { id: 'q13a', text: '10' },
      { id: 'q13b', text: '12', correct: true },
      { id: 'q13c', text: '14' }
    ],
    difficulty: 'hard',
    category: 'government-law',
    explanation: 'Each of the six states elects 12 senators to the Australian Senate.'
  },

  // HARD QUESTIONS - Australian Values
  {
    id: 'q14',
    question: 'Freedom of speech and freedom of association are guaranteed in Australia. Is this statement true or false?',
    options: [
      { id: 'q14a', text: 'True', correct: true },
      { id: 'q14b', text: 'False' },
      { id: 'q14c', text: 'Only for citizens' }
    ],
    difficulty: 'hard',
    category: 'australian-values',
    explanation: 'Australia guarantees freedom of speech and freedom of association for everyone.'
  },
  {
    id: 'q15',
    question: 'Which of these is an example of equality in Australia?',
    options: [
      { id: 'q15a', text: 'Everyone follows the same laws', correct: true },
      { id: 'q15b', text: 'Men and women are separate but equal' },
      { id: 'q15c', text: 'Everyone has the right to receive free healthcare' }
    ],
    difficulty: 'medium',
    category: 'australian-values',
    explanation: 'Equality means everyone is equal before the law and follows the same laws.'
  },

  // Additional Easy Questions
  {
    id: 'q16',
    question: "What is celebrated on Australia Day?",
    options: [
      { id: 'q16a', text: 'The landing of ANZAC troops at Gallipoli' },
      { id: 'q16b', text: 'The arrival of the First Fleet in 1788', correct: true },
      { id: 'q16c', text: 'The federation of Australia in 1901' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'Australia Day on 26 January marks the anniversary of the arrival of the First Fleet from Great Britain in 1788.'
  },
  {
    id: 'q17',
    question: "What is Australia's national anthem called?",
    options: [
      { id: 'q17a', text: 'God Save the King' },
      { id: 'q17b', text: 'Waltzing Matilda' },
      { id: 'q17c', text: 'Advance Australia Fair', correct: true }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'Advance Australia Fair is Australia\'s national anthem.'
  },
  {
    id: 'q18',
    question: 'What are the colors of the Australian Aboriginal Flag?',
    options: [
      { id: 'q18a', text: 'Green, white and yellow' },
      { id: 'q18b', text: 'Black, red and yellow', correct: true },
      { id: 'q18c', text: 'Blue, white and green' }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'The Australian Aboriginal Flag is black (representing the Aboriginal people), red (representing the red earth), and yellow (representing the sun).'
  },
  {
    id: 'q19',
    question: 'What does the Commonwealth Star on the Australian flag represent?',
    options: [
      { id: 'q19a', text: 'The six states and territories' },
      { id: 'q19b', text: 'The Southern Cross constellation' },
      { id: 'q19c', text: 'The six states and one point for the territories', correct: true }
    ],
    difficulty: 'medium',
    category: 'australia-people',
    explanation: 'The Commonwealth Star has seven points, one for each of the six states and one representing all territories.'
  },
  {
    id: 'q20',
    question: 'Who do Members of Parliament represent?',
    options: [
      { id: 'q20a', text: 'The King' },
      { id: 'q20b', text: 'All Australians', correct: true },
      { id: 'q20c', text: 'Only the people who elected them' }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'Members of Parliament represent all Australians, not just those who voted for them.'
  },

  // More Hard Questions
  {
    id: 'q21',
    question: 'What is the minimum voting age in Australia?',
    options: [
      { id: 'q21a', text: '16 years' },
      { id: 'q21b', text: '18 years', correct: true },
      { id: 'q21c', text: '21 years' }
    ],
    difficulty: 'easy',
    category: 'government-law',
    explanation: 'The minimum voting age in Australia is 18 years. Voting is compulsory for eligible citizens.'
  },
  {
    id: 'q22',
    question: 'What is the role of the Governor-General?',
    options: [
      { id: 'q22a', text: 'To represent the King in Australia', correct: true },
      { id: 'q22b', text: 'To lead the government' },
      { id: 'q22c', text: 'To lead the opposition' }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'The Governor-General is the representative of the King in Australia.'
  },
  {
    id: 'q23',
    question: 'Which of the following is an example of freedom of expression in Australia?',
    options: [
      { id: 'q23a', text: 'People can peacefully protest against government decisions', correct: true },
      { id: 'q23b', text: 'People can break the law if they don\'t agree with it' },
      { id: 'q23c', text: 'People must follow a particular religion' }
    ],
    difficulty: 'medium',
    category: 'australian-values',
    explanation: 'Freedom of expression includes the right to peacefully protest and express disagreement with government decisions.'
  },
  {
    id: 'q24',
    question: 'What happened in Australia on 1 January 1901?',
    options: [
      { id: 'q24a', text: 'The First Fleet arrived' },
      { id: 'q24b', text: 'The Australian colonies joined together to form one nation', correct: true },
      { id: 'q24c', text: 'The Aboriginal peoples came to Australia' }
    ],
    difficulty: 'medium',
    category: 'australia-people',
    explanation: 'On 1 January 1901, the Australian colonies federated to form the Commonwealth of Australia.'
  },
  {
    id: 'q25',
    question: 'Australians are encouraged to believe in and live by which of the following?',
    options: [
      { id: 'q25a', text: 'Mutual respect, tolerance and compassion for those in need', correct: true },
      { id: 'q25b', text: 'Following religious laws above Australian law' },
      { id: 'q25c', text: 'Supporting only people from their own background' }
    ],
    difficulty: 'hard',
    category: 'australian-values',
    explanation: 'Australian values include mutual respect, tolerance, compassion for those in need, and support for the rule of law.'
  },
  {
    id: 'q26',
    question: 'What is the responsibility of the Australian Constitution?',
    options: [
      { id: 'q26a', text: 'To set out the rules for the government of Australia', correct: true },
      { id: 'q26b', text: 'To explain how to become an Australian citizen' },
      { id: 'q26c', text: 'To describe the history of Australia' }
    ],
    difficulty: 'hard',
    category: 'government-law',
    explanation: 'The Australian Constitution sets out the basic rules and principles for the government of Australia.'
  },
  {
    id: 'q27',
    question: 'What are the three levels of government in Australia?',
    options: [
      { id: 'q27a', text: 'Federal, state and territory, and local', correct: true },
      { id: 'q27b', text: 'Federal, local and regional' },
      { id: 'q27c', text: 'State, territory and council' }
    ],
    difficulty: 'medium',
    category: 'government-law',
    explanation: 'Australia has three levels of government: federal (Commonwealth), state and territory, and local.'
  },
  {
    id: 'q28',
    question: 'Which official symbol of Australia identifies Commonwealth property?',
    options: [
      { id: 'q28a', text: 'The national anthem' },
      { id: 'q28b', text: 'Australia\'s national flower' },
      { id: 'q28c', text: 'Commonwealth Coat of Arms', correct: true }
    ],
    difficulty: 'medium',
    category: 'australia-people',
    explanation: 'The Commonwealth Coat of Arms is used to identify Commonwealth property and appears on government documents.'
  },
  {
    id: 'q29',
    question: 'What is a referendum?',
    options: [
      { id: 'q29a', text: 'A vote to change the government' },
      { id: 'q29b', text: 'A vote to change the Australian Constitution', correct: true },
      { id: 'q29c', text: 'A vote to change the Prime Minister' }
    ],
    difficulty: 'hard',
    category: 'government-law',
    explanation: 'A referendum is a vote to change the Australian Constitution, requiring a majority of voters nationwide and in a majority of states.'
  },
  {
    id: 'q30',
    question: 'What is the largest state in Australia by area?',
    options: [
      { id: 'q30a', text: 'New South Wales' },
      { id: 'q30b', text: 'Queensland' },
      { id: 'q30c', text: 'Western Australia', correct: true }
    ],
    difficulty: 'easy',
    category: 'australia-people',
    explanation: 'Western Australia is the largest Australian state by area, covering about one-third of the continent.'
  }
];

// Category definitions
export const CATEGORIES = {
  'australia-people': {
    name: 'Australia and its People',
    description: 'History, culture, and national symbols'
  },
  'democratic-beliefs': {
    name: 'Democratic Beliefs, Rights and Liberties',
    description: 'Australian democratic principles and freedoms'
  },
  'government-law': {
    name: 'Government and the Law',
    description: 'Australian government structure and legal system'
  },
  'australian-values': {
    name: 'Australian Values',
    description: 'Core values and responsibilities of Australian citizenship'
  }
};
