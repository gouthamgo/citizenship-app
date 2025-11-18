// Additional 100+ questions to expand question bank to 200+ total
// Based on official Australian Citizenship Test requirements 2025

export const ADDITIONAL_QUESTIONS = [
  // HISTORY & CULTURE (20 questions)
  {
    id: 'add1',
    question: 'When did the European settlement of Australia start?',
    options: [
      { id: 'a', text: '1788', correct: true },
      { id: 'b', text: '1770', correct: false },
      { id: 'c', text: '1801', correct: false },
      { id: 'd', text: '1850', correct: false }
    ],
    explanation: 'European settlement of Australia began in 1788 with the arrival of the First Fleet at Sydney Cove.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'add2',
    question: 'What do we remember on Anzac Day?',
    options: [
      { id: 'a', text: 'The landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey', correct: true },
      { id: 'b', text: 'The arrival of the First Fleet', correct: false },
      { id: 'c', text: 'The gold rush', correct: false },
      { id: 'd', text: 'Federation', correct: false }
    ],
    explanation: 'Anzac Day (25 April) commemorates the landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey in 1915.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    id: 'add3',
    question: 'What happened in Australia on 1 January 1901?',
    options: [
      { id: 'a', text: 'The Australian colonies joined together to form the Commonwealth of Australia', correct: true },
      { id: 'b', text: 'The First Fleet arrived', correct: false },
      { id: 'c', text: 'The gold rush began', correct: false },
      { id: 'd', text: 'Captain Cook discovered Australia', correct: false }
    ],
    explanation: 'On 1 January 1901, the Australian colonies joined together in a federation to form the Commonwealth of Australia.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'add4',
    question: 'Who was the first Prime Minister of Australia?',
    options: [
      { id: 'a', text: 'Edmund Barton', correct: true },
      { id: 'b', text: 'Sir Robert Menzies', correct: false },
      { id: 'c', text: 'John Curtin', correct: false },
      { id: 'd', text: 'Alfred Deakin', correct: false }
    ],
    explanation: 'Edmund Barton was sworn in as Australia\'s first Prime Minister on 1 January 1901.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'add5',
    question: 'Which Australian city is the oldest?',
    options: [
      { id: 'a', text: 'Sydney', correct: true },
      { id: 'b', text: 'Melbourne', correct: false },
      { id: 'c', text: 'Brisbane', correct: false },
      { id: 'd', text: 'Perth', correct: false }
    ],
    explanation: 'Sydney, founded in 1788, is Australia\'s oldest city.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    id: 'add6',
    question: 'What is the name of the Aboriginal flag?',
    options: [
      { id: 'a', text: 'The Aboriginal Flag', correct: true },
      { id: 'b', text: 'The Indigenous Flag', correct: false },
      { id: 'c', text: 'The Dreamtime Flag', correct: false },
      { id: 'd', text: 'The First Nations Flag', correct: false }
    ],
    explanation: 'It is officially called the Aboriginal Flag, designed by Harold Thomas in 1971.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'add7',
    question: 'What are the colors of the Aboriginal Flag?',
    options: [
      { id: 'a', text: 'Black, red and yellow', correct: true },
      { id: 'b', text: 'Black, white and red', correct: false },
      { id: 'c', text: 'Red, white and blue', correct: false },
      { id: 'd', text: 'Green, gold and black', correct: false }
    ],
    explanation: 'The Aboriginal Flag has three colors: black (representing the Aboriginal people), red (representing the earth), and yellow (representing the sun).',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'add8',
    question: 'What does the Torres Strait Islander Flag represent?',
    options: [
      { id: 'a', text: 'Torres Strait Islander people', correct: true },
      { id: 'b', text: 'All Indigenous Australians', correct: false },
      { id: 'c', text: 'Northern Territory', correct: false },
      { id: 'd', text: 'Queensland', correct: false }
    ],
    explanation: 'The Torres Strait Islander Flag represents the Torres Strait Islander people of Australia.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'add9',
    question: 'Who are the original inhabitants of Australia?',
    options: [
      { id: 'a', text: 'Aboriginal and Torres Strait Islander people', correct: true },
      { id: 'b', text: 'The British', correct: false },
      { id: 'c', text: 'The Dutch', correct: false },
      { id: 'd', text: 'The Portuguese', correct: false }
    ],
    explanation: 'Aboriginal and Torres Strait Islander people are the original inhabitants of Australia, having lived here for over 65,000 years.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    id: 'add10',
    question: 'What is the significance of the Southern Cross on the Australian flag?',
    options: [
      { id: 'a', text: 'It is a constellation of stars only visible in the southern hemisphere', correct: true },
      { id: 'b', text: 'It represents the five original colonies', correct: false },
      { id: 'c', text: 'It represents Christianity', correct: false },
      { id: 'd', text: 'It represents the Commonwealth', correct: false }
    ],
    explanation: 'The Southern Cross is a constellation of stars that can only be seen in the southern hemisphere, representing Australia\'s location.',
    category: 'symbols',
    difficulty: 'medium'
  },
  {
    id: 'add11',
    question: 'What is significant about the gold rushes in Australian history?',
    options: [
      { id: 'a', text: 'They brought a large number of immigrants to Australia', correct: true },
      { id: 'b', text: 'They led to federation', correct: false },
      { id: 'c', text: 'They ended convict transportation', correct: false },
      { id: 'd', text: 'They started the wool industry', correct: false }
    ],
    explanation: 'The gold rushes of the 1850s brought a large number of immigrants to Australia, significantly increasing the population.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'add12',
    question: 'When did the last convicts arrive in Australia?',
    options: [
      { id: 'a', text: '1868', correct: true },
      { id: 'b', text: '1788', correct: false },
      { id: 'c', text: '1850', correct: false },
      { id: 'd', text: '1901', correct: false }
    ],
    explanation: 'The last convicts arrived in Western Australia in 1868, marking the end of convict transportation.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'add13',
    question: 'What is the name of the famous Australian bushranger?',
    options: [
      { id: 'a', text: 'Ned Kelly', correct: true },
      { id: 'b', text: 'Burke and Wills', correct: false },
      { id: 'c', text: 'Captain Cook', correct: false },
      { id: 'd', text: 'Sir Donald Bradman', correct: false }
    ],
    explanation: 'Ned Kelly is Australia\'s most famous bushranger, known for wearing homemade armor.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    id: 'add14',
    question: 'What is the name of Australia\'s national airline?',
    options: [
      { id: 'a', text: 'Qantas', correct: true },
      { id: 'b', text: 'Virgin Australia', correct: false },
      { id: 'c', text: 'Jetstar', correct: false },
      { id: 'd', text: 'Ansett', correct: false }
    ],
    explanation: 'Qantas is Australia\'s national airline, founded in 1920.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'add15',
    question: 'What is a famous Australian landmark in the Northern Territory?',
    options: [
      { id: 'a', text: 'Uluru (Ayers Rock)', correct: true },
      { id: 'b', text: 'Sydney Opera House', correct: false },
      { id: 'c', text: 'Twelve Apostles', correct: false },
      { id: 'd', text: 'Great Barrier Reef', correct: false }
    ],
    explanation: 'Uluru (also known as Ayers Rock) is a famous landmark in the Northern Territory and sacred to Aboriginal people.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add16',
    question: 'When is NAIDOC Week usually celebrated?',
    options: [
      { id: 'a', text: 'In July', correct: true },
      { id: 'b', text: 'In January', correct: false },
      { id: 'c', text: 'In March', correct: false },
      { id: 'd', text: 'In December', correct: false }
    ],
    explanation: 'NAIDOC Week is usually celebrated in July to recognize the history, culture and achievements of Aboriginal and Torres Strait Islander peoples.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'add17',
    question: 'What does NAIDOC stand for?',
    options: [
      { id: 'a', text: 'National Aborigines and Islanders Day Observance Committee', correct: true },
      { id: 'b', text: 'National Australian Indigenous Development and Outreach Committee', correct: false },
      { id: 'c', text: 'Northern Aboriginal and Islander Day of Celebration', correct: false },
      { id: 'd', text: 'National Acknowledgment of Indigenous and Diverse Cultures', correct: false }
    ],
    explanation: 'NAIDOC stands for National Aborigines and Islanders Day Observance Committee.',
    category: 'culture',
    difficulty: 'hard'
  },
  {
    id: 'add18',
    question: 'What is the Australian War Memorial?',
    options: [
      { id: 'a', text: 'A place to honor all Australians who served in wars', correct: true },
      { id: 'b', text: 'A museum about World War II only', correct: false },
      { id: 'c', text: 'A monument to Captain Cook', correct: false },
      { id: 'd', text: 'A cemetery in France', correct: false }
    ],
    explanation: 'The Australian War Memorial in Canberra honors all Australians who have served in wars and conflicts.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'add19',
    question: 'What is Remembrance Day?',
    options: [
      { id: 'a', text: 'A day to remember those who died in wars and conflicts', correct: true },
      { id: 'b', text: 'The same as Australia Day', correct: false },
      { id: 'c', text: 'A celebration of federation', correct: false },
      { id: 'd', text: 'A celebration of the Queen\'s birthday', correct: false }
    ],
    explanation: 'Remembrance Day (11 November) is a day to remember those who died or suffered in wars and conflicts.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'add20',
    question: 'When is Remembrance Day?',
    options: [
      { id: 'a', text: '11 November', correct: true },
      { id: 'b', text: '25 April', correct: false },
      { id: 'c', text: '26 January', correct: false },
      { id: 'd', text: '25 December', correct: false }
    ],
    explanation: 'Remembrance Day is on 11 November, marking the end of World War I.',
    category: 'culture',
    difficulty: 'medium'
  },

  // GOVERNMENT & DEMOCRACY (30 questions)
  {
    id: 'add21',
    question: 'How many members are there in the House of Representatives?',
    options: [
      { id: 'a', text: '150', correct: true },
      { id: 'b', text: '76', correct: false },
      { id: 'c', text: '100', correct: false },
      { id: 'd', text: '200', correct: false }
    ],
    explanation: 'There are 150 members in the House of Representatives.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add22',
    question: 'How many senators are there in the Australian Senate?',
    options: [
      { id: 'a', text: '76', correct: true },
      { id: 'b', text: '150', correct: false },
      { id: 'c', text: '100', correct: false },
      { id: 'd', text: '60', correct: false }
    ],
    explanation: 'There are 76 senators in the Australian Senate: 12 from each state and 2 from each territory.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add23',
    question: 'How many senators does each Australian state have?',
    options: [
      { id: 'a', text: '12', correct: true },
      { id: 'b', text: '10', correct: false },
      { id: 'c', text: '2', correct: false },
      { id: 'd', text: '6', correct: false }
    ],
    explanation: 'Each Australian state has 12 senators to ensure equal representation in the Senate.',
    category: 'government-law',
    difficulty: 'hard'
  },
  {
    id: 'add24',
    question: 'How many senators do the Australian Capital Territory and Northern Territory have in total?',
    options: [
      { id: 'a', text: '4 (2 each)', correct: true },
      { id: 'b', text: '24 (12 each)', correct: false },
      { id: 'c', text: '2 (1 each)', correct: false },
      { id: 'd', text: '6 (3 each)', correct: false }
    ],
    explanation: 'The Australian Capital Territory and Northern Territory each have 2 senators, totaling 4.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add25',
    question: 'For how many years is a senator usually elected?',
    options: [
      { id: 'a', text: '6 years', correct: true },
      { id: 'b', text: '3 years', correct: false },
      { id: 'c', text: '4 years', correct: false },
      { id: 'd', text: '5 years', correct: false }
    ],
    explanation: 'Senators are usually elected for 6 years (except territory senators who have 3-year terms).',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add26',
    question: 'For how many years are members of the House of Representatives elected?',
    options: [
      { id: 'a', text: '3 years', correct: true },
      { id: 'b', text: '6 years', correct: false },
      { id: 'c', text: '4 years', correct: false },
      { id: 'd', text: '5 years', correct: false }
    ],
    explanation: 'Members of the House of Representatives are elected for 3 years.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add27',
    question: 'Who do Members of Parliament represent?',
    options: [
      { id: 'a', text: 'All Australians in their electorate', correct: true },
      { id: 'b', text: 'Only people who voted for them', correct: false },
      { id: 'c', text: 'Only members of their political party', correct: false },
      { id: 'd', text: 'The Queen', correct: false }
    ],
    explanation: 'Members of Parliament represent all Australians living in their electorate, regardless of how they voted.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add28',
    question: 'Who chooses the Prime Minister in Australia?',
    options: [
      { id: 'a', text: 'Members of the party with the most seats in the House of Representatives', correct: true },
      { id: 'b', text: 'The Governor-General', correct: false },
      { id: 'c', text: 'The Australian people by direct vote', correct: false },
      { id: 'd', text: 'The Queen', correct: false }
    ],
    explanation: 'The Prime Minister is chosen by members of the party (or coalition of parties) with the most seats in the House of Representatives.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add29',
    question: 'What is the leader of a state government called?',
    options: [
      { id: 'a', text: 'Premier', correct: true },
      { id: 'b', text: 'Prime Minister', correct: false },
      { id: 'c', text: 'Governor', correct: false },
      { id: 'd', text: 'Chief Minister', correct: false }
    ],
    explanation: 'The leader of a state government is called the Premier. (Note: Territory leaders are called Chief Ministers.)',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add30',
    question: 'What is the leader of a territory government called?',
    options: [
      { id: 'a', text: 'Chief Minister', correct: true },
      { id: 'b', text: 'Premier', correct: false },
      { id: 'c', text: 'Prime Minister', correct: false },
      { id: 'd', text: 'Governor', correct: false }
    ],
    explanation: 'The leader of a territory government is called the Chief Minister.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add31',
    question: 'What is the name of the legal document that sets out the rules for the government of Australia?',
    options: [
      { id: 'a', text: 'The Australian Constitution', correct: true },
      { id: 'b', text: 'The Commonwealth Act', correct: false },
      { id: 'c', text: 'The Federation Document', correct: false },
      { id: 'd', text: 'The Bill of Rights', correct: false }
    ],
    explanation: 'The Australian Constitution is the legal document that sets out the rules for Australia\'s government.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add32',
    question: 'What is a referendum?',
    options: [
      { id: 'a', text: 'A vote to change the Australian Constitution', correct: true },
      { id: 'b', text: 'An election for Prime Minister', correct: false },
      { id: 'c', text: 'A vote in Parliament', correct: false },
      { id: 'd', text: 'A public opinion poll', correct: false }
    ],
    explanation: 'A referendum is a vote where all Australians on the electoral roll vote yes or no to change the Australian Constitution.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add33',
    question: 'What is the minimum age for voting in Australian federal elections?',
    options: [
      { id: 'a', text: '18 years', correct: true },
      { id: 'b', text: '21 years', correct: false },
      { id: 'c', text: '16 years', correct: false },
      { id: 'd', text: '25 years', correct: false }
    ],
    explanation: 'Australian citizens aged 18 years and over must enroll and vote in federal elections.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add34',
    question: 'Is voting compulsory in Australian federal elections?',
    options: [
      { id: 'a', text: 'Yes, for all Australian citizens aged 18 years and over', correct: true },
      { id: 'b', text: 'No, it is voluntary', correct: false },
      { id: 'c', text: 'Only for people over 25', correct: false },
      { id: 'd', text: 'Only in state elections', correct: false }
    ],
    explanation: 'Voting is compulsory for all Australian citizens aged 18 years and over who are on the electoral roll.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add35',
    question: 'What is the secret ballot?',
    options: [
      { id: 'a', text: 'A system of voting where no one can see how you voted', correct: true },
      { id: 'b', text: 'A special vote for Parliament members only', correct: false },
      { id: 'c', text: 'A vote that is not counted', correct: false },
      { id: 'd', text: 'A postal vote', correct: false }
    ],
    explanation: 'The secret ballot means no one can see how you voted, ensuring voting is private and free.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add36',
    question: 'Who is the head of the Australian Government?',
    options: [
      { id: 'a', text: 'The Prime Minister', correct: true },
      { id: 'b', text: 'The Governor-General', correct: false },
      { id: 'c', text: 'The Queen', correct: false },
      { id: 'd', text: 'The Chief Justice', correct: false }
    ],
    explanation: 'The Prime Minister is the head of the Australian Government.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add37',
    question: 'Who appoints the Governor-General?',
    options: [
      { id: 'a', text: 'The Queen (now King), on the advice of the Prime Minister', correct: true },
      { id: 'b', text: 'The Australian people', correct: false },
      { id: 'c', text: 'The Parliament', correct: false },
      { id: 'd', text: 'The High Court', correct: false }
    ],
    explanation: 'The Governor-General is appointed by the King on the advice of the Prime Minister.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add38',
    question: 'What are the three levels of government in Australia?',
    options: [
      { id: 'a', text: 'Federal, state/territory, and local', correct: true },
      { id: 'b', text: 'Senate, House of Representatives, and courts', correct: false },
      { id: 'c', text: 'Federal, colonial, and municipal', correct: false },
      { id: 'd', text: 'Executive, legislative, and judicial', correct: false }
    ],
    explanation: 'Australia has three levels of government: federal (national), state/territory, and local (council or shire).',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add39',
    question: 'What is the role of the courts in Australia?',
    options: [
      { id: 'a', text: 'To settle disputes and interpret the law', correct: true },
      { id: 'b', text: 'To make laws', correct: false },
      { id: 'c', text: 'To enforce laws', correct: false },
      { id: 'd', text: 'To advise the government', correct: false }
    ],
    explanation: 'Courts settle disputes and interpret and apply the law independently of Parliament and the government.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add40',
    question: 'What is the highest court in Australia?',
    options: [
      { id: 'a', text: 'The High Court of Australia', correct: true },
      { id: 'b', text: 'The Supreme Court', correct: false },
      { id: 'c', text: 'The Federal Court', correct: false },
      { id: 'd', text: 'The Court of Appeal', correct: false }
    ],
    explanation: 'The High Court of Australia is the highest court in Australia.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add41',
    question: 'What is the role of the opposition in Parliament?',
    options: [
      { id: 'a', text: 'To question and scrutinize the government', correct: true },
      { id: 'b', text: 'To support the government', correct: false },
      { id: 'c', text: 'To enforce laws', correct: false },
      { id: 'd', text: 'To represent the Queen', correct: false }
    ],
    explanation: 'The opposition\'s role is to question and scrutinize the government to keep it accountable.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add42',
    question: 'What does Westminster system mean?',
    options: [
      { id: 'a', text: 'A system of government inherited from the United Kingdom', correct: true },
      { id: 'b', text: 'A type of voting system', correct: false },
      { id: 'c', text: 'A legal system', correct: false },
      { id: 'd', text: 'An economic system', correct: false }
    ],
    explanation: 'The Westminster system is Australia\'s system of government, inherited from the United Kingdom.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add43',
    question: 'What are the colors of the Australian national flag?',
    options: [
      { id: 'a', text: 'Blue, white and red', correct: true },
      { id: 'b', text: 'Green and gold', correct: false },
      { id: 'c', text: 'Red, white and blue', correct: false },
      { id: 'd', text: 'Blue and white', correct: false }
    ],
    explanation: 'The Australian flag has blue, white, and red colors.',
    category: 'symbols',
    difficulty: 'easy'
  },
  {
    id: 'add44',
    question: 'What does the Commonwealth Coat of Arms identify?',
    options: [
      { id: 'a', text: 'The authority and property of the Commonwealth of Australia', correct: true },
      { id: 'b', text: 'The Australian Defence Force', correct: false },
      { id: 'c', text: 'The Governor-General', correct: false },
      { id: 'd', text: 'The High Court', correct: false }
    ],
    explanation: 'The Commonwealth Coat of Arms identifies the authority and property of the Australian Government.',
    category: 'symbols',
    difficulty: 'medium'
  },
  {
    id: 'add45',
    question: 'Which animals appear on the Commonwealth Coat of Arms?',
    options: [
      { id: 'a', text: 'Kangaroo and emu', correct: true },
      { id: 'b', text: 'Kangaroo and koala', correct: false },
      { id: 'c', text: 'Emu and crocodile', correct: false },
      { id: 'd', text: 'Wombat and platypus', correct: false }
    ],
    explanation: 'The kangaroo and emu appear on the Commonwealth Coat of Arms.',
    category: 'symbols',
    difficulty: 'easy'
  },
  {
    id: 'add46',
    question: 'Can the Governor-General dismiss the Prime Minister?',
    options: [
      { id: 'a', text: 'Yes, in exceptional circumstances', correct: true },
      { id: 'b', text: 'No, never', correct: false },
      { id: 'c', text: 'Yes, at any time', correct: false },
      { id: 'd', text: 'Only with the Queen\'s permission', correct: false }
    ],
    explanation: 'The Governor-General has reserve powers and can dismiss the Prime Minister in exceptional circumstances.',
    category: 'government-law',
    difficulty: 'hard'
  },
  {
    id: 'add47',
    question: 'What is parliamentary privilege?',
    options: [
      { id: 'a', text: 'The right of MPs to speak freely in Parliament without being sued', correct: true },
      { id: 'b', text: 'Special parking privileges for MPs', correct: false },
      { id: 'c', text: 'The right to vote twice', correct: false },
      { id: 'd', text: 'Tax exemptions for MPs', correct: false }
    ],
    explanation: 'Parliamentary privilege allows MPs to speak freely in Parliament without fear of being sued for defamation.',
    category: 'government-law',
    difficulty: 'hard'
  },
  {
    id: 'add48',
    question: 'What is proportional representation?',
    options: [
      { id: 'a', text: 'A voting system used to elect senators', correct: true },
      { id: 'b', text: 'Equal representation for all states', correct: false },
      { id: 'c', text: 'The number of MPs per capita', correct: false },
      { id: 'd', text: 'Voting based on population', correct: false }
    ],
    explanation: 'Proportional representation is the voting system used to elect senators, ensuring parties get representation proportional to their votes.',
    category: 'government-law',
    difficulty: 'hard'
  },
  {
    id: 'add49',
    question: 'What does preferential voting mean?',
    options: [
      { id: 'a', text: 'You number the candidates in order of preference', correct: true },
      { id: 'b', text: 'You vote for your preferred party only', correct: false },
      { id: 'c', text: 'You get two votes', correct: false },
      { id: 'd', text: 'You vote for multiple candidates', correct: false }
    ],
    explanation: 'In preferential voting, you number all candidates in order of preference (1, 2, 3, etc.).',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add50',
    question: 'How is the Prime Minister chosen in Australia?',
    options: [
      { id: 'a', text: 'By the party with the majority of seats in the House of Representatives', correct: true },
      { id: 'b', text: 'By direct election from all Australian voters', correct: false },
      { id: 'c', text: 'By the Senate', correct: false },
      { id: 'd', text: 'By the Governor-General', correct: false }
    ],
    explanation: 'The leader of the party with the majority of seats in the House of Representatives becomes Prime Minister.',
    category: 'government-law',
    difficulty: 'medium'
  },

  // RIGHTS & RESPONSIBILITIES (20 questions)
  {
    id: 'add51',
    question: 'What is one responsibility of Australian citizenship?',
    options: [
      { id: 'a', text: 'Obey the law', correct: true },
      { id: 'b', text: 'Own property', correct: false },
      { id: 'c', text: 'Have a job', correct: false },
      { id: 'd', text: 'Learn to surf', correct: false }
    ],
    explanation: 'Obeying the law is one of the key responsibilities of Australian citizenship.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add52',
    question: 'What are Australians free to do?',
    options: [
      { id: 'a', text: 'Follow any religion, or have no religion', correct: true },
      { id: 'b', text: 'Break the law if they disagree with it', correct: false },
      { id: 'c', text: 'Not pay taxes', correct: false },
      { id: 'd', text: 'Ignore government decisions', correct: false }
    ],
    explanation: 'Australians are free to follow any religion, or to have no religion at all.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add53',
    question: 'What is freedom of speech?',
    options: [
      { id: 'a', text: 'The right to express your opinions and ideas', correct: true },
      { id: 'b', text: 'The right to yell in public', correct: false },
      { id: 'c', text: 'The right to say anything without consequences', correct: false },
      { id: 'd', text: 'The right to interrupt others', correct: false }
    ],
    explanation: 'Freedom of speech is the right to peacefully express your opinions and ideas.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add54',
    question: 'What is equality before the law?',
    options: [
      { id: 'a', text: 'Everyone is treated equally by the law regardless of their background', correct: true },
      { id: 'b', text: 'Everyone gets the same sentence for crimes', correct: false },
      { id: 'c', text: 'Rich and poor are separated in court', correct: false },
      { id: 'd', text: 'Only citizens have legal rights', correct: false }
    ],
    explanation: 'Equality before the law means everyone is treated equally regardless of their background, wealth, or status.',
    category: 'rights-freedoms',
    difficulty: 'medium'
  },
  {
    id: 'add55',
    question: 'What is one privilege of Australian citizenship?',
    options: [
      { id: 'a', text: 'Apply for an Australian passport', correct: true },
      { id: 'b', text: 'Get free healthcare', correct: false },
      { id: 'c', text: 'Avoid paying taxes', correct: false },
      { id: 'd', text: 'Automatic job placement', correct: false }
    ],
    explanation: 'One privilege of Australian citizenship is the ability to apply for an Australian passport.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add56',
    question: 'Can Australian citizens be forced to leave Australia?',
    options: [
      { id: 'a', text: 'No', correct: true },
      { id: 'b', text: 'Yes, if they commit a crime', correct: false },
      { id: 'c', text: 'Yes, if they don\'t pay taxes', correct: false },
      { id: 'd', text: 'Yes, at the government\'s discretion', correct: false }
    ],
    explanation: 'Australian citizens have the right to live in Australia and cannot be forced to leave.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add57',
    question: 'What is the right to a fair trial?',
    options: [
      { id: 'a', text: 'The right to be tried in court by an impartial judge and jury', correct: true },
      { id: 'b', text: 'The right to avoid prison', correct: false },
      { id: 'c', text: 'The right to choose your punishment', correct: false },
      { id: 'd', text: 'The right to represent yourself', correct: false }
    ],
    explanation: 'The right to a fair trial means being tried in court by an impartial judge and jury.',
    category: 'rights-freedoms',
    difficulty: 'medium'
  },
  {
    id: 'add58',
    question: 'Are men and women equal under Australian law?',
    options: [
      { id: 'a', text: 'Yes', correct: true },
      { id: 'b', text: 'No', correct: false },
      { id: 'c', text: 'Only in some states', correct: false },
      { id: 'd', text: 'Only for citizens', correct: false }
    ],
    explanation: 'Men and women are equal under Australian law and have the same rights.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add59',
    question: 'What does habeas corpus mean?',
    options: [
      { id: 'a', text: 'A person cannot be detained without lawful reason', correct: true },
      { id: 'b', text: 'Everyone must appear in court', correct: false },
      { id: 'c', text: 'Criminals can appeal sentences', correct: false },
      { id: 'd', text: 'Dead bodies must be examined', correct: false }
    ],
    explanation: 'Habeas corpus means a person cannot be detained or imprisoned without a lawful reason.',
    category: 'rights-freedoms',
    difficulty: 'hard'
  },
  {
    id: 'add60',
    question: 'Is it compulsory to vote in local council elections?',
    options: [
      { id: 'a', text: 'Yes, in most states and territories', correct: true },
      { id: 'b', text: 'No, it is always voluntary', correct: false },
      { id: 'c', text: 'Only for property owners', correct: false },
      { id: 'd', text: 'Only in federal elections', correct: false }
    ],
    explanation: 'In most Australian states and territories, voting in local council elections is compulsory.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add61',
    question: 'What does mateship mean in Australian culture?',
    options: [
      { id: 'a', text: 'Loyalty to friends and helping those in need', correct: true },
      { id: 'b', text: 'Only being friends with Australians', correct: false },
      { id: 'c', text: 'A formal partnership', correct: false },
      { id: 'd', text: 'Military service', correct: false }
    ],
    explanation: 'Mateship means loyalty to friends and helping those in need, an important Australian value.',
    category: 'australian-values',
    difficulty: 'easy'
  },
  {
    id: 'add62',
    question: 'What is a fair go?',
    options: [
      { id: 'a', text: 'Giving everyone an equal chance', correct: true },
      { id: 'b', text: 'A sporting event', correct: false },
      { id: 'c', text: 'A type of vote', correct: false },
      { id: 'd', text: 'A legal term', correct: false }
    ],
    explanation: '"A fair go" is an Australian value meaning giving everyone an equal chance and opportunity.',
    category: 'australian-values',
    difficulty: 'easy'
  },
  {
    id: 'add63',
    question: 'Can you be arrested for your political or religious views?',
    options: [
      { id: 'a', text: 'No', correct: true },
      { id: 'b', text: 'Yes, if they are extreme', correct: false },
      { id: 'c', text: 'Yes, if they oppose the government', correct: false },
      { id: 'd', text: 'Only for religious views', correct: false }
    ],
    explanation: 'In Australia, you cannot be arrested simply for holding political or religious views.',
    category: 'rights-freedoms',
    difficulty: 'easy'
  },
  {
    id: 'add64',
    question: 'What is freedom of association?',
    options: [
      { id: 'a', text: 'The right to join or leave groups', correct: true },
      { id: 'b', text: 'The right to form a government', correct: false },
      { id: 'c', text: 'The right to work anywhere', correct: false },
      { id: 'd', text: 'The right to free meetings', correct: false }
    ],
    explanation: 'Freedom of association means you can join or leave groups, unions, or political parties freely.',
    category: 'rights-freedoms',
    difficulty: 'medium'
  },
  {
    id: 'add65',
    question: 'What is one way you can participate in Australian democracy?',
    options: [
      { id: 'a', text: 'Vote in elections', correct: true },
      { id: 'b', text: 'Refuse to pay taxes', correct: false },
      { id: 'c', text: 'Ignore laws you disagree with', correct: false },
      { id: 'd', text: 'Only support one political party', correct: false }
    ],
    explanation: 'Voting in elections is one way to participate in Australian democracy.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add66',
    question: 'What responsibility do you have if you are called for jury service?',
    options: [
      { id: 'a', text: 'You must attend unless you have a valid reason not to', correct: true },
      { id: 'b', text: 'You can choose whether to attend', correct: false },
      { id: 'c', text: 'Only lawyers serve on juries', correct: false },
      { id: 'd', text: 'You can pay someone to go instead', correct: false }
    ],
    explanation: 'If called for jury service, you must attend unless you have a valid reason to be excused.',
    category: 'rights-freedoms',
    difficulty: 'medium'
  },
  {
    id: 'add67',
    question: 'What is the role of the Australian Defence Force?',
    options: [
      { id: 'a', text: 'To defend Australia and its interests', correct: true },
      { id: 'b', text: 'To enforce laws', correct: false },
      { id: 'c', text: 'To control immigration', correct: false },
      { id: 'd', text: 'To run the government', correct: false }
    ],
    explanation: 'The Australian Defence Force defends Australia and its interests.',
    category: 'government-law',
    difficulty: 'easy'
  },
  {
    id: 'add68',
    question: 'Can you be forced to join the Australian Defence Force?',
    options: [
      { id: 'a', text: 'No, except in times of war if conscription is introduced', correct: true },
      { id: 'b', text: 'Yes, all citizens must serve', correct: false },
      { id: 'c', text: 'Yes, if you are unemployed', correct: false },
      { id: 'd', text: 'No, never under any circumstances', correct: false }
    ],
    explanation: 'Service in the Australian Defence Force is voluntary, but conscription could be introduced in times of war.',
    category: 'rights-freedoms',
    difficulty: 'medium'
  },
  {
    id: 'add69',
    question: 'What does rule of law mean?',
    options: [
      { id: 'a', text: 'Everyone must follow the law, including government officials', correct: true },
      { id: 'b', text: 'Only criminals must follow laws', correct: false },
      { id: 'c', text: 'Laws can be changed anytime', correct: false },
      { id: 'd', text: 'Rich people are above the law', correct: false }
    ],
    explanation: 'Rule of law means everyone, including government officials, must follow the law.',
    category: 'government-law',
    difficulty: 'medium'
  },
  {
    id: 'add70',
    question: 'What is domestic violence?',
    options: [
      { id: 'a', text: 'Violence that occurs in the home', correct: true },
      { id: 'b', text: 'Violence in public places', correct: false },
      { id: 'c', text: 'Violence between strangers', correct: false },
      { id: 'd', text: 'Political violence', correct: false }
    ],
    explanation: 'Domestic violence is violence that occurs in the home or between family members. It is illegal in Australia.',
    category: 'australian-values',
    difficulty: 'easy'
  },

  // GEOGRAPHY & STATES (15 questions)
  {
    id: 'add71',
    question: 'What is the largest state in Australia?',
    options: [
      { id: 'a', text: 'Western Australia', correct: true },
      { id: 'b', text: 'Queensland', correct: false },
      { id: 'c', text: 'New South Wales', correct: false },
      { id: 'd', text: 'Victoria', correct: false }
    ],
    explanation: 'Western Australia is the largest Australian state by area.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add72',
    question: 'What is the smallest state in Australia?',
    options: [
      { id: 'a', text: 'Tasmania', correct: true },
      { id: 'b', text: 'Victoria', correct: false },
      { id: 'c', text: 'South Australia', correct: false },
      { id: 'd', text: 'Australian Capital Territory', correct: false }
    ],
    explanation: 'Tasmania is the smallest Australian state.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add73',
    question: 'What is the capital of Queensland?',
    options: [
      { id: 'a', text: 'Brisbane', correct: true },
      { id: 'b', text: 'Sydney', correct: false },
      { id: 'c', text: 'Gold Coast', correct: false },
      { id: 'd', text: 'Cairns', correct: false }
    ],
    explanation: 'Brisbane is the capital city of Queensland.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add74',
    question: 'What is the capital of Victoria?',
    options: [
      { id: 'a', text: 'Melbourne', correct: true },
      { id: 'b', text: 'Sydney', correct: false },
      { id: 'c', text: 'Geelong', correct: false },
      { id: 'd', text: 'Ballarat', correct: false }
    ],
    explanation: 'Melbourne is the capital city of Victoria.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add75',
    question: 'What is the capital of South Australia?',
    options: [
      { id: 'a', text: 'Adelaide', correct: true },
      { id: 'b', text: 'Perth', correct: false },
      { id: 'c', text: 'Darwin', correct: false },
      { id: 'd', text: 'Hobart', correct: false }
    ],
    explanation: 'Adelaide is the capital city of South Australia.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add76',
    question: 'What is the capital of Western Australia?',
    options: [
      { id: 'a', text: 'Perth', correct: true },
      { id: 'b', text: 'Adelaide', correct: false },
      { id: 'c', text: 'Fremantle', correct: false },
      { id: 'd', text: 'Albany', correct: false }
    ],
    explanation: 'Perth is the capital city of Western Australia.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add77',
    question: 'What is the capital of Tasmania?',
    options: [
      { id: 'a', text: 'Hobart', correct: true },
      { id: 'b', text: 'Launceston', correct: false },
      { id: 'c', text: 'Devonport', correct: false },
      { id: 'd', text: 'Burnie', correct: false }
    ],
    explanation: 'Hobart is the capital city of Tasmania.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add78',
    question: 'What is the capital of the Northern Territory?',
    options: [
      { id: 'a', text: 'Darwin', correct: true },
      { id: 'b', text: 'Alice Springs', correct: false },
      { id: 'c', text: 'Katherine', correct: false },
      { id: 'd', text: 'Palmerston', correct: false }
    ],
    explanation: 'Darwin is the capital city of the Northern Territory.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add79',
    question: 'Which state is known as the "Sunshine State"?',
    options: [
      { id: 'a', text: 'Queensland', correct: true },
      { id: 'b', text: 'Western Australia', correct: false },
      { id: 'c', text: 'New South Wales', correct: false },
      { id: 'd', text: 'Northern Territory', correct: false }
    ],
    explanation: 'Queensland is known as the "Sunshine State".',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'add80',
    question: 'Where is the Great Barrier Reef located?',
    options: [
      { id: 'a', text: 'Off the coast of Queensland', correct: true },
      { id: 'b', text: 'Off the coast of Western Australia', correct: false },
      { id: 'c', text: 'Off the coast of Tasmania', correct: false },
      { id: 'd', text: 'Off the coast of Victoria', correct: false }
    ],
    explanation: 'The Great Barrier Reef is located off the coast of Queensland.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add81',
    question: 'What is Australia\'s longest river?',
    options: [
      { id: 'a', text: 'Murray River', correct: true },
      { id: 'b', text: 'Darling River', correct: false },
      { id: 'c', text: 'Murrumbidgee River', correct: false },
      { id: 'd', text: 'Brisbane River', correct: false }
    ],
    explanation: 'The Murray River is Australia\'s longest river.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'add82',
    question: 'Which Australian city hosted the 2000 Olympic Games?',
    options: [
      { id: 'a', text: 'Sydney', correct: true },
      { id: 'b', text: 'Melbourne', correct: false },
      { id: 'c', text: 'Brisbane', correct: false },
      { id: 'd', text: 'Perth', correct: false }
    ],
    explanation: 'Sydney hosted the 2000 Summer Olympic Games.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'add83',
    question: 'What is the name of Australia\'s largest desert?',
    options: [
      { id: 'a', text: 'Great Victorian Desert', correct: true },
      { id: 'b', text: 'Simpson Desert', correct: false },
      { id: 'c', text: 'Gibson Desert', correct: false },
      { id: 'd', text: 'Tanami Desert', correct: false }
    ],
    explanation: 'The Great Victorian Desert is Australia\'s largest desert.',
    category: 'geography',
    difficulty: 'hard'
  },
  {
    id: 'add84',
    question: 'Which ocean lies to the east of Australia?',
    options: [
      { id: 'a', text: 'Pacific Ocean', correct: true },
      { id: 'b', text: 'Indian Ocean', correct: false },
      { id: 'c', text: 'Southern Ocean', correct: false },
      { id: 'd', text: 'Atlantic Ocean', correct: false }
    ],
    explanation: 'The Pacific Ocean lies to the east of Australia.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'add85',
    question: 'Which ocean lies to the west of Australia?',
    options: [
      { id: 'a', text: 'Indian Ocean', correct: true },
      { id: 'b', text: 'Pacific Ocean', correct: false },
      { id: 'c', text: 'Southern Ocean', correct: false },
      { id: 'd', text: 'Arctic Ocean', correct: false }
    ],
    explanation: 'The Indian Ocean lies to the west of Australia.',
    category: 'geography',
    difficulty: 'easy'
  },

  // ECONOMY & SOCIETY (15 questions)
  {
    id: 'add86',
    question: 'What are Australia\'s national colors?',
    options: [
      { id: 'a', text: 'Green and gold', correct: true },
      { id: 'b', text: 'Blue and white', correct: false },
      { id: 'c', text: 'Red and white', correct: false },
      { id: 'd', text: 'Black and yellow', correct: false }
    ],
    explanation: 'Green and gold are Australia\'s national colors.',
    category: 'symbols',
    difficulty: 'easy'
  },
  {
    id: 'add87',
    question: 'What is the currency of Australia?',
    options: [
      { id: 'a', text: 'Australian dollar', correct: true },
      { id: 'b', text: 'Australian pound', correct: false },
      { id: 'c', text: 'Euro', correct: false },
      { id: 'd', text: 'British pound', correct: false }
    ],
    explanation: 'The Australian dollar is the currency of Australia.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'add88',
    question: 'What does ANZAC stand for?',
    options: [
      { id: 'a', text: 'Australian and New Zealand Army Corps', correct: true },
      { id: 'b', text: 'Australian Northern Zone Allies Coalition', correct: false },
      { id: 'c', text: 'Armed Nations Zonal Allied Command', correct: false },
      { id: 'd', text: 'Australian National Zoning and Census', correct: false }
    ],
    explanation: 'ANZAC stands for Australian and New Zealand Army Corps.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'add89',
    question: 'What is Medicare?',
    options: [
      { id: 'a', text: 'Australia\'s public health care system', correct: true },
      { id: 'b', text: 'A private hospital', correct: false },
      { id: 'c', text: 'A medical degree', correct: false },
      { id: 'd', text: 'An ambulance service', correct: false }
    ],
    explanation: 'Medicare is Australia\'s publicly funded universal health care system.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'add90',
    question: 'At what age can you legally drive a car in Australia?',
    options: [
      { id: 'a', text: 'Varies by state, usually 17-18 years for a full license', correct: true },
      { id: 'b', text: '16 years', correct: false },
      { id: 'c', text: '21 years', correct: false },
      { id: 'd', text: '25 years', correct: false }
    ],
    explanation: 'The legal driving age varies by state/territory, usually requiring you to be 17-18 for a full license.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'add91',
    question: 'What is the name of Australia\'s national anthem?',
    options: [
      { id: 'a', text: 'Advance Australia Fair', correct: true },
      { id: 'b', text: 'Waltzing Matilda', correct: false },
      { id: 'c', text: 'God Save the King', correct: false },
      { id: 'd', text: 'I Am Australian', correct: false }
    ],
    explanation: 'Advance Australia Fair is Australia\'s national anthem.',
    category: 'symbols',
    difficulty: 'easy'
  },
  {
    id: 'add92',
    question: 'Is education free in Australia?',
    options: [
      { id: 'a', text: 'Yes, government school education is free for Australian citizens', correct: true },
      { id: 'b', text: 'No, all education must be paid for', correct: false },
      { id: 'c', text: 'Only primary school is free', correct: false },
      { id: 'd', text: 'Only university is free', correct: false }
    ],
    explanation: 'Government school education is free for Australian citizens and permanent residents.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'add93',
    question: 'What is the school leaving age in Australia?',
    options: [
      { id: 'a', text: 'Varies by state, usually 17 years', correct: true },
      { id: 'b', text: '14 years', correct: false },
      { id: 'c', text: '18 years', correct: false },
      { id: 'd', text: '21 years', correct: false }
    ],
    explanation: 'The school leaving age varies by state/territory, but is usually around 17 years.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'add94',
    question: 'What is the emergency telephone number in Australia?',
    options: [
      { id: 'a', text: '000', correct: true },
      { id: 'b', text: '911', correct: false },
      { id: 'c', text: '999', correct: false },
      { id: 'd', text: '112', correct: false }
    ],
    explanation: 'The emergency telephone number in Australia is 000 (triple zero).',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'add95',
    question: 'What does ATO stand for?',
    options: [
      { id: 'a', text: 'Australian Taxation Office', correct: true },
      { id: 'b', text: 'Australian Transport Organization', correct: false },
      { id: 'c', text: 'Australian Trade Office', correct: false },
      { id: 'd', text: 'Australian Tourism Office', correct: false }
    ],
    explanation: 'ATO stands for Australian Taxation Office, which manages Australia\'s tax system.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'add96',
    question: 'Is it compulsory to pay tax in Australia?',
    options: [
      { id: 'a', text: 'Yes, if you earn above a certain amount', correct: true },
      { id: 'b', text: 'No, it is optional', correct: false },
      { id: 'c', text: 'Only for non-citizens', correct: false },
      { id: 'd', text: 'Only for business owners', correct: false }
    ],
    explanation: 'Yes, you must pay tax if you earn above the tax-free threshold.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'add97',
    question: 'What is TAFE?',
    options: [
      { id: 'a', text: 'Technical and Further Education institutions', correct: true },
      { id: 'b', text: 'Teaching and Faculty Evaluation', correct: false },
      { id: 'c', text: 'Tertiary Australian Foundation Education', correct: false },
      { id: 'd', text: 'Training and Feedback Enterprises', correct: false }
    ],
    explanation: 'TAFE stands for Technical and Further Education, providing vocational training.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'add98',
    question: 'Can women in Australia be forced to marry?',
    options: [
      { id: 'a', text: 'No, forced marriage is illegal', correct: true },
      { id: 'b', text: 'Yes, in some circumstances', correct: false },
      { id: 'c', text: 'Yes, if their family agrees', correct: false },
      { id: 'd', text: 'Only if they are under 18', correct: false }
    ],
    explanation: 'Forced marriage is illegal in Australia. Everyone has the right to choose whom they marry.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'add99',
    question: 'Can children in Australia be forced to marry?',
    options: [
      { id: 'a', text: 'No, it is illegal and a serious crime', correct: true },
      { id: 'b', text: 'Yes, with parental consent', correct: false },
      { id: 'c', text: 'Yes, in certain cultural contexts', correct: false },
      { id: 'd', text: 'Yes, if they are over 16', correct: false }
    ],
    explanation: 'Child marriage is illegal in Australia. It is a serious crime to force a child to marry.',
    category: 'australian-values',
    difficulty: 'easy',
    isValueQuestion: true
  },
  {
    id: 'add100',
    question: 'What is the minimum legal age to get married in Australia?',
    options: [
      { id: 'a', text: '18 years', correct: true },
      { id: 'b', text: '16 years', correct: false },
      { id: 'c', text: '21 years', correct: false },
      { id: 'd', text: '14 years', correct: false }
    ],
    explanation: 'The minimum legal age to get married in Australia is 18 years.',
    category: 'australian-values',
    difficulty: 'easy'
  }
];
