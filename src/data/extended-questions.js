// Extended question bank - additional 100+ questions
// Expands total to 300+ comprehensive citizenship test questions
// Based on official Australian Citizenship Test requirements 2025

export const EXTENDED_QUESTIONS = [
  // AUSTRALIAN SYMBOLS & NATIONAL IDENTITY (15 questions)
  {
    id: 'ext1',
    question: 'What are the official colours of Australia?',
    options: [
      { id: 'a', text: 'Green and gold', correct: true },
      { id: 'b', text: 'Red and white', correct: false },
      { id: 'c', text: 'Blue and white', correct: false },
      { id: 'd', text: 'Green and yellow', correct: false }
    ],
    explanation: 'Green and gold are the official colours of Australia, worn by our national sporting teams.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext2',
    question: 'What is the floral emblem of Australia?',
    options: [
      { id: 'a', text: 'Golden wattle', correct: true },
      { id: 'b', text: 'Waratah', correct: false },
      { id: 'c', text: 'Eucalyptus', correct: false },
      { id: 'd', text: 'Banksia', correct: false }
    ],
    explanation: 'The golden wattle (Acacia pycnantha) is Australia\'s national floral emblem.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext3',
    question: 'What does the Commonwealth Star on the Australian flag represent?',
    options: [
      { id: 'a', text: 'Federation - with one point for each of the six states and one for the territories', correct: true },
      { id: 'b', text: 'The Southern Cross constellation', correct: false },
      { id: 'c', text: 'The seven seas', correct: false },
      { id: 'd', text: 'The British Commonwealth', correct: false }
    ],
    explanation: 'The Commonwealth Star has seven points - six for the states and one for the territories.',
    category: 'culture',
    difficulty: 'hard'
  },
  {
    id: 'ext4',
    question: 'When is Australia Day celebrated?',
    options: [
      { id: 'a', text: '26 January', correct: true },
      { id: 'b', text: '1 January', correct: false },
      { id: 'c', text: '25 April', correct: false },
      { id: 'd', text: '11 November', correct: false }
    ],
    explanation: 'Australia Day is celebrated on 26 January, marking the arrival of the First Fleet in 1788.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext5',
    question: 'What is the national gemstone of Australia?',
    options: [
      { id: 'a', text: 'Opal', correct: true },
      { id: 'b', text: 'Diamond', correct: false },
      { id: 'c', text: 'Sapphire', correct: false },
      { id: 'd', text: 'Emerald', correct: false }
    ],
    explanation: 'The opal is Australia\'s national gemstone, and Australia produces about 95% of the world\'s precious opals.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext6',
    question: 'What animal appears on the Australian Coat of Arms alongside the kangaroo?',
    options: [
      { id: 'a', text: 'Emu', correct: true },
      { id: 'b', text: 'Koala', correct: false },
      { id: 'c', text: 'Wombat', correct: false },
      { id: 'd', text: 'Platypus', correct: false }
    ],
    explanation: 'The kangaroo and emu were chosen because they cannot easily move backwards, symbolizing a nation moving forward.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext7',
    question: 'What is the significance of the Union Jack on the Australian flag?',
    options: [
      { id: 'a', text: 'It represents Australia\'s historical links with Great Britain', correct: true },
      { id: 'b', text: 'It shows Australia is still part of Britain', correct: false },
      { id: 'c', text: 'It represents the Queen as absolute ruler', correct: false },
      { id: 'd', text: 'It has no particular significance', correct: false }
    ],
    explanation: 'The Union Jack in the corner recognizes Australia\'s historical links with Great Britain.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext8',
    question: 'What does "Advance Australia Fair" refer to?',
    options: [
      { id: 'a', text: 'The Australian national anthem', correct: true },
      { id: 'b', text: 'An Australian political party', correct: false },
      { id: 'c', text: 'A national holiday', correct: false },
      { id: 'd', text: 'A government program', correct: false }
    ],
    explanation: '"Advance Australia Fair" is the title and first line of Australia\'s national anthem.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext9',
    question: 'Who designed the Australian flag?',
    options: [
      { id: 'a', text: 'It was chosen from a competition in 1901', correct: true },
      { id: 'b', text: 'Captain James Cook', correct: false },
      { id: 'c', text: 'Sir Edmund Barton', correct: false },
      { id: 'd', text: 'The British government', correct: false }
    ],
    explanation: 'The Australian flag was chosen from entries in a public competition held in 1901.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext10',
    question: 'What does the term "fair go" mean in Australian culture?',
    options: [
      { id: 'a', text: 'Giving everyone a chance and treating people fairly', correct: true },
      { id: 'b', text: 'A type of sporting event', correct: false },
      { id: 'c', text: 'A government welfare program', correct: false },
      { id: 'd', text: 'A farming practice', correct: false }
    ],
    explanation: 'The concept of a "fair go" means that all Australians should have equal opportunities and be treated fairly.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext11',
    question: 'When is Remembrance Day observed in Australia?',
    options: [
      { id: 'a', text: '11 November', correct: true },
      { id: 'b', text: '25 April', correct: false },
      { id: 'c', text: '26 January', correct: false },
      { id: 'd', text: '1 July', correct: false }
    ],
    explanation: 'Remembrance Day is observed on 11 November to remember Australians who died in wars and conflicts.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext12',
    question: 'What is meant by "mateship" in Australian values?',
    options: [
      { id: 'a', text: 'Loyalty, friendship, and willingness to help others', correct: true },
      { id: 'b', text: 'Only being friends with people like yourself', correct: false },
      { id: 'c', text: 'A government social program', correct: false },
      { id: 'd', text: 'A type of marriage', correct: false }
    ],
    explanation: 'Mateship is an important Australian value meaning loyalty, equality, and friendship.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext13',
    question: 'What are the colours of the Aboriginal flag?',
    options: [
      { id: 'a', text: 'Black, red, and yellow', correct: true },
      { id: 'b', text: 'Green, yellow, and blue', correct: false },
      { id: 'c', text: 'Red, white, and blue', correct: false },
      { id: 'd', text: 'Black, white, and red', correct: false }
    ],
    explanation: 'The Aboriginal flag has black (representing Aboriginal people), red (the earth), and yellow (the sun).',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext14',
    question: 'What do the stars on the Australian flag represent?',
    options: [
      { id: 'a', text: 'The Southern Cross constellation', correct: true },
      { id: 'b', text: 'The six states', correct: false },
      { id: 'c', text: 'The British Empire', correct: false },
      { id: 'd', text: 'Famous Australian explorers', correct: false }
    ],
    explanation: 'The five stars represent the Southern Cross constellation, visible in the Southern Hemisphere.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext15',
    question: 'What does ANZAC stand for?',
    options: [
      { id: 'a', text: 'Australian and New Zealand Army Corps', correct: true },
      { id: 'b', text: 'Australian National Zamboanga Armed Coalition', correct: false },
      { id: 'c', text: 'Allied Nations Zulu Army Contingent', correct: false },
      { id: 'd', text: 'Australian Navy and Airforce Command', correct: false }
    ],
    explanation: 'ANZAC stands for Australian and New Zealand Army Corps, formed during World War I.',
    category: 'history',
    difficulty: 'easy'
  },

  // GOVERNMENT STRUCTURE & ELECTIONS (20 questions)
  {
    id: 'ext16',
    question: 'How often must federal elections be held in Australia?',
    options: [
      { id: 'a', text: 'At least every 3 years', correct: true },
      { id: 'b', text: 'Every 2 years', correct: false },
      { id: 'c', text: 'Every 4 years', correct: false },
      { id: 'd', text: 'Every 5 years', correct: false }
    ],
    explanation: 'Federal elections for the House of Representatives must be held at least every 3 years.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext17',
    question: 'Who has the power to declare war in Australia?',
    options: [
      { id: 'a', text: 'The Governor-General on advice of the government', correct: true },
      { id: 'b', text: 'The Prime Minister alone', correct: false },
      { id: 'c', text: 'The Australian people through a referendum', correct: false },
      { id: 'd', text: 'The High Court', correct: false }
    ],
    explanation: 'The Governor-General has the power to declare war, acting on the advice of the government.',
    category: 'government',
    difficulty: 'hard'
  },
  {
    id: 'ext18',
    question: 'What is the minimum age to vote in Australian federal elections?',
    options: [
      { id: 'a', text: '18 years', correct: true },
      { id: 'b', text: '16 years', correct: false },
      { id: 'c', text: '21 years', correct: false },
      { id: 'd', text: '17 years', correct: false }
    ],
    explanation: 'You must be at least 18 years old to vote in Australian federal elections.',
    category: 'government',
    difficulty: 'easy'
  },
  {
    id: 'ext19',
    question: 'What is compulsory for Australian citizens aged 18 and over?',
    options: [
      { id: 'a', text: 'To enrol to vote and to vote in federal and state or territory elections', correct: true },
      { id: 'b', text: 'To join a political party', correct: false },
      { id: 'c', text: 'To serve in the military', correct: false },
      { id: 'd', text: 'To attend town hall meetings', correct: false }
    ],
    explanation: 'Enrolling to vote and voting in elections is compulsory for Australian citizens aged 18 and over.',
    category: 'government',
    difficulty: 'easy'
  },
  {
    id: 'ext20',
    question: 'What voting system is used for the Senate?',
    options: [
      { id: 'a', text: 'Preferential voting', correct: true },
      { id: 'b', text: 'First past the post', correct: false },
      { id: 'c', text: 'Winner takes all', correct: false },
      { id: 'd', text: 'Random selection', correct: false }
    ],
    explanation: 'Australia uses preferential voting for both the House of Representatives and the Senate.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext21',
    question: 'What is the role of the Opposition in Parliament?',
    options: [
      { id: 'a', text: 'To debate and keep the government accountable', correct: true },
      { id: 'b', text: 'To always vote against the government', correct: false },
      { id: 'c', text: 'To form a separate government', correct: false },
      { id: 'd', text: 'To advise the Governor-General', correct: false }
    ],
    explanation: 'The Opposition scrutinizes the government, debates issues, and holds the government accountable.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext22',
    question: 'Who appoints government ministers?',
    options: [
      { id: 'a', text: 'The Governor-General on the advice of the Prime Minister', correct: true },
      { id: 'b', text: 'The High Court', correct: false },
      { id: 'c', text: 'The Australian people through elections', correct: false },
      { id: 'd', text: 'The Prime Minister alone', correct: false }
    ],
    explanation: 'Ministers are appointed by the Governor-General based on the Prime Minister\'s recommendations.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext23',
    question: 'What is a referendum in Australia?',
    options: [
      { id: 'a', text: 'A vote to change the Australian Constitution', correct: true },
      { id: 'b', text: 'A vote to elect a new Prime Minister', correct: false },
      { id: 'c', text: 'A vote to change state laws', correct: false },
      { id: 'd', text: 'A survey of public opinion', correct: false }
    ],
    explanation: 'A referendum is a vote by the Australian people to approve changes to the Constitution.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext24',
    question: 'What majority is needed for a referendum to succeed?',
    options: [
      { id: 'a', text: 'A majority of voters nationwide and a majority of states', correct: true },
      { id: 'b', text: 'Just a majority of voters', correct: false },
      { id: 'c', text: 'Two-thirds of all voters', correct: false },
      { id: 'd', text: 'Approval from all states', correct: false }
    ],
    explanation: 'A referendum needs a double majority: majority of voters overall AND majority in at least 4 of the 6 states.',
    category: 'government',
    difficulty: 'hard'
  },
  {
    id: 'ext25',
    question: 'What is the Executive in Australian government?',
    options: [
      { id: 'a', text: 'The part of government that puts laws into practice', correct: true },
      { id: 'b', text: 'The part that makes laws', correct: false },
      { id: 'c', text: 'The part that interprets laws', correct: false },
      { id: 'd', text: 'The voting system', correct: false }
    ],
    explanation: 'The Executive includes the Prime Minister, ministers, and government departments that implement laws.',
    category: 'government',
    difficulty: 'hard'
  },
  {
    id: 'ext26',
    question: 'What are the three levels of government in Australia?',
    options: [
      { id: 'a', text: 'Federal, state or territory, and local', correct: true },
      { id: 'b', text: 'Supreme, high, and low', correct: false },
      { id: 'c', text: 'Executive, legislative, and judicial', correct: false },
      { id: 'd', text: 'National, regional, and municipal', correct: false }
    ],
    explanation: 'Australia has three levels of government: federal (Commonwealth), state/territory, and local (council).',
    category: 'government',
    difficulty: 'easy'
  },
  {
    id: 'ext27',
    question: 'Who is the head of the Australian Government?',
    options: [
      { id: 'a', text: 'The Prime Minister', correct: true },
      { id: 'b', text: 'The Governor-General', correct: false },
      { id: 'c', text: 'The King', correct: false },
      { id: 'd', text: 'The Chief Justice', correct: false }
    ],
    explanation: 'The Prime Minister is the head of the Australian Government.',
    category: 'government',
    difficulty: 'easy'
  },
  {
    id: 'ext28',
    question: 'What is Question Time in Parliament?',
    options: [
      { id: 'a', text: 'A time when members can ask ministers questions about their responsibilities', correct: true },
      { id: 'b', text: 'When the public can visit Parliament', correct: false },
      { id: 'c', text: 'A quiz for new members', correct: false },
      { id: 'd', text: 'Time for voting on bills', correct: false }
    ],
    explanation: 'Question Time is when members of Parliament can question ministers about government actions and policies.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext29',
    question: 'What is the role of the Governor-General?',
    options: [
      { id: 'a', text: 'To represent the King in Australia and perform ceremonial duties', correct: true },
      { id: 'b', text: 'To lead the government', correct: false },
      { id: 'c', text: 'To make all laws', correct: false },
      { id: 'd', text: 'To command the military directly', correct: false }
    ],
    explanation: 'The Governor-General represents the King in Australia and performs important ceremonial and constitutional duties.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext30',
    question: 'How are members of the House of Representatives elected?',
    options: [
      { id: 'a', text: 'By voters in their local electoral division', correct: true },
      { id: 'b', text: 'By the Prime Minister', correct: false },
      { id: 'c', text: 'By the Governor-General', correct: false },
      { id: 'd', text: 'By state premiers', correct: false }
    ],
    explanation: 'Members of the House of Representatives are elected by voters in their local electoral division (electorate).',
    category: 'government',
    difficulty: 'easy'
  },
  {
    id: 'ext31',
    question: 'What is a bill?',
    options: [
      { id: 'a', text: 'A proposed law being considered by parliament', correct: true },
      { id: 'b', text: 'An invoice for government services', correct: false },
      { id: 'c', text: 'A petition signed by citizens', correct: false },
      { id: 'd', text: 'A government announcement', correct: false }
    ],
    explanation: 'A bill is a proposed law that is debated in parliament before it can become an Act of Parliament.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext32',
    question: 'Who has the power to interpret and apply Australian law?',
    options: [
      { id: 'a', text: 'The courts and judges', correct: true },
      { id: 'b', text: 'The Prime Minister', correct: false },
      { id: 'c', text: 'The police', correct: false },
      { id: 'd', text: 'The Governor-General', correct: false }
    ],
    explanation: 'The judicial branch - courts and judges - has the power to interpret and apply the law.',
    category: 'government',
    difficulty: 'medium'
  },
  {
    id: 'ext33',
    question: 'What is the Cabinet in Australian government?',
    options: [
      { id: 'a', text: 'The senior ministers who make important government decisions', correct: true },
      { id: 'b', text: 'A storage area in Parliament House', correct: false },
      { id: 'c', text: 'All members of Parliament', correct: false },
      { id: 'd', text: 'The opposition party', correct: false }
    ],
    explanation: 'The Cabinet is a group of senior ministers chosen by the Prime Minister to make key government decisions.',
    category: 'government',
    difficulty: 'hard'
  },
  {
    id: 'ext34',
    question: 'What is Royal Assent?',
    options: [
      { id: 'a', text: 'Approval by the Governor-General for a bill to become law', correct: true },
      { id: 'b', text: 'Permission to visit the King', correct: false },
      { id: 'c', text: 'A royal visit to Australia', correct: false },
      { id: 'd', text: 'Agreement by all states', correct: false }
    ],
    explanation: 'Royal Assent is when the Governor-General signs a bill, making it an official Act of Parliament.',
    category: 'government',
    difficulty: 'hard'
  },
  {
    id: 'ext35',
    question: 'What happens if both Houses of Parliament disagree on a proposed law?',
    options: [
      { id: 'a', text: 'The law does not proceed unless compromise is reached', correct: true },
      { id: 'b', text: 'The Prime Minister decides', correct: false },
      { id: 'c', text: 'The House of Representatives always wins', correct: false },
      { id: 'd', text: 'The law is put to a public vote', correct: false }
    ],
    explanation: 'Both houses must agree for a bill to become law. Disagreements can lead to negotiations or a double dissolution.',
    category: 'government',
    difficulty: 'hard'
  },

  // RIGHTS, FREEDOMS & RESPONSIBILITIES (20 questions)
  {
    id: 'ext36',
    question: 'What does freedom of speech mean in Australia?',
    options: [
      { id: 'a', text: 'You can express your opinions within the law', correct: true },
      { id: 'b', text: 'You can say anything without any limits', correct: false },
      { id: 'c', text: 'Only politicians can speak freely', correct: false },
      { id: 'd', text: 'You must have permission to speak publicly', correct: false }
    ],
    explanation: 'Freedom of speech allows you to express opinions and ideas, but within legal limits (e.g., no inciting violence).',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext37',
    question: 'What is freedom of association?',
    options: [
      { id: 'a', text: 'The right to join or form groups and organizations', correct: true },
      { id: 'b', text: 'The right to avoid people you don\'t like', correct: false },
      { id: 'c', text: 'The right to associate only with your own culture', correct: false },
      { id: 'd', text: 'The right to join the government', correct: false }
    ],
    explanation: 'Freedom of association means you can join or form groups, such as political parties, unions, or clubs.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext38',
    question: 'Are you free to follow any religion in Australia?',
    options: [
      { id: 'a', text: 'Yes, or to follow no religion', correct: true },
      { id: 'b', text: 'No, you must be Christian', correct: false },
      { id: 'c', text: 'Only if approved by the government', correct: false },
      { id: 'd', text: 'Yes, but only traditional religions', correct: false }
    ],
    explanation: 'Australia has freedom of religion - you can practice any religion or no religion at all.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext39',
    question: 'What does equality before the law mean?',
    options: [
      { id: 'a', text: 'Everyone is treated equally by the law, regardless of background', correct: true },
      { id: 'b', text: 'Everyone receives the same punishment', correct: false },
      { id: 'c', text: 'Rich and poor have different laws', correct: false },
      { id: 'd', text: 'Only citizens have legal rights', correct: false }
    ],
    explanation: 'Equality before the law means all people are equal under the law, regardless of wealth, gender, ethnicity, or religion.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext40',
    question: 'What responsibility do Australian citizens have toward the law?',
    options: [
      { id: 'a', text: 'To obey Australian laws', correct: true },
      { id: 'b', text: 'To create new laws', correct: false },
      { id: 'c', text: 'To interpret laws personally', correct: false },
      { id: 'd', text: 'To enforce laws in their community', correct: false }
    ],
    explanation: 'All Australian citizens and residents have a responsibility to obey the laws of Australia.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext41',
    question: 'What is jury duty?',
    options: [
      { id: 'a', text: 'A responsibility to serve on a jury when called', correct: true },
      { id: 'b', text: 'A punishment for minor crimes', correct: false },
      { id: 'c', text: 'A type of community service', correct: false },
      { id: 'd', text: 'A job in the court system', correct: false }
    ],
    explanation: 'Jury duty is a civic responsibility where citizens may be called to serve as jurors in court cases.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext42',
    question: 'Can the government tell you what to think or believe?',
    options: [
      { id: 'a', text: 'No, you have freedom of thought and expression', correct: true },
      { id: 'b', text: 'Yes, you must follow government views', correct: false },
      { id: 'c', text: 'Only on political matters', correct: false },
      { id: 'd', text: 'Yes, during emergencies', correct: false }
    ],
    explanation: 'In Australia, you have freedom of thought, conscience, and expression - the government cannot control what you think.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext43',
    question: 'What is the legal age to marry in Australia?',
    options: [
      { id: 'a', text: '18 years', correct: true },
      { id: 'b', text: '16 years', correct: false },
      { id: 'c', text: '21 years', correct: false },
      { id: 'd', text: '17 years', correct: false }
    ],
    explanation: 'The legal age to marry in Australia is 18 years. Forced marriage is illegal.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext44',
    question: 'What is the principle of "innocent until proven guilty"?',
    options: [
      { id: 'a', text: 'People accused of crimes are considered innocent unless proven guilty in court', correct: true },
      { id: 'b', text: 'All suspects are automatically innocent', correct: false },
      { id: 'c', text: 'Guilt must be proven before arrest', correct: false },
      { id: 'd', text: 'Only applies to minor crimes', correct: false }
    ],
    explanation: 'A fundamental legal principle in Australia is that a person is presumed innocent until proven guilty in a court of law.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext45',
    question: 'Do men and women have equal rights in Australia?',
    options: [
      { id: 'a', text: 'Yes, men and women have equal rights', correct: true },
      { id: 'b', text: 'No, men have more rights', correct: false },
      { id: 'c', text: 'No, women have more rights', correct: false },
      { id: 'd', text: 'It depends on the state', correct: false }
    ],
    explanation: 'In Australia, men and women have equal rights under the law.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext46',
    question: 'What does "freedom of movement" mean?',
    options: [
      { id: 'a', text: 'You can move freely within Australia and leave or return to Australia', correct: true },
      { id: 'b', text: 'You can drive anywhere', correct: false },
      { id: 'c', text: 'You don\'t need a passport', correct: false },
      { id: 'd', text: 'You can enter other countries freely', correct: false }
    ],
    explanation: 'Australian citizens have the freedom to move freely within Australia and to leave and return to Australia.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext47',
    question: 'Is it acceptable to use violence to settle disagreements in Australia?',
    options: [
      { id: 'a', text: 'No, violence is not acceptable', correct: true },
      { id: 'b', text: 'Yes, if both people agree', correct: false },
      { id: 'c', text: 'Only in self-defense', correct: false },
      { id: 'd', text: 'Yes, within your own community', correct: false }
    ],
    explanation: 'Violence is never an acceptable way to settle disagreements in Australia. Peaceful and legal means must be used.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext48',
    question: 'What is defamation?',
    options: [
      { id: 'a', text: 'Damaging someone\'s reputation by spreading false information', correct: true },
      { id: 'b', text: 'Criticizing the government', correct: false },
      { id: 'c', text: 'Sharing your opinion about someone', correct: false },
      { id: 'd', text: 'Refusing to speak to someone', correct: false }
    ],
    explanation: 'Defamation is a legal term for damaging someone\'s reputation through false statements, which can be illegal.',
    category: 'rights',
    difficulty: 'hard'
  },
  {
    id: 'ext49',
    question: 'Can Australians peacefully protest against government decisions?',
    options: [
      { id: 'a', text: 'Yes, peaceful protest is allowed', correct: true },
      { id: 'b', text: 'No, protests are illegal', correct: false },
      { id: 'c', text: 'Only with government permission', correct: false },
      { id: 'd', text: 'Only political parties can protest', correct: false }
    ],
    explanation: 'Australians have the right to peacefully protest and demonstrate, subject to relevant laws and permits.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext50',
    question: 'What does equality of opportunity mean?',
    options: [
      { id: 'a', text: 'Everyone should have the same chances to succeed regardless of background', correct: true },
      { id: 'b', text: 'Everyone gets the same job', correct: false },
      { id: 'c', text: 'Everyone must achieve the same results', correct: false },
      { id: 'd', text: 'Only some groups get opportunities', correct: false }
    ],
    explanation: 'Equality of opportunity means everyone should have fair access to opportunities regardless of their background.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext51',
    question: 'Is domestic violence acceptable in Australia?',
    options: [
      { id: 'a', text: 'No, domestic violence is a crime', correct: true },
      { id: 'b', text: 'Yes, within families', correct: false },
      { id: 'c', text: 'Only if no one reports it', correct: false },
      { id: 'd', text: 'It depends on cultural practices', correct: false }
    ],
    explanation: 'Domestic violence is a serious crime in Australia. It is never acceptable regardless of cultural background.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext52',
    question: 'What are you free to do as long as you don\'t break the law?',
    options: [
      { id: 'a', text: 'Choose your own friends, religion, job, and where to live', correct: true },
      { id: 'b', text: 'Ignore traffic rules', correct: false },
      { id: 'c', text: 'Avoid paying taxes', correct: false },
      { id: 'd', text: 'Disrespect others', correct: false }
    ],
    explanation: 'Within the law, you are free to make personal choices about friends, religion, employment, and residence.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext53',
    question: 'What is the legal blood alcohol limit for fully licensed drivers in most states?',
    options: [
      { id: 'a', text: '0.05', correct: true },
      { id: 'b', text: '0.08', correct: false },
      { id: 'c', text: '0.02', correct: false },
      { id: 'd', text: '0.00', correct: false }
    ],
    explanation: 'The legal blood alcohol limit for fully licensed drivers is 0.05 in most Australian states and territories.',
    category: 'rights',
    difficulty: 'medium'
  },
  {
    id: 'ext54',
    question: 'Can you be discriminated against because of your race or religion in Australia?',
    options: [
      { id: 'a', text: 'No, discrimination on these grounds is against the law', correct: true },
      { id: 'b', text: 'Yes, employers can discriminate', correct: false },
      { id: 'c', text: 'Only in private organizations', correct: false },
      { id: 'd', text: 'Yes, if it\'s a private matter', correct: false }
    ],
    explanation: 'Discrimination based on race, religion, gender, or other attributes is illegal in Australia.',
    category: 'rights',
    difficulty: 'easy'
  },
  {
    id: 'ext55',
    question: 'What should you do if you witness a crime?',
    options: [
      { id: 'a', text: 'Report it to the police', correct: true },
      { id: 'b', text: 'Ignore it', correct: false },
      { id: 'c', text: 'Deal with it yourself', correct: false },
      { id: 'd', text: 'Only report if someone asks you', correct: false }
    ],
    explanation: 'If you witness a crime, you should report it to the police. Helping prevent and report crime is a civic responsibility.',
    category: 'rights',
    difficulty: 'easy'
  },

  // STATES, TERRITORIES & GEOGRAPHY (15 questions)
  {
    id: 'ext56',
    question: 'Which state is known as the "Sunshine State"?',
    options: [
      { id: 'a', text: 'Queensland', correct: true },
      { id: 'b', text: 'New South Wales', correct: false },
      { id: 'c', text: 'Western Australia', correct: false },
      { id: 'd', text: 'Northern Territory', correct: false }
    ],
    explanation: 'Queensland is known as the "Sunshine State" due to its warm climate.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext57',
    question: 'What is the largest state by area in Australia?',
    options: [
      { id: 'a', text: 'Western Australia', correct: true },
      { id: 'b', text: 'Queensland', correct: false },
      { id: 'c', text: 'New South Wales', correct: false },
      { id: 'd', text: 'Northern Territory', correct: false }
    ],
    explanation: 'Western Australia is the largest state by area, covering about one-third of the continent.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext58',
    question: 'Which city is the capital of Queensland?',
    options: [
      { id: 'a', text: 'Brisbane', correct: true },
      { id: 'b', text: 'Gold Coast', correct: false },
      { id: 'c', text: 'Cairns', correct: false },
      { id: 'd', text: 'Townsville', correct: false }
    ],
    explanation: 'Brisbane is the capital city of Queensland.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'ext59',
    question: 'Which territory is located in the center of Australia?',
    options: [
      { id: 'a', text: 'Northern Territory', correct: true },
      { id: 'b', text: 'Australian Capital Territory', correct: false },
      { id: 'c', text: 'South Australia', correct: false },
      { id: 'd', text: 'Queensland', correct: false }
    ],
    explanation: 'The Northern Territory is located in the central and northern parts of Australia.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext60',
    question: 'What is Australia\'s largest inland city?',
    options: [
      { id: 'a', text: 'Canberra', correct: true },
      { id: 'b', text: 'Alice Springs', correct: false },
      { id: 'c', text: 'Toowoomba', correct: false },
      { id: 'd', text: 'Dubbo', correct: false }
    ],
    explanation: 'Canberra, the national capital, is Australia\'s largest inland city.',
    category: 'geography',
    difficulty: 'hard'
  },
  {
    id: 'ext61',
    question: 'Which desert is the largest in Australia?',
    options: [
      { id: 'a', text: 'Great Victoria Desert', correct: true },
      { id: 'b', text: 'Simpson Desert', correct: false },
      { id: 'c', text: 'Tanami Desert', correct: false },
      { id: 'd', text: 'Gibson Desert', correct: false }
    ],
    explanation: 'The Great Victoria Desert is Australia\'s largest desert, located in Western Australia and South Australia.',
    category: 'geography',
    difficulty: 'hard'
  },
  {
    id: 'ext62',
    question: 'Which famous rock formation is located in the Northern Territory?',
    options: [
      { id: 'a', text: 'Uluru (Ayers Rock)', correct: true },
      { id: 'b', text: 'The Twelve Apostles', correct: false },
      { id: 'c', text: 'Wave Rock', correct: false },
      { id: 'd', text: 'The Three Sisters', correct: false }
    ],
    explanation: 'Uluru (also known as Ayers Rock) is a massive sandstone rock formation in the Northern Territory.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'ext63',
    question: 'Which state is the island state of Australia?',
    options: [
      { id: 'a', text: 'Tasmania', correct: true },
      { id: 'b', text: 'Queensland', correct: false },
      { id: 'c', text: 'Western Australia', correct: false },
      { id: 'd', text: 'South Australia', correct: false }
    ],
    explanation: 'Tasmania is an island state located south of the mainland.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'ext64',
    question: 'What ocean lies to the west of Australia?',
    options: [
      { id: 'a', text: 'Indian Ocean', correct: true },
      { id: 'b', text: 'Pacific Ocean', correct: false },
      { id: 'c', text: 'Atlantic Ocean', correct: false },
      { id: 'd', text: 'Southern Ocean', correct: false }
    ],
    explanation: 'The Indian Ocean lies to the west of Australia.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext65',
    question: 'Which city is known as the "Garden City"?',
    options: [
      { id: 'a', text: 'Adelaide', correct: true },
      { id: 'b', text: 'Melbourne', correct: false },
      { id: 'c', text: 'Perth', correct: false },
      { id: 'd', text: 'Hobart', correct: false }
    ],
    explanation: 'Adelaide is often called the "Garden City" due to its many parks and gardens.',
    category: 'geography',
    difficulty: 'hard'
  },
  {
    id: 'ext66',
    question: 'What is the capital of the Northern Territory?',
    options: [
      { id: 'a', text: 'Darwin', correct: true },
      { id: 'b', text: 'Alice Springs', correct: false },
      { id: 'c', text: 'Katherine', correct: false },
      { id: 'd', text: 'Tennant Creek', correct: false }
    ],
    explanation: 'Darwin is the capital city of the Northern Territory.',
    category: 'geography',
    difficulty: 'easy'
  },
  {
    id: 'ext67',
    question: 'Which mountain range runs down the east coast of Australia?',
    options: [
      { id: 'a', text: 'Great Dividing Range', correct: true },
      { id: 'b', text: 'Australian Alps', correct: false },
      { id: 'c', text: 'Flinders Ranges', correct: false },
      { id: 'd', text: 'MacDonnell Ranges', correct: false }
    ],
    explanation: 'The Great Dividing Range runs along the eastern coast of Australia from Queensland to Victoria.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext68',
    question: 'Which state shares a border with all mainland states except Western Australia?',
    options: [
      { id: 'a', text: 'South Australia', correct: true },
      { id: 'b', text: 'New South Wales', correct: false },
      { id: 'c', text: 'Queensland', correct: false },
      { id: 'd', text: 'Victoria', correct: false }
    ],
    explanation: 'South Australia shares borders with all mainland states except Western Australia.',
    category: 'geography',
    difficulty: 'hard'
  },
  {
    id: 'ext69',
    question: 'What percentage of Australia\'s population lives in cities?',
    options: [
      { id: 'a', text: 'About 90%', correct: true },
      { id: 'b', text: 'About 50%', correct: false },
      { id: 'c', text: 'About 70%', correct: false },
      { id: 'd', text: 'About 60%', correct: false }
    ],
    explanation: 'About 90% of Australians live in urban areas, making Australia one of the most urbanized nations.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext70',
    question: 'Which Australian city hosted the 2000 Summer Olympics?',
    options: [
      { id: 'a', text: 'Sydney', correct: true },
      { id: 'b', text: 'Melbourne', correct: false },
      { id: 'c', text: 'Brisbane', correct: false },
      { id: 'd', text: 'Perth', correct: false }
    ],
    explanation: 'Sydney hosted the Summer Olympic Games in 2000.',
    category: 'history',
    difficulty: 'easy'
  },

  // ECONOMY, SERVICES & SOCIETY (15 questions)
  {
    id: 'ext71',
    question: 'What does Medicare provide?',
    options: [
      { id: 'a', text: 'Public health care and hospital services', correct: true },
      { id: 'b', text: 'Free private health insurance', correct: false },
      { id: 'c', text: 'Unemployment benefits', correct: false },
      { id: 'd', text: 'Free medication for all conditions', correct: false }
    ],
    explanation: 'Medicare is Australia\'s universal health care system providing access to medical and hospital services.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'ext72',
    question: 'What is the PBS (Pharmaceutical Benefits Scheme)?',
    options: [
      { id: 'a', text: 'A scheme to help make medications more affordable', correct: true },
      { id: 'b', text: 'Free medication for everyone', correct: false },
      { id: 'c', text: 'A pharmacy licensing system', correct: false },
      { id: 'd', text: 'A medical research program', correct: false }
    ],
    explanation: 'The PBS subsidizes the cost of many prescription medications for all Australians.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext73',
    question: 'What is the emergency telephone number in Australia?',
    options: [
      { id: 'a', text: '000', correct: true },
      { id: 'b', text: '911', correct: false },
      { id: 'c', text: '999', correct: false },
      { id: 'd', text: '112', correct: false }
    ],
    explanation: 'Triple zero (000) is the emergency number for police, fire, and ambulance services in Australia.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'ext74',
    question: 'What is Centrelink?',
    options: [
      { id: 'a', text: 'A government service that provides social security payments and services', correct: true },
      { id: 'b', text: 'A shopping center', correct: false },
      { id: 'c', text: 'A job search website', correct: false },
      { id: 'd', text: 'A banking service', correct: false }
    ],
    explanation: 'Centrelink delivers social security payments and services to eligible Australians.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext75',
    question: 'Do you have to pay tax in Australia?',
    options: [
      { id: 'a', text: 'Yes, if you earn above a certain amount', correct: true },
      { id: 'b', text: 'No, tax is voluntary', correct: false },
      { id: 'c', text: 'Only if you are a citizen', correct: false },
      { id: 'd', text: 'Only businesses pay tax', correct: false }
    ],
    explanation: 'Everyone who earns income above the tax-free threshold must pay income tax in Australia.',
    category: 'society',
    difficulty: 'easy'
  },
  {
    id: 'ext76',
    question: 'What is superannuation?',
    options: [
      { id: 'a', text: 'A retirement savings plan that employers contribute to', correct: true },
      { id: 'b', text: 'A type of insurance', correct: false },
      { id: 'c', text: 'A government pension', correct: false },
      { id: 'd', text: 'A savings account', correct: false }
    ],
    explanation: 'Superannuation (super) is a retirement savings system where employers must contribute to employees\' super funds.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext77',
    question: 'What is the Fair Work Commission?',
    options: [
      { id: 'a', text: 'An independent body that sets minimum wages and employment conditions', correct: true },
      { id: 'b', text: 'A job recruitment agency', correct: false },
      { id: 'c', text: 'A workers union', correct: false },
      { id: 'd', text: 'A government employment program', correct: false }
    ],
    explanation: 'The Fair Work Commission is Australia\'s national workplace relations tribunal, setting wages and conditions.',
    category: 'society',
    difficulty: 'hard'
  },
  {
    id: 'ext78',
    question: 'What is TAFE?',
    options: [
      { id: 'a', text: 'Technical and Further Education - vocational training institutions', correct: true },
      { id: 'b', text: 'A university', correct: false },
      { id: 'c', text: 'A high school system', correct: false },
      { id: 'd', text: 'An employment agency', correct: false }
    ],
    explanation: 'TAFE institutes provide vocational and technical education and training.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext79',
    question: 'What is the minimum wage set by?',
    options: [
      { id: 'a', text: 'The Fair Work Commission', correct: true },
      { id: 'b', text: 'Individual employers', correct: false },
      { id: 'c', text: 'The Prime Minister', correct: false },
      { id: 'd', text: 'The Reserve Bank', correct: false }
    ],
    explanation: 'The Fair Work Commission sets and adjusts the national minimum wage.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext80',
    question: 'What is the Australian Tax Office (ATO) responsible for?',
    options: [
      { id: 'a', text: 'Collecting taxes and managing tax affairs', correct: true },
      { id: 'b', text: 'Setting tax rates', correct: false },
      { id: 'c', text: 'Providing financial advice', correct: false },
      { id: 'd', text: 'Managing the federal budget', correct: false }
    ],
    explanation: 'The ATO is responsible for administering the Australian tax system and collecting revenue.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext81',
    question: 'Is education free in Australia?',
    options: [
      { id: 'a', text: 'Government schools are free, but universities charge fees', correct: true },
      { id: 'b', text: 'All education is completely free', correct: false },
      { id: 'c', text: 'All education requires payment', correct: false },
      { id: 'd', text: 'Only primary school is free', correct: false }
    ],
    explanation: 'Government primary and secondary schools are free, but higher education (universities) charge fees.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext82',
    question: 'What is compulsory in Australia for children?',
    options: [
      { id: 'a', text: 'School attendance from age 6 to 15-17 (depending on state)', correct: true },
      { id: 'b', text: 'Military service', correct: false },
      { id: 'c', text: 'Learning a second language', correct: false },
      { id: 'd', text: 'Sports participation', correct: false }
    ],
    explanation: 'School attendance is compulsory for children from around age 6 to 15-17, depending on the state or territory.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext83',
    question: 'What is the Goods and Services Tax (GST)?',
    options: [
      { id: 'a', text: 'A 10% tax on most goods and services', correct: true },
      { id: 'b', text: 'A tax on income', correct: false },
      { id: 'c', text: 'A tax on property', correct: false },
      { id: 'd', text: 'A tax on imports only', correct: false }
    ],
    explanation: 'The GST is a 10% tax applied to most goods and services sold in Australia.',
    category: 'society',
    difficulty: 'medium'
  },
  {
    id: 'ext84',
    question: 'What does the Reserve Bank of Australia do?',
    options: [
      { id: 'a', text: 'Sets interest rates and manages monetary policy', correct: true },
      { id: 'b', text: 'Provides personal banking services', correct: false },
      { id: 'c', text: 'Collects taxes', correct: false },
      { id: 'd', text: 'Manages government spending', correct: false }
    ],
    explanation: 'The Reserve Bank of Australia is the central bank, responsible for monetary policy and setting interest rates.',
    category: 'society',
    difficulty: 'hard'
  },
  {
    id: 'ext85',
    question: 'What is a TFN (Tax File Number)?',
    options: [
      { id: 'a', text: 'A unique number for tax purposes issued by the ATO', correct: true },
      { id: 'b', text: 'Your employee ID number', correct: false },
      { id: 'c', text: 'Your bank account number', correct: false },
      { id: 'd', text: 'Your Medicare number', correct: false }
    ],
    explanation: 'A Tax File Number is a unique identifier issued by the ATO for managing your tax affairs.',
    category: 'society',
    difficulty: 'medium'
  },

  // INDIGENOUS AUSTRALIA (10 questions)
  {
    id: 'ext86',
    question: 'Who are the Aboriginal and Torres Strait Islander peoples?',
    options: [
      { id: 'a', text: 'The original inhabitants of Australia', correct: true },
      { id: 'b', text: 'The first European settlers', correct: false },
      { id: 'c', text: 'Recent migrants to Australia', correct: false },
      { id: 'd', text: 'People from neighboring islands', correct: false }
    ],
    explanation: 'Aboriginal and Torres Strait Islander peoples are Australia\'s first inhabitants, with cultures dating back over 65,000 years.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext87',
    question: 'What does NAIDOC stand for?',
    options: [
      { id: 'a', text: 'National Aborigines and Islanders Day Observance Committee', correct: true },
      { id: 'b', text: 'Native Australian Indigenous Development Organizational Council', correct: false },
      { id: 'c', text: 'National Australian Indigenous Day of Celebration', correct: false },
      { id: 'd', text: 'New Aboriginal Islander Development and Outreach Committee', correct: false }
    ],
    explanation: 'NAIDOC Week celebrates the history, culture, and achievements of Aboriginal and Torres Strait Islander peoples.',
    category: 'culture',
    difficulty: 'hard'
  },
  {
    id: 'ext88',
    question: 'How long have Aboriginal and Torres Strait Islander peoples lived in Australia?',
    options: [
      { id: 'a', text: 'More than 65,000 years', correct: true },
      { id: 'b', text: 'About 10,000 years', correct: false },
      { id: 'c', text: 'About 1,000 years', correct: false },
      { id: 'd', text: 'Since 1788', correct: false }
    ],
    explanation: 'Aboriginal and Torres Strait Islander peoples have lived in Australia for more than 65,000 years.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext89',
    question: 'What does "connection to country" mean for Indigenous Australians?',
    options: [
      { id: 'a', text: 'A deep spiritual and cultural connection to traditional lands', correct: true },
      { id: 'b', text: 'Owning property', correct: false },
      { id: 'c', text: 'Living in rural areas', correct: false },
      { id: 'd', text: 'Working on farms', correct: false }
    ],
    explanation: '"Connection to country" refers to the deep spiritual, cultural, and physical relationship Indigenous peoples have with their traditional lands.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext90',
    question: 'What is a "Welcome to Country"?',
    options: [
      { id: 'a', text: 'A ceremony performed by Indigenous custodians to welcome people to their land', correct: true },
      { id: 'b', text: 'A government immigration ceremony', correct: false },
      { id: 'c', text: 'A tourism greeting', correct: false },
      { id: 'd', text: 'A passport check', correct: false }
    ],
    explanation: 'A "Welcome to Country" is a ceremony performed by Indigenous custodians to welcome visitors to their traditional land.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext91',
    question: 'What is the significance of the didgeridoo?',
    options: [
      { id: 'a', text: 'It is a traditional Aboriginal musical instrument', correct: true },
      { id: 'b', text: 'It is a hunting tool', correct: false },
      { id: 'c', text: 'It is a cooking implement', correct: false },
      { id: 'd', text: 'It is a building material', correct: false }
    ],
    explanation: 'The didgeridoo is a traditional wind instrument developed by Aboriginal Australians.',
    category: 'culture',
    difficulty: 'easy'
  },
  {
    id: 'ext92',
    question: 'What are "Dreamtime" or "Dreaming" stories?',
    options: [
      { id: 'a', text: 'Aboriginal stories about the creation of the land and spiritual beliefs', correct: true },
      { id: 'b', text: 'Bedtime stories for children', correct: false },
      { id: 'c', text: 'Modern Australian novels', correct: false },
      { id: 'd', text: 'European folk tales', correct: false }
    ],
    explanation: 'Dreamtime or Dreaming stories are sacred Aboriginal narratives explaining creation, land, and spiritual beliefs.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext93',
    question: 'What is the Torres Strait?',
    options: [
      { id: 'a', text: 'The water between Australia and Papua New Guinea', correct: true },
      { id: 'b', text: 'A river in central Australia', correct: false },
      { id: 'c', text: 'A mountain range', correct: false },
      { id: 'd', text: 'A desert region', correct: false }
    ],
    explanation: 'The Torres Strait is the waterway between northern Australia and Papua New Guinea, home to Torres Strait Islander peoples.',
    category: 'geography',
    difficulty: 'medium'
  },
  {
    id: 'ext94',
    question: 'What are the colors of the Torres Strait Islander flag?',
    options: [
      { id: 'a', text: 'Green, blue, black, and white', correct: true },
      { id: 'b', text: 'Red, yellow, and black', correct: false },
      { id: 'c', text: 'Blue and white', correct: false },
      { id: 'd', text: 'Green and gold', correct: false }
    ],
    explanation: 'The Torres Strait Islander flag features green (land), blue (sea), black (people), and white (peace).',
    category: 'culture',
    difficulty: 'hard'
  },
  {
    id: 'ext95',
    question: 'What does "Acknowledgement of Country" mean?',
    options: [
      { id: 'a', text: 'Recognizing and respecting Aboriginal and Torres Strait Islander peoples as traditional custodians', correct: true },
      { id: 'b', text: 'Accepting Australian citizenship', correct: false },
      { id: 'c', text: 'Acknowledging the government', correct: false },
      { id: 'd', text: 'Recognizing state borders', correct: false }
    ],
    explanation: 'An Acknowledgement of Country is a way to recognize and respect Indigenous peoples as traditional custodians of the land.',
    category: 'culture',
    difficulty: 'medium'
  },

  // HISTORY & HERITAGE (15 questions)
  {
    id: 'ext96',
    question: 'Who was Captain James Cook?',
    options: [
      { id: 'a', text: 'A British navigator who mapped Australia\'s east coast', correct: true },
      { id: 'b', text: 'The first Prime Minister', correct: false },
      { id: 'c', text: 'The first Governor of New South Wales', correct: false },
      { id: 'd', text: 'An Aboriginal leader', correct: false }
    ],
    explanation: 'Captain James Cook mapped the east coast of Australia in 1770 and claimed it for Great Britain.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'ext97',
    question: 'What was the Eureka Stockade?',
    options: [
      { id: 'a', text: 'An 1854 rebellion of gold miners in Victoria', correct: true },
      { id: 'b', text: 'A famous battle in World War I', correct: false },
      { id: 'c', text: 'The first parliament building', correct: false },
      { id: 'd', text: 'A convict prison', correct: false }
    ],
    explanation: 'The Eureka Stockade was an 1854 rebellion by gold miners against government forces in Ballarat, Victoria.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext98',
    question: 'When did the First Fleet arrive in Australia?',
    options: [
      { id: 'a', text: '1788', correct: true },
      { id: 'b', text: '1770', correct: false },
      { id: 'c', text: '1801', correct: false },
      { id: 'd', text: '1850', correct: false }
    ],
    explanation: 'The First Fleet arrived in 1788, bringing the first European settlers and convicts to Australia.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    id: 'ext99',
    question: 'What was the White Australia Policy?',
    options: [
      { id: 'a', text: 'Immigration laws that restricted non-European migration', correct: true },
      { id: 'b', text: 'A housing program', correct: false },
      { id: 'c', text: 'An education policy', correct: false },
      { id: 'd', text: 'A health initiative', correct: false }
    ],
    explanation: 'The White Australia Policy was a series of immigration laws that restricted non-European migration, abolished in the 1970s.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext100',
    question: 'When did Australian women gain the right to vote in federal elections?',
    options: [
      { id: 'a', text: '1902', correct: true },
      { id: 'b', text: '1920', correct: false },
      { id: 'c', text: '1945', correct: false },
      { id: 'd', text: '1901', correct: false }
    ],
    explanation: 'Australian women gained the right to vote in federal elections in 1902, making Australia one of the first countries to do so.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext101',
    question: 'What significant event occurred in 1967 for Indigenous Australians?',
    options: [
      { id: 'a', text: 'A referendum to include them in the census and allow federal laws for them', correct: true },
      { id: 'b', text: 'They gained the right to vote', correct: false },
      { id: 'c', text: 'Land rights were fully established', correct: false },
      { id: 'd', text: 'The first Indigenous MP was elected', correct: false }
    ],
    explanation: 'The 1967 referendum allowed Aboriginal people to be counted in the census and the federal government to make laws for them.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext102',
    question: 'What was significant about the Mabo decision in 1992?',
    options: [
      { id: 'a', text: 'It recognized native title and overturned the concept of terra nullius', correct: true },
      { id: 'b', text: 'It established Medicare', correct: false },
      { id: 'c', text: 'It changed the voting age', correct: false },
      { id: 'd', text: 'It created the Senate', correct: false }
    ],
    explanation: 'The Mabo decision recognized Indigenous land rights and overturned the legal fiction of terra nullius (empty land).',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext103',
    question: 'When did Australia become a fully independent nation?',
    options: [
      { id: 'a', text: '1986 with the Australia Act', correct: true },
      { id: 'b', text: '1901 at Federation', correct: false },
      { id: 'c', text: '1945 after World War II', correct: false },
      { id: 'd', text: '1788 with settlement', correct: false }
    ],
    explanation: 'While Federation occurred in 1901, Australia didn\'t become fully independent until the Australia Act 1986.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext104',
    question: 'What was the Stolen Generations?',
    options: [
      { id: 'a', text: 'Aboriginal children forcibly removed from their families', correct: true },
      { id: 'b', text: 'Convicts transported to Australia', correct: false },
      { id: 'c', text: 'Gold rush migrants', correct: false },
      { id: 'd', text: 'World War II veterans', correct: false }
    ],
    explanation: 'The Stolen Generations refers to Aboriginal children who were forcibly removed from their families by government policies.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'ext105',
    question: 'Which war did Australia participate in from 1914 to 1918?',
    options: [
      { id: 'a', text: 'World War I', correct: true },
      { id: 'b', text: 'World War II', correct: false },
      { id: 'c', text: 'The Boer War', correct: false },
      { id: 'd', text: 'The Vietnam War', correct: false }
    ],
    explanation: 'Australia participated in World War I (1914-1918), with the Gallipoli campaign being a significant event.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    id: 'ext106',
    question: 'What was the purpose of the First Fleet?',
    options: [
      { id: 'a', text: 'To establish a British penal colony in Australia', correct: true },
      { id: 'b', text: 'To explore the Pacific Ocean', correct: false },
      { id: 'c', text: 'To trade with Asia', correct: false },
      { id: 'd', text: 'To find gold', correct: false }
    ],
    explanation: 'The First Fleet was sent to establish a British penal colony in New South Wales.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'ext107',
    question: 'When did the Australian gold rushes begin?',
    options: [
      { id: 'a', text: '1851', correct: true },
      { id: 'b', text: '1788', correct: false },
      { id: 'c', text: '1901', correct: false },
      { id: 'd', text: '1920', correct: false }
    ],
    explanation: 'The Australian gold rushes began in 1851, significantly increasing population and prosperity.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    id: 'ext108',
    question: 'Who was Sir Donald Bradman?',
    options: [
      { id: 'a', text: 'A famous Australian cricketer', correct: true },
      { id: 'b', text: 'A Prime Minister', correct: false },
      { id: 'c', text: 'A military general', correct: false },
      { id: 'd', text: 'An explorer', correct: false }
    ],
    explanation: 'Sir Donald Bradman was Australia\'s most famous cricketer, widely regarded as the greatest batsman of all time.',
    category: 'culture',
    difficulty: 'medium'
  },
  {
    id: 'ext109',
    question: 'What does the term "terra nullius" mean?',
    options: [
      { id: 'a', text: 'Land belonging to no one', correct: true },
      { id: 'b', text: 'Sacred land', correct: false },
      { id: 'c', text: 'Fertile land', correct: false },
      { id: 'd', text: 'Government land', correct: false }
    ],
    explanation: 'Terra nullius (land belonging to no one) was the false legal concept used to justify British settlement, overturned in 1992.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    id: 'ext110',
    question: 'When was Canberra established as the national capital?',
    options: [
      { id: 'a', text: '1913', correct: true },
      { id: 'b', text: '1901', correct: false },
      { id: 'c', text: '1788', correct: false },
      { id: 'd', text: '1945', correct: false }
    ],
    explanation: 'Canberra was officially established as the national capital in 1913 as a compromise between Sydney and Melbourne.',
    category: 'history',
    difficulty: 'hard'
  }
];
