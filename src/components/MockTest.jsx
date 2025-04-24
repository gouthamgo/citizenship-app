import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

// Mock test data organized by test number
const mockTestData = {
  // Test 1: Focus on Australia and its people
  test1: [
    {
      id: 1,
      text: "How many states and mainland territories does Australia have?",
      options: [
        "8 states and 3 mainland territories",
        "4 states and 2 mainland territories", 
        "6 states and 2 mainland territories"
      ],
      correctAnswer: "6 states and 2 mainland territories",
      section: "Australia and its people",
      explanation: "Australia has 6 states and 2 mainland territories."
    },
    {
      id: 2,
      text: "What is the capital city of Australia?",
      options: [
        "Sydney",
        "Melbourne",
        "Canberra"
      ],
      correctAnswer: "Canberra",
      section: "Australia and its people",
      explanation: "Canberra is Australia's capital city."
    },
    {
      id: 3,
      text: "What is celebrated on Australia Day?",
      options: [
        "The landing of ANZAC troops at Gallipoli",
        "The arrival of the First Fleet in 1788",
        "The federation of Australia in 1901"
      ],
      correctAnswer: "The arrival of the First Fleet in 1788",
      section: "Australia and its people",
      explanation: "Australia Day on 26 January marks the anniversary of the arrival of the First Fleet from Great Britain in 1788."
    },
    {
      id: 4,
      text: "What is Australia's national flower?",
      options: [
        "Waratah",
        "Golden Wattle",
        "Kangaroo Paw"
      ],
      correctAnswer: "Golden Wattle",
      section: "Australia and its people",
      explanation: "Australia's national flower is the Golden Wattle."
    },
    {
      id: 5,
      text: "What does the Commonwealth Star on the Australian flag represent?",
      options: [
        "The six states and territories",
        "The Southern Cross constellation",
        "The six states and one point for the territories"
      ],
      correctAnswer: "The six states and one point for the territories",
      section: "Australia and its people",
      explanation: "The Commonwealth Star has seven points, one for each of the six states and one for all territories."
    },
    {
      id: 6,
      text: "When did European settlement in Australia begin?",
      options: [
        "1788",
        "1901",
        "1851"
      ],
      correctAnswer: "1788",
      section: "Australia and its people",
      explanation: "European settlement in Australia began in 1788 when the First Fleet arrived from Great Britain."
    },
    {
      id: 7,
      text: "What are the colors of the Australian Aboriginal Flag?",
      options: [
        "Green, white and yellow",
        "Black, red and yellow",
        "Blue, white and green"
      ],
      correctAnswer: "Black, red and yellow",
      section: "Australia and its people",
      explanation: "The Australian Aboriginal Flag is black, red and yellow."
    },
    {
      id: 8,
      text: "What is Australia's national anthem called?",
      options: [
        "God Save the Queen",
        "Waltzing Matilda",
        "Advance Australia Fair"
      ],
      correctAnswer: "Advance Australia Fair",
      section: "Australia and its people",
      explanation: "Australia's national anthem is 'Advance Australia Fair'."
    },
    {
      id: 9,
      text: "What do Australians commemorate on Anzac Day?",
      options: [
        "The arrival of the First Fleet",
        "The landing of the Australian and New Zealand Army Corps at Gallipoli",
        "Federation Day"
      ],
      correctAnswer: "The landing of the Australian and New Zealand Army Corps at Gallipoli",
      section: "Australia and its people",
      explanation: "Anzac Day commemorates the landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey, during World War I on 25 April 1915."
    },
    {
      id: 10,
      text: "Who were the first inhabitants of Australia?",
      options: [
        "British settlers",
        "Aboriginal and Torres Strait Islander peoples",
        "Dutch explorers"
      ],
      correctAnswer: "Aboriginal and Torres Strait Islander peoples",
      section: "Australia and its people",
      explanation: "Aboriginal and Torres Strait Islander peoples were the first inhabitants of Australia and have the oldest continuous cultures in the world."
    },
    {
      id: 11,
      text: "What do the green stripes on the Torres Strait Islander Flag represent?",
      options: [
        "The islands",
        "The land",
        "The forest"
      ],
      correctAnswer: "The land",
      section: "Australia and its people",
      explanation: "On the Torres Strait Islander Flag, the green stripes represent the land."
    },
    {
      id: 12,
      text: "What colors are Australia's national colors?",
      options: [
        "Red, white and blue",
        "Black, red and yellow",
        "Green and gold"
      ],
      correctAnswer: "Green and gold",
      section: "Australia and its people",
      explanation: "Australia's national colors are green and gold, the colors of the golden wattle (Australia's national flower)."
    },
    {
      id: 13,
      text: "What animal is on the Western Australian coat of arms?",
      options: [
        "Kangaroo",
        "Emu",
        "Black Swan"
      ],
      correctAnswer: "Black Swan",
      section: "Australia and its people",
      explanation: "The Black Swan is the state emblem of Western Australia and appears on its coat of arms."
    },
    {
      id: 14,
      text: "Which of these is NOT on the Australian coat of arms?",
      options: [
        "Kangaroo",
        "Emu",
        "Koala"
      ],
      correctAnswer: "Koala",
      section: "Australia and its people",
      explanation: "The Australian coat of arms features a kangaroo and an emu, but not a koala."
    },
    {
      id: 15,
      text: "What event led to a significant increase in Australia's population in the 1850s?",
      options: [
        "The end of World War II",
        "Federation",
        "The gold rush"
      ],
      correctAnswer: "The gold rush",
      section: "Australia and its people",
      explanation: "The discovery of gold in the 1850s led to a gold rush that significantly increased Australia's population."
    },
    {
      id: 16,
      text: "When was the Commonwealth of Australia formed?",
      options: [
        "1788",
        "1901",
        "1914"
      ],
      correctAnswer: "1901",
      section: "Australia and its people",
      explanation: "On 1 January 1901, the colonies were united into a federation called the Commonwealth of Australia."
    },
    {
      id: 17,
      text: "Which of these is Australia's national gemstone?",
      options: [
        "Diamond",
        "Sapphire",
        "Opal"
      ],
      correctAnswer: "Opal",
      section: "Australia and its people",
      explanation: "The opal is Australia's national gemstone."
    },
    {
      id: 18,
      text: "What is the traditional Aboriginal musical instrument called?",
      options: [
        "Didgeridoo",
        "Harmonica",
        "Bagpipe"
      ],
      correctAnswer: "Didgeridoo",
      section: "Australia and its people",
      explanation: "The didgeridoo is a traditional Aboriginal musical instrument."
    },
    {
      id: 19,
      text: "Where was the first British penal colony in Australia established?",
      options: [
        "Melbourne, Victoria",
        "Sydney, New South Wales",
        "Brisbane, Queensland"
      ],
      correctAnswer: "Sydney, New South Wales",
      section: "Australia and its people",
      explanation: "The first British penal colony in Australia was established at Sydney Cove in New South Wales."
    },
    {
      id: 20,
      text: "What is the purpose of a Welcome to Country ceremony?",
      options: [
        "To welcome tourists to Australia",
        "To open sessions of Parliament",
        "For Aboriginal or Torres Strait Islander custodians to welcome visitors to their traditional land"
      ],
      correctAnswer: "For Aboriginal or Torres Strait Islander custodians to welcome visitors to their traditional land",
      section: "Australia and its people",
      explanation: "A Welcome to Country is a cultural practice performed by an Aboriginal or Torres Strait Islander custodian of the local region, welcoming visitors to their traditional land."
    }
  ],
  
  // Test 2: Focus on Government and the law in Australia
  test2: [
    {
      id: 1,
      text: "What is Australia's system of government?",
      options: [
        "Dictatorship",
        "Parliamentary democracy",
        "Communist"
      ],
      correctAnswer: "Parliamentary democracy",
      section: "Government and the law in Australia",
      explanation: "Australia has a parliamentary democracy, which means Australian citizens vote to elect representatives to parliament."
    },
    {
      id: 2,
      text: "Who is Australia's Head of State?",
      options: [
        "The Prime Minister",
        "The King of Australia",
        "The Governor-General"
      ],
      correctAnswer: "The King of Australia",
      section: "Government and the law in Australia",
      explanation: "Australia's Head of State is the King of Australia, His Majesty King Charles III."
    },
    {
      id: 3,
      text: "What happened on 1 January 1901?",
      options: [
        "The colonies were united into a federation called the Commonwealth of Australia",
        "Australia gained independence through war",
        "The first European settlers arrived in Australia"
      ],
      correctAnswer: "The colonies were united into a federation called the Commonwealth of Australia",
      section: "Government and the law in Australia",
      explanation: "On 1 January 1901, the separate colonies were united into a federation called the Commonwealth of Australia."
    },
    {
      id: 4,
      text: "What is the role of the Governor-General?",
      options: [
        "To write laws independently of parliament",
        "To rule Australia on behalf of the King",
        "To represent the King and sign bills into law"
      ],
      correctAnswer: "To represent the King and sign bills into law",
      section: "Government and the law in Australia",
      explanation: "The Governor-General represents the King in Australia and has formal responsibilities including signing bills into law (Royal Assent)."
    },
    {
      id: 5,
      text: "How many levels of government does Australia have?",
      options: [
        "One",
        "Two",
        "Three"
      ],
      correctAnswer: "Three",
      section: "Government and the law in Australia",
      explanation: "Australia has three levels of government: federal, state/territory, and local government."
    },
    {
      id: 6,
      text: "What is the Australian Parliament made up of?",
      options: [
        "The King, the Prime Minister and the Governor-General",
        "The House of Representatives and the Senate",
        "The House of Lords and the House of Commons"
      ],
      correctAnswer: "The House of Representatives and the Senate",
      section: "Government and the law in Australia",
      explanation: "The Australian Parliament is made up of the House of Representatives and the Senate."
    },
    {
      id: 7,
      text: "How are the laws administered in Australia?",
      options: [
        "By the police only",
        "By courts and tribunals",
        "By religious leaders"
      ],
      correctAnswer: "By courts and tribunals",
      section: "Government and the law in Australia",
      explanation: "In Australia, laws are administered by courts and tribunals where judges and magistrates make decisions."
    },
    {
      id: 8,
      text: "What power does the Australian Constitution give to the Federal Parliament?",
      options: [
        "The power to make and change laws for Australia",
        "The power to override state constitutions",
        "The power to appoint the King"
      ],
      correctAnswer: "The power to make and change laws for Australia",
      section: "Government and the law in Australia",
      explanation: "The Australian Constitution gives the Federal Parliament the power to make and change laws for Australia."
    },
    {
      id: 9,
      text: "What are the three branches of government in Australia?",
      options: [
        "Federal, state and local",
        "Executive, judicial and legislative",
        "The King, the Prime Minister and the Governor-General"
      ],
      correctAnswer: "Executive, judicial and legislative",
      section: "Government and the law in Australia",
      explanation: "The three branches of government in Australia are the executive (to administer laws), judicial (to interpret and apply laws), and legislative (to make laws)."
    },
    {
      id: 10,
      text: "Who is the leader of the Australian Government?",
      options: [
        "The King of Australia",
        "The Governor-General",
        "The Prime Minister"
      ],
      correctAnswer: "The Prime Minister",
      section: "Government and the law in Australia",
      explanation: "The Prime Minister is the leader of the Australian Government."
    },
    {
      id: 11,
      text: "What is the primary role of the Federal Government?",
      options: [
        "Local roads and community services",
        "Schools and hospitals",
        "National economy, immigration, and defense"
      ],
      correctAnswer: "National economy, immigration, and defense",
      section: "Government and the law in Australia",
      explanation: "The Federal Government is primarily responsible for matters of national interest such as the national economy, immigration, and defense."
    },
    {
      id: 12,
      text: "How often must federal elections be held in Australia?",
      options: [
        "Every year",
        "At least every three years",
        "At least every five years"
      ],
      correctAnswer: "At least every three years",
      section: "Government and the law in Australia",
      explanation: "Federal elections must be held at least every three years in Australia."
    },
    {
      id: 13,
      text: "What happens if a person breaks the law in Australia?",
      options: [
        "They are automatically deported",
        "They may be charged by the police and face court",
        "They must pay a fine to the Prime Minister"
      ],
      correctAnswer: "They may be charged by the police and face court",
      section: "Government and the law in Australia",
      explanation: "If a person breaks the law in Australia, they may be charged by the police and face court."
    },
    {
      id: 14,
      text: "Who is responsible for enforcing laws in Australia?",
      options: [
        "The public",
        "The police",
        "The army"
      ],
      correctAnswer: "The police",
      section: "Government and the law in Australia",
      explanation: "The police are responsible for enforcing laws in Australia, maintaining peace and protecting property."
    },
    {
      id: 15,
      text: "What document sets out the basic rules for the government of Australia?",
      options: [
        "The Australian Declaration of Independence",
        "The Commonwealth of Australia Constitution Act",
        "The Magna Carta"
      ],
      correctAnswer: "The Commonwealth of Australia Constitution Act",
      section: "Government and the law in Australia",
      explanation: "The Commonwealth of Australia Constitution Act (Australian Constitution) sets out the basic rules for the government of Australia."
    },
    {
      id: 16,
      text: "How can the Australian Constitution be changed?",
      options: [
        "By the decision of the Prime Minister",
        "By the Governor-General",
        "By a referendum"
      ],
      correctAnswer: "By a referendum",
      section: "Government and the law in Australia",
      explanation: "The Australian Constitution can only be changed by a referendum, where a 'double majority' is required."
    },
    {
      id: 17,
      text: "What is the name of the national police force in Australia?",
      options: [
        "The National Police",
        "The Australian Federal Police",
        "The Royal Australian Police"
      ],
      correctAnswer: "The Australian Federal Police",
      section: "Government and the law in Australia",
      explanation: "The Australian Federal Police (AFP) is Australia's national police force."
    },
    {
      id: 18,
      text: "Which level of government is responsible for hospitals and schools?",
      options: [
        "Federal Government",
        "State and territory governments",
        "Local government"
      ],
      correctAnswer: "State and territory governments",
      section: "Government and the law in Australia",
      explanation: "State and territory governments are primarily responsible for hospitals and schools."
    },
    {
      id: 19,
      text: "Who has the power to interpret and apply the law in Australia?",
      options: [
        "The police",
        "Judges and magistrates",
        "Members of Parliament"
      ],
      correctAnswer: "Judges and magistrates",
      section: "Government and the law in Australia",
      explanation: "Judges and magistrates have the power to interpret and apply the law in Australia."
    },
    {
      id: 20,
      text: "What is the minimum voting age in Australia?",
      options: [
        "16 years",
        "18 years",
        "21 years"
      ],
      correctAnswer: "18 years",
      section: "Government and the law in Australia",
      explanation: "The minimum voting age in Australia is 18 years."
    }
  ],
  
  // Test 3: Focus on Australia's democratic beliefs, rights and liberties
  test3: [
    {
      id: 1,
      text: "What do we call the elected representatives in the Australian Parliament?",
      options: [
        "Senators and Members of Parliament (MPs)",
        "Councilors and Ministers",
        "Premiers and Governors"
      ],
      correctAnswer: "Senators and Members of Parliament (MPs)",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In the Australian Parliament, elected representatives are called Senators and Members of Parliament (MPs)."
    },
    {
      id: 2,
      text: "In Australia's parliamentary democracy, what do citizens do to choose people to represent them?",
      options: [
        "Draw names from a ballot",
        "Vote in elections",
        "Pay a special tax"
      ],
      correctAnswer: "Vote in elections",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia's parliamentary democracy, citizens vote in elections to choose their representatives."
    },
    {
      id: 3,
      text: "What is the Rule of Law?",
      options: [
        "Only the police make the laws",
        "The government is not bound by the law",
        "No person is above the law"
      ],
      correctAnswer: "No person is above the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "The Rule of Law means that no person, group or religious rule is above the law. Everyone must follow Australia's laws."
    },
    {
      id: 4,
      text: "Which of these is NOT a responsibility of Australian citizenship?",
      options: [
        "Vote in elections",
        "Serve on a jury if called to do so",
        "Join a specific religious group"
      ],
      correctAnswer: "Join a specific religious group",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, there is freedom of religion. Citizens are not required to join any religious group."
    },
    {
      id: 5,
      text: "Which of these represents freedom in Australia?",
      options: [
        "Freedom to join or leave any group voluntarily",
        "Freedom to disobey Australian laws",
        "Freedom to avoid paying taxes"
      ],
      correctAnswer: "Freedom to join or leave any group voluntarily",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, people have the freedom to join or leave any legal group voluntarily as long as it is within the law."
    },
    {
      id: 6,
      text: "What does freedom of speech mean in Australia?",
      options: [
        "People can say and write whatever they want, even if it breaks the law",
        "People can say and write what they think, within the law",
        "People can only say things that the government agrees with"
      ],
      correctAnswer: "People can say and write what they think, within the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Freedom of speech in Australia means people can say and write what they think, but must still obey Australian laws."
    },
    {
      id: 7,
      text: "Which of these is a key Australian value?",
      options: [
        "Social class distinctions are important",
        "Equality of opportunity for all people",
        "The government controls all media"
      ],
      correctAnswer: "Equality of opportunity for all people",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Equality of opportunity for all people is a key Australian value. Australia values the 'fair go' for everyone."
    },
    {
      id: 8,
      text: "In Australia, what does a 'fair go' mean?",
      options: [
        "Everyone should receive welfare payments",
        "What someone achieves in life should be as a result of their talents, work and effort",
        "All people should be paid the same regardless of their job"
      ],
      correctAnswer: "What someone achieves in life should be as a result of their talents, work and effort",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, a 'fair go' means what someone achieves in life should be as a result of their talents, hard work and effort, rather than their wealth or background."
    },
    {
      id: 9,
      text: "What is the secular principle in Australia?",
      options: [
        "Everyone must follow the same religion",
        "Government and religion are separate",
        "The government must follow religious laws"
      ],
      correctAnswer: "Government and religion are separate",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "The secular principle in Australia means the government and religion are separate; there is no official national religion."
    },
    {
      id: 10,
      text: "Which of these is a privilege of Australian citizenship?",
      options: [
        "Paying less tax",
        "Being able to vote in Australian elections",
        "Having free healthcare for life"
      ],
      correctAnswer: "Being able to vote in Australian elections",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Being able to vote in Australian federal, state or territory elections is a privilege of Australian citizenship."
    },
    {
      id: 11,
      text: "Which of these is a responsibility of Australian citizenship?",
      options: [
        "Giving to charity",
        "Defending Australia if the need arises",
        "Owning property"
      ],
      correctAnswer: "Defending Australia if the need arises",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Defending Australia if the need arises is a responsibility of Australian citizenship."
    },
    {
      id: 12,
      text: "Which statement reflects Australian beliefs about peaceful change?",
      options: [
        "Violence is an acceptable way to change laws",
        "Change should occur through discussion, peaceful persuasion and democratic process",
        "Only the government can propose changes to laws"
      ],
      correctAnswer: "Change should occur through discussion, peaceful persuasion and democratic process",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Australians believe that change should occur through discussion, peaceful persuasion, and the democratic process. We reject violence as a way to change laws."
    },
    {
      id: 13,
      text: "Which of these reflects gender equality in Australia?",
      options: [
        "Men and women have equal rights",
        "Men should be paid more than women",
        "Only men can hold leadership positions"
      ],
      correctAnswer: "Men and women have equal rights",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, men and women have equal rights. Gender equality is an important Australian value."
    },
    {
      id: 14,
      text: "Which of these reflects religious freedom in Australia?",
      options: [
        "All religions are required to be registered with the government",
        "Religious laws override Australian laws if there is a conflict",
        "People in Australia are free to follow any religion or no religion"
      ],
      correctAnswer: "People in Australia are free to follow any religion or no religion",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "People in Australia are free to follow any religion or no religion, as long as its practices follow Australian law."
    },
    {
      id: 15,
      text: "Which statement best reflects mutual respect in Australia?",
      options: [
        "People should only respect those who share their views",
        "People should treat each other with dignity and respect",
        "People should avoid others who are different from them"
      ],
      correctAnswer: "People should treat each other with dignity and respect",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, people are expected to treat each other with dignity and respect, regardless of their background, culture, or beliefs."
    },
    {
      id: 16,
      text: "Why is jury service a responsibility of Australian citizenship?",
      options: [
        "It provides employment for citizens",
        "It helps ensure the court system is open and fair",
        "It is a way to meet new people"
      ],
      correctAnswer: "It helps ensure the court system is open and fair",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Jury service is a responsibility of Australian citizenship because it helps ensure that the court system is open and fair."
    },
    {
      id: 17,
      text: "What belief is central to Australia's democratic system?",
      options: [
        "The rights of the individual are less important than the rights of the group",
        "Every individual has equal rights and is equal under the law",
        "Some groups deserve more rights than others"
      ],
      correctAnswer: "Every individual has equal rights and is equal under the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "The belief that every individual has equal rights and is equal under the law is central to Australia's democratic system."
    },
    {
      id: 18,
      text: "What is the voting method used in Australian elections?",
      options: [
        "Voice vote",
        "Show of hands",
        "Secret ballot"
      ],
      correctAnswer: "Secret ballot",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, voting is done by secret ballot, which means that no one watches or knows how you vote."
    },
    {
      id: 19,
      text: "What is meant by the 'dignity and freedom of the individual' in Australia?",
      options: [
        "People can do whatever they want without restrictions",
        "Everyone has value and the freedom to make their own choices within the law",
        "Only citizens have dignity and freedom"
      ],
      correctAnswer: "Everyone has value and the freedom to make their own choices within the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "The 'dignity and freedom of the individual' means everyone has value and the freedom to make their own choices within the law."
    },
    {
      id: 20,
      text: "Why is voting compulsory in Australia?",
      options: [
        "To collect money from fines",
        "To ensure the government always has majority support",
        "To ensure all citizens have a say in who will govern and represent them"
      ],
      correctAnswer: "To ensure all citizens have a say in who will govern and represent them",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Voting is compulsory in Australia to ensure all citizens have a say in who will govern and represent them in parliament."
    }
  ],
  
  // Test 4: Focus on Australian values
  test4: [
    {
      id: 1,
      text: "Which of these is an Australian value?",
      options: [
        "People must follow a particular religion",
        "Men and women are not equal",
        "Mutual respect and tolerance for others"
      ],
      correctAnswer: "Mutual respect and tolerance for others",
      section: "Australian values",
      explanation: "Mutual respect and tolerance for others is an important Australian value."
    },
    {
      id: 2,
      text: "Which statement best reflects Australian values on freedom of speech?",
      options: [
        "The government should control what people can say",
        "People can express their ideas freely, as long as it is within the law",
        "Only popular opinions should be expressed in public"
      ],
      correctAnswer: "People can express their ideas freely, as long as it is within the law",
      section: "Australian values",
      explanation: "Australia values freedom of speech, which means people can express their ideas freely as long as it is within the law."
    },
    {
      id: 3,
      text: "Which statement about gender equality reflects Australian values?",
      options: [
        "Men and women have equal rights and opportunities",
        "Men should be the sole providers for their families",
        "Only men should hold positions of authority"
      ],
      correctAnswer: "Men and women have equal rights and opportunities",
      section: "Australian values",
      explanation: "Australia values gender equality, which means men and women have equal rights and opportunities."
    },
    {
      id: 4,
      text: "Which of these demonstrates the Australian value of 'mateship'?",
      options: [
        "Only helping people from your own country",
        "Helping each other in times of need",
        "Competing against others to be the most successful"
      ],
      correctAnswer: "Helping each other in times of need",
      section: "Australian values",
      explanation: "Mateship in Australia means helping each other, especially in times of need."
    },
    {
      id: 5,
      text: "Which of these reflects Australia's commitment to the Rule of Law?",
      options: [
        "Rich people are treated better under the law",
        "Religious leaders can override the law",
        "Everyone must follow the same laws"
      ],
      correctAnswer: "Everyone must follow the same laws",
      section: "Australian values",
      explanation: "Australia is committed to the Rule of Law, which means everyone must follow the same laws, regardless of their position or background."
    },
    {
      id: 6,
      text: "How should Australians settle disagreements according to Australian values?",
      options: [
        "Through violence",
        "Through peaceful discussion",
        "By avoiding the person they disagree with"
      ],
      correctAnswer: "Through peaceful discussion",
      section: "Australian values",
      explanation: "According to Australian values, disagreements should be settled through peaceful discussion, not violence."
    },
    {
      id: 7,
      text: "What value is reflected by giving everyone a 'fair go'?",
      options: [
        "Everyone should receive welfare payments",
        "Equal opportunity for all people",
        "Everyone should be paid the same wage"
      ],
      correctAnswer: "Equal opportunity for all people",
      section: "Australian values",
      explanation: "The 'fair go' reflects the Australian value of equal opportunity for all people, regardless of their background."
    },
    {id: 8,
      text: "What does the value of 'parliamentary democracy' mean in Australia?",
      options: [
        "The King makes all the laws",
        "Citizens elect representatives to make laws on their behalf",
        "Only judges can make laws"
      ],
      correctAnswer: "Citizens elect representatives to make laws on their behalf",
      section: "Australian values",
      explanation: "Parliamentary democracy means Australian citizens vote for people to represent them in Parliament and make laws on their behalf."
    },
    {
      id: 9,
      text: "Which of these is important in Australian society?",
      options: [
        "Living separately from people of other cultures",
        "Community participation and volunteering",
        "Following only one specific set of beliefs"
      ],
      correctAnswer: "Community participation and volunteering",
      section: "Australian values",
      explanation: "Community participation and volunteering are important in Australian society and reflect Australian values."
    },
    {
      id: 10,
      text: "Which of these reflects Australia's value of respect for the equal worth of each person?",
      options: [
        "Using formal titles when addressing people of high status",
        "Addressing people in a respectful and equal manner",
        "Speaking only to people from your own background"
      ],
      correctAnswer: "Addressing people in a respectful and equal manner",
      section: "Australian values",
      explanation: "In Australia, we value the equal worth of each person and typically address people in a respectful and equal manner."
    },
    {
      id: 11,
      text: "Which of these actions best demonstrates respect for Australian values?",
      options: [
        "Forcing others to follow your religious beliefs",
        "Respecting people's right to express their opinions, even if you disagree with them",
        "Discriminating against people based on their background"
      ],
      correctAnswer: "Respecting people's right to express their opinions, even if you disagree with them",
      section: "Australian values",
      explanation: "Respecting others' right to express their opinions, even if you disagree with them, demonstrates respect for Australian values."
    },
    {
      id: 12,
      text: "What Australian value is reflected in the expectation that everyone will obey the law?",
      options: [
        "Commitment to the Rule of Law",
        "Freedom of religion",
        "Freedom of association"
      ],
      correctAnswer: "Commitment to the Rule of Law",
      section: "Australian values",
      explanation: "The expectation that everyone will obey the law reflects Australia's commitment to the Rule of Law."
    },
    {
      id: 13,
      text: "What does English as the national language mean for Australia?",
      options: [
        "Other languages are not allowed to be spoken",
        "It is an important unifying element in society",
        "All official documents must be in English only"
      ],
      correctAnswer: "It is an important unifying element in society",
      section: "Australian values",
      explanation: "English as the national language is an important unifying element in Australian society, though other languages are also valued."
    },
    {
      id: 14,
      text: "Which of these best describes Australian attitudes towards religion?",
      options: [
        "Australia has one official national religion that everyone must follow",
        "Australia is a secular country with freedom of religion and no official national religion",
        "Religious law is more important than Australian law"
      ],
      correctAnswer: "Australia is a secular country with freedom of religion and no official national religion",
      section: "Australian values",
      explanation: "Australia is a secular country with freedom of religion and no official national religion. People are free to follow any religion as long as its practices follow Australian law."
    },
    {
      id: 15,
      text: "How should citizens respond if they suspect someone is planning to commit a serious crime?",
      options: [
        "Ignore it as it's not their business",
        "Confront the person directly",
        "Report it to the authorities as soon as possible"
      ],
      correctAnswer: "Report it to the authorities as soon as possible",
      section: "Australian values",
      explanation: "In Australia, citizens have responsibilities to help protect society. If you suspect someone is planning to commit a serious crime, you should report it to the authorities as soon as possible."
    },
    {
      id: 16,
      text: "Which of these is NOT an Australian value?",
      options: [
        "Equality of opportunity",
        "Mandatory religious practice",
        "Mutual respect"
      ],
      correctAnswer: "Mandatory religious practice",
      section: "Australian values",
      explanation: "Mandatory religious practice is not an Australian value. Australia values freedom of religion and secular government."
    },
    {
      id: 17,
      text: "What Australian value underpins the expectation that migrants will learn English?",
      options: [
        "The belief that English is superior to other languages",
        "The value of social cohesion and participation in the community",
        "The desire to eliminate all other languages in Australia"
      ],
      correctAnswer: "The value of social cohesion and participation in the community",
      section: "Australian values",
      explanation: "The expectation that migrants will learn English is underpinned by the value of social cohesion and participation in the community."
    },
    {
      id: 18,
      text: "Which of these statements best reflects Australian values about contributing to the community?",
      options: [
        "Only government employees should contribute to the community",
        "Contributing is only necessary during emergencies",
        "All Australians should contribute to the community when they can"
      ],
      correctAnswer: "All Australians should contribute to the community when they can",
      section: "Australian values",
      explanation: "Australia values community contribution and expects that all Australians should contribute to the community when they can."
    },
    {
      id: 19,
      text: "Which of these reflects loyalty to Australia?",
      options: [
        "Prioritizing the interests of your original country over Australia",
        "Upholding and obeying Australian laws",
        "Refusing to participate in Australian society"
      ],
      correctAnswer: "Upholding and obeying Australian laws",
      section: "Australian values",
      explanation: "Loyalty to Australia includes upholding and obeying Australian laws, which all citizens pledge to do."
    },
    {
      id: 20,
      text: "What should you do if you see a child being abused?",
      options: [
        "Ignore it as it's a family matter",
        "Report it to the police to investigate",
        "Wait and see if it happens again"
      ],
      correctAnswer: "Report it to the police to investigate",
      section: "Australian values",
      explanation: "If you see or have knowledge of a child being abused, you should report it to the police to investigate."
    }
  ],
  
  // Test 5: Mixed questions from all sections
  test5: [
    {
      id: 1,
      text: "When was the Commonwealth of Australia formed?",
      options: [
        "1788",
        "1901",
        "1914"
      ],
      correctAnswer: "1901",
      section: "Australia and its people",
      explanation: "On 1 January 1901, the colonies were united into a federation called the Commonwealth of Australia."
    },
    {
      id: 2,
      text: "What is Australia's system of government?",
      options: [
        "Dictatorship",
        "Parliamentary democracy",
        "Communist"
      ],
      correctAnswer: "Parliamentary democracy",
      section: "Government and the law in Australia",
      explanation: "Australia has a parliamentary democracy, which means Australian citizens vote to elect representatives to parliament."
    },
    {
      id: 3,
      text: "Which of these is a key Australian value?",
      options: [
        "Social class distinctions are important",
        "Equality of opportunity for all people",
        "The government controls all media"
      ],
      correctAnswer: "Equality of opportunity for all people",
      section: "Australian values",
      explanation: "Equality of opportunity for all people is a key Australian value. Australia values the 'fair go' for everyone."
    },
    {
      id: 4,
      text: "What is the Rule of Law?",
      options: [
        "Only the police make the laws",
        "The government is not bound by the law",
        "No person is above the law"
      ],
      correctAnswer: "No person is above the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "The Rule of Law means that no person, group or religious rule is above the law. Everyone must follow Australia's laws."
    },
    {
      id: 5,
      text: "What are the colors of the Australian Aboriginal Flag?",
      options: [
        "Green, white and yellow",
        "Black, red and yellow",
        "Blue, white and green"
      ],
      correctAnswer: "Black, red and yellow",
      section: "Australia and its people",
      explanation: "The Australian Aboriginal Flag is black, red and yellow."
    },
    {
      id: 6,
      text: "Who is Australia's Head of State?",
      options: [
        "The Prime Minister",
        "The King of Australia",
        "The Governor-General"
      ],
      correctAnswer: "The King of Australia",
      section: "Government and the law in Australia",
      explanation: "Australia's Head of State is the King of Australia, His Majesty King Charles III."
    },
    {
      id: 7,
      text: "What does freedom of speech mean in Australia?",
      options: [
        "People can say and write whatever they want, even if it breaks the law",
        "People can say and write what they think, within the law",
        "People can only say things that the government agrees with"
      ],
      correctAnswer: "People can say and write what they think, within the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Freedom of speech in Australia means people can say and write what they think, but must still obey Australian laws."
    },
    {
      id: 8,
      text: "How many states and mainland territories does Australia have?",
      options: [
        "8 states and 3 mainland territories",
        "4 states and 2 mainland territories", 
        "6 states and 2 mainland territories"
      ],
      correctAnswer: "6 states and 2 mainland territories",
      section: "Australia and its people",
      explanation: "Australia has 6 states and 2 mainland territories."
    },
    {
      id: 9,
      text: "How are the laws administered in Australia?",
      options: [
        "By the police only",
        "By courts and tribunals",
        "By religious leaders"
      ],
      correctAnswer: "By courts and tribunals",
      section: "Government and the law in Australia",
      explanation: "In Australia, laws are administered by courts and tribunals where judges and magistrates make decisions."
    },
    {
      id: 10,
      text: "Which of these demonstrates the Australian value of 'mateship'?",
      options: [
        "Only helping people from your own country",
        "Helping each other in times of need",
        "Competing against others to be the most successful"
      ],
      correctAnswer: "Helping each other in times of need",
      section: "Australian values",
      explanation: "Mateship in Australia means helping each other, especially in times of need."
    },
    {
      id: 11,
      text: "In Australia's parliamentary democracy, what do citizens do to choose people to represent them?",
      options: [
        "Draw names from a ballot",
        "Vote in elections",
        "Pay a special tax"
      ],
      correctAnswer: "Vote in elections",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia's parliamentary democracy, citizens vote in elections to choose their representatives."
    },
    {
      id: 12,
      text: "What is Australia's national anthem called?",
      options: [
        "God Save the Queen",
        "Waltzing Matilda",
        "Advance Australia Fair"
      ],
      correctAnswer: "Advance Australia Fair",
      section: "Australia and its people",
      explanation: "Australia's national anthem is 'Advance Australia Fair'."
    },
    {
      id: 13,
      text: "What are the three branches of government in Australia?",
      options: [
        "Federal, state and local",
        "Executive, judicial and legislative",
        "The King, the Prime Minister and the Governor-General"
      ],
      correctAnswer: "Executive, judicial and legislative",
      section: "Government and the law in Australia",
      explanation: "The three branches of government in Australia are the executive (to administer laws), judicial (to interpret and apply laws), and legislative (to make laws)."
    },
    {
      id: 14,
      text: "What should you do if you see a child being abused?",
      options: [
        "Ignore it as it's a family matter",
        "Report it to the police to investigate",
        "Wait and see if it happens again"
      ],
      correctAnswer: "Report it to the police to investigate",
      section: "Australian values",
      explanation: "If you see or have knowledge of a child being abused, you should report it to the police to investigate."
    },
    {
      id: 15,
      text: "What belief is central to Australia's democratic system?",
      options: [
        "The rights of the individual are less important than the rights of the group",
        "Every individual has equal rights and is equal under the law",
        "Some groups deserve more rights than others"
      ],
      correctAnswer: "Every individual has equal rights and is equal under the law",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "The belief that every individual has equal rights and is equal under the law is central to Australia's democratic system."
    },
    {
      id: 16,
      text: "What do Australians commemorate on Anzac Day?",
      options: [
        "The arrival of the First Fleet",
        "The landing of the Australian and New Zealand Army Corps at Gallipoli",
        "Federation Day"
      ],
      correctAnswer: "The landing of the Australian and New Zealand Army Corps at Gallipoli",
      section: "Australia and its people",
      explanation: "Anzac Day commemorates the landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey, during World War I on 25 April 1915."
    },
    {
      id: 17,
      text: "What is the primary role of the Federal Government?",
      options: [
        "Local roads and community services",
        "Schools and hospitals",
        "National economy, immigration, and defense"
      ],
      correctAnswer: "National economy, immigration, and defense",
      section: "Government and the law in Australia",
      explanation: "The Federal Government is primarily responsible for matters of national interest such as the national economy, immigration, and defense."
    },
    {
      id: 18,
      text: "What Australian value underpins the expectation that migrants will learn English?",
      options: [
        "The belief that English is superior to other languages",
        "The value of social cohesion and participation in the community",
        "The desire to eliminate all other languages in Australia"
      ],
      correctAnswer: "The value of social cohesion and participation in the community",
      section: "Australian values",
      explanation: "The expectation that migrants will learn English is underpinned by the value of social cohesion and participation in the community."
    },
    {
      id: 19,
      text: "What is the voting method used in Australian elections?",
      options: [
        "Voice vote",
        "Show of hands",
        "Secret ballot"
      ],
      correctAnswer: "Secret ballot",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia, voting is done by secret ballot, which means that no one watches or knows how you vote."
    },
    {
      id: 20,
      text: "Who were the first inhabitants of Australia?",
      options: [
        "British settlers",
        "Aboriginal and Torres Strait Islander peoples",
        "Dutch explorers"
      ],
      correctAnswer: "Aboriginal and Torres Strait Islander peoples",
      section: "Australia and its people",
      explanation: "Aboriginal and Torres Strait Islander peoples were the first inhabitants of Australia and have the oldest continuous cultures in the world."
    }
  ],

  test6: [
    {
      id: 1,
      text: "What is the name of Australia's national flower?",
      options: [
        "Waratah",
        "Golden Wattle",
        "Kangaroo Paw"
      ],
      correctAnswer: "Golden Wattle",
      section: "Australia and its people",
      explanation: "Australia's national flower is the Golden Wattle."
    },
    {
      id: 2,
      text: "When was the Commonwealth of Australia formed?",
      options: [
        "1788",
        "1901",
        "1914"
      ],
      correctAnswer: "1901",
      section: "Australia and its people",
      explanation: "On 1 January 1901, the colonies were united into a federation called the Commonwealth of Australia."
    },
    {
      id: 3,
      text: "What are Australia's national colors?",
      options: [
        "Red, white and blue",
        "Green and gold",
        "Black, red and yellow"
      ],
      correctAnswer: "Green and gold",
      section: "Australia and its people",
      explanation: "Australia's national colors are green and gold, the colors of the golden wattle (Australia's national flower)."
    },
    {
      id: 4,
      text: "What does the value of 'mateship' mean in Australia?",
      options: [
        "Only helping family members",
        "Helping and receiving help from others, especially in difficult times",
        "Working alone without relying on others"
      ],
      correctAnswer: "Helping and receiving help from others, especially in difficult times",
      section: "Australian values",
      explanation: "In Australia, 'mateship' means helping and receiving help from others, especially in difficult times."
    },
    {
      id: 5,
      text: "How is the Governor-General appointed?",
      options: [
        "By a vote of all Australian citizens",
        "By the Australian Parliament",
        "By the King on the advice of the Prime Minister"
      ],
      correctAnswer: "By the King on the advice of the Prime Minister",
      section: "Government and the law in Australia",
      explanation: "The Governor-General is appointed by the King on the advice of the Australian Prime Minister."
    },
    {
      id: 6,
      text: "Which of these is true about the Australian Aboriginal Flag?",
      options: [
        "It represents the Australian Government",
        "It was designed in 1971 and is recognized as an official flag of Australia",
        "It was brought to Australia by the First Fleet"
      ],
      correctAnswer: "It was designed in 1971 and is recognized as an official flag of Australia",
      section: "Australia and its people",
      explanation: "The Australian Aboriginal Flag was designed in 1971 and is recognized as an official flag of Australia."
    },
    {
      id: 7,
      text: "What is the process for changing the Australian Constitution?",
      options: [
        "A decision by the Prime Minister",
        "A vote in Parliament",
        "A referendum requiring a 'double majority'"
      ],
      correctAnswer: "A referendum requiring a 'double majority'",
      section: "Government and the law in Australia",
      explanation: "The Australian Constitution can only be changed by a referendum requiring a 'double majority' - a majority of voters in a majority of states, plus a national majority."
    },
    {
      id: 8,
      text: "What is a key feature of Australia's system of government?",
      options: [
        "Absolute power for the King or Queen",
        "Government power comes from Australian citizens through elections",
        "Rule by military leaders"
      ],
      correctAnswer: "Government power comes from Australian citizens through elections",
      section: "Government and the law in Australia",
      explanation: "A key feature of Australia's system of government is that power comes from Australian citizens, who vote to elect representatives to parliament."
    },
    {
      id: 9,
      text: "What was the Eureka Stockade?",
      options: [
        "The first meeting of the Australian Parliament",
        "A miners' rebellion against government authority in 1854",
        "The first settlement in Western Australia"
      ],
      correctAnswer: "A miners' rebellion against government authority in 1854",
      section: "Australia and its people",
      explanation: "The Eureka Stockade was a miners' rebellion against government authority in 1854, seen as an important event in the development of Australian democracy."
    },
    {
      id: 10,
      text: "Which of these is a responsibility of Australian citizenship?",
      options: [
        "Owning property",
        "Serving on a jury if called to do so",
        "Having a paid job"
      ],
      correctAnswer: "Serving on a jury if called to do so",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "Serving on a jury if called to do so is a responsibility of Australian citizenship."
    },
    {
      id: 11,
      text: "What privilege does an Australian passport provide?",
      options: [
        "Automatic work rights in any country",
        "Free entry to all countries",
        "Re-entering Australia freely"
      ],
      correctAnswer: "Re-entering Australia freely",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "An Australian passport provides the privilege of re-entering Australia freely without the need for a visa."
    },
    {
      id: 12,
      text: "What is the significance of 25 April in Australia?",
      options: [
        "The day the Australian Constitution was signed",
        "Australia Day",
        "Anzac Day, commemorating those who served and died in wars"
      ],
      correctAnswer: "Anzac Day, commemorating those who served and died in wars",
      section: "Australia and its people",
      explanation: "25 April is Anzac Day, which commemorates those who served and died in wars, conflicts and peacekeeping operations."
    },
    {
      id: 13,
      text: "In Australia's parliamentary democracy, citizens elect representatives to:",
      options: [
        "The Supreme Court",
        "Parliament",
        "The monarchy"
      ],
      correctAnswer: "Parliament",
      section: "Australia's democratic beliefs, rights and liberties",
      explanation: "In Australia's parliamentary democracy, citizens elect representatives to Parliament."
    },
    {
      id: 14,
      text: "What is the maximum period between federal elections in Australia?",
      options: [
        "Three years",
        "Four years",
        "Five years"
      ],
      correctAnswer: "Three years",
      section: "Government and the law in Australia",
      explanation: "The maximum period between federal elections in Australia is three years."
    },
    {
      id: 15,
      text: "What are the three branches of government in Australia?",
      options: [
        "Federal, state and local",
        "Executive, legislative and judicial",
        "Republican, democratic and monarchist"
      ],
      correctAnswer: "Executive, legislative and judicial",
      section: "Government and the law in Australia",
      explanation: "The three branches of government in Australia are executive, legislative and judicial."
    },
    {
      id: 16,
      text: "What is meant by the separation of powers in the Australian system of government?",
      options: [
        "The separation of federal and state governments",
        "The division of power between the three branches of government",
        "The separation of church and state"
      ],
      correctAnswer: "The division of power between the three branches of government",
      section: "Government and the law in Australia",
      explanation: "The separation of powers refers to the division of power between the executive, legislative, and judicial branches of government."
    },
    {
      id: 17,
      text: "Which of these is NOT a stated Australian value?",
      options: [
        "Mutual respect and tolerance for others",
        "Freedom of speech within the law",
        "Mandatory religious practice"
      ],
      correctAnswer: "Mandatory religious practice",
      section: "Australian values",
      explanation: "Mandatory religious practice is not an Australian value. Australia values freedom of religion and secular government."
    },
    {
      id: 18,
      text: "What is the Australian electoral system called?",
      options: [
        "First past the post",
        "Preferential voting",
        "Proportional representation"
      ],
      correctAnswer: "Preferential voting",
      section: "Government and the law in Australia",
      explanation: "Australia uses a preferential voting system, where voters rank candidates in order of preference."
    },
    {
      id: 19,
      text: "Who was the first Prime Minister of Australia?",
      options: [
        "Sir Edmund Barton",
        "Sir Henry Parkes",
        "Sir Robert Menzies"
      ],
      correctAnswer: "Sir Edmund Barton",
      section: "Australia and its people",
      explanation: "Sir Edmund Barton was the first Prime Minister of Australia, serving from 1901 to 1903."
    },
    {
      id: 20,
      text: "What does the Commonwealth Star on the Australian flag symbolize?",
      options: [
        "The Southern Cross",
        "Australia's British heritage",
        "The six states and territories of Australia"
      ],
      correctAnswer: "The six states and territories of Australia",
      section: "Australia and its people",
      explanation: "The Commonwealth Star on the Australian flag symbolizes the six states and the territories of Australia."
    }
  ],
  
};

const MockTest = ({ darkMode = false }) => {
  const [currentTest, setCurrentTest] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Initialize questions when test selection changes
  useEffect(() => {
    const testKey = `test${currentTest}`;
    const testQuestions = mockTestData[testKey].map(q => ({...q, answered: null}));
    setQuestions(testQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [currentTest]);
  
  // Initialize question numbers
  const questionNumbers = Array.from({length: questions.length}, (_, i) => i + 1);
  
  // Start timer when test starts
  useEffect(() => {
    let timer;
    if (testStarted && !testCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTestCompleted(true);
    }
    
    return () => clearInterval(timer);
  }, [testStarted, testCompleted, timeLeft]);
  
  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle answer selection
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answered = answer;
    setQuestions(updatedQuestions);
  };
  
  // Jump to a specific question
  const jumpToQuestion = (index) => {
    setCurrentQuestion(index);
    setSelectedAnswer(questions[index].answered);
    setShowExplanation(questions[index].answered !== null);
  };
  
  // Go to next question
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(questions[currentQuestion + 1].answered);
      setShowExplanation(questions[currentQuestion + 1].answered !== null);
    }
  };
  
  // Go to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(questions[currentQuestion - 1].answered);
      setShowExplanation(questions[currentQuestion - 1].answered !== null);
    }
  };
  
  // Complete test
  const completeTest = () => {
    setTestCompleted(true);
  };
  
  // Start the test
  const startTest = () => {
    setTestStarted(true);
    // Reset the timer
    setTimeLeft(45 * 60);
  };
  
  // Reset the test
  const resetTest = () => {
    const testKey = `test${currentTest}`;
    const resetQuestions = mockTestData[testKey].map(q => ({...q, answered: null}));
    setQuestions(resetQuestions);
    setCurrentQuestion(0);
    setTimeLeft(45 * 60);
    setTestCompleted(false);
    setTestStarted(true);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };
  
  // Select a different test
  const selectTest = (testNumber) => {
    setCurrentTest(testNumber);
    setTestStarted(false);
    setTestCompleted(false);
    setTimeLeft(45 * 60);
  };
  
  // Calculate results
  const calculateResults = () => {
    const answeredQuestions = questions.filter(q => q.answered !== null);
    const correctAnswers = questions.filter(q => q.answered === q.correctAnswer);
    
    const totalScore = (correctAnswers.length / questions.length) * 100;
    
    // Group by section
    const sections = [...new Set(questions.map(q => q.section))];
    const sectionResults = sections.map(section => {
      const sectionQuestions = questions.filter(q => q.section === section);
      const sectionCorrect = sectionQuestions.filter(q => q.answered === q.correctAnswer);
      
      return {
        section,
        score: (sectionCorrect.length / sectionQuestions.length) * 100,
        correct: sectionCorrect.length,
        total: sectionQuestions.length
      };
    });
    
    return {
      totalScore: Math.round(totalScore),
      answeredCount: answeredQuestions.length,
      correctCount: correctAnswers.length,
      totalQuestions: questions.length,
      sectionResults,
      passed: totalScore >= 75
    };
  };
  
  // Test selection screen
  if (!testStarted && !testCompleted) {
    return (
      <div className={`max-w-4xl mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg shadow-md p-6`}>
        <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Australian Citizenship Mock Test</h1>
        <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg`}>
          <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Select a Mock Test</h2>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We have 5 different mock tests based on the Australian Citizenship: Our Common Bond resource book.
            Each test focuses on different sections of the content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <button 
              onClick={() => selectTest(1)}
              className={`p-4 rounded-lg border ${
                currentTest === 1 
                  ? `${darkMode ? 'bg-blue-600 border-blue-500' : 'bg-blue-100 border-blue-300'}`
                  : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`
              } text-center`}
            >
              <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Test 1</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Australia and its people</div>
            </button>
            
            <button 
              onClick={() => selectTest(2)}
              className={`p-4 rounded-lg border ${
                currentTest === 2 
                  ? `${darkMode ? 'bg-blue-600 border-blue-500' : 'bg-blue-100 border-blue-300'}`
                  : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`
              } text-center`}
            >
              <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Test 2</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Government and the law</div>
            </button>
            
            <button 
              onClick={() => selectTest(3)}
              className={`p-4 rounded-lg border ${
                currentTest === 3 
                  ? `${darkMode ? 'bg-blue-600 border-blue-500' : 'bg-blue-100 border-blue-300'}`
                  : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`
              } text-center`}
            >
              <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Test 3</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Democratic beliefs and liberties</div>
            </button>
            
            <button 
              onClick={() => selectTest(4)}
              className={`p-4 rounded-lg border ${
                currentTest === 4 
                  ? `${darkMode ? 'bg-blue-600 border-blue-500' : 'bg-blue-100 border-blue-300'}`
                  : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`
              } text-center`}
            >
              <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Test 4</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Australian values</div>
            </button>
            
            <button 
              onClick={() => selectTest(5)}
              className={`p-4 rounded-lg border ${
                currentTest === 5 
                  ? `${darkMode ? 'bg-blue-600 border-blue-500' : 'bg-blue-100 border-blue-300'}`
                  : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`
              } text-center`}
            >
              <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Test 5</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mixed questions (All sections)</div>
            </button>
          </div>
        </div>
        
        <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} rounded-lg`}>
          <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Test Information</h2>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Each mock test consists of 20 questions based on the Australian Citizenship: Our Common Bond resource book.</li>
            <li>You have 45 minutes to complete the test.</li>
            <li>To pass, you need to score at least 75% correct answers (15 out of 20 questions).</li>
            <li>All questions are multiple choice with one correct answer.</li>
            <li>You will see immediate feedback after answering each question.</li>
            <li>You can navigate between questions and change your answers before submitting.</li>
          </ul>
        </div>
        
        <button 
          onClick={startTest}
          className={`w-full py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold rounded-lg transition duration-200`}
        >
          Start Mock Test {currentTest}
        </button>
      </div>
    );
  }
  
  // Display results screen after test is completed
  if (testCompleted) {
    const results = calculateResults();
    
    return (
      <div className={`max-w-4xl mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg shadow-md p-6`}>
        <div className="text-center mb-6">
          <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your Results</h1>
          <div className="inline-block relative w-32 h-32 mb-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={darkMode ? '#4B5563' : '#eee'}
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={results.passed ? '#4ade80' : '#ef4444'}
                strokeWidth="3"
                strokeDasharray={`${results.totalScore}, 100`}
                strokeLinecap="round"
              />
              <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill={results.passed ? "green" : "red"} fontWeight="bold">
                {results.totalScore}%
              </text>
            </svg>
          </div>
          <p className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Target: 75%
          </p>
          <div className={`text-lg font-bold ${results.passed ? 'text-green-500' : 'text-red-500'}`}>
            {results.passed ? 'Congratulations! You Passed the test' : 'You did not pass the test'}
          </div>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            You scored {results.correctCount} out of {results.totalQuestions} questions correctly.
          </p>
        </div>
        
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your Section-wise Result</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.sectionResults.map((section, index) => (
              <div key={index} className={`border rounded-lg p-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
               <h3 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{section.section}</h3>
                <div className="flex items-center">
                  <div className={`w-full rounded-full h-2.5 mr-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-2.5 rounded-full ${section.score >= 75 ? 'bg-blue-600' : 'bg-red-500'}`}
                      style={{ width: `${section.score}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{Math.round(section.score)}%</span>
                </div>
                <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {section.correct} of {section.total} correct
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <button 
            onClick={resetTest}
            className={`w-full py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold rounded-lg transition duration-200`}
          >
            Take Test Again
          </button>
          
          <button 
            onClick={() => {
              setTestCompleted(false);
              setTestStarted(false);
            }}
            className={`w-full py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} font-semibold rounded-lg transition duration-200`}
          >
            Try Different Test
          </button>
        </div>
      </div>
    );
  }
  
  // Main test interface
  return (
    <div className="max-w-4xl mx-auto">
      {/* Test header */}
      <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-700'} text-white p-4 rounded-t-lg`}>
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">
            {currentQuestion + 1}/{questions.length}
          </div>
          
          <div className="text-center">
            <div className="text-sm font-medium">Australian Citizenship Test {currentTest}</div>
          </div>
          
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Question progress bar */}
        <div className="mt-4 grid grid-cols-10 gap-1">
          {questionNumbers.map((num, index) => (
            <button
              key={index}
              onClick={() => jumpToQuestion(index)}
              className={`
                h-8 flex items-center justify-center rounded 
                text-xs font-medium 
                ${currentQuestion === index ? (darkMode ? 'bg-gray-800 text-white' : 'bg-white text-blue-700') : ''}
                ${questions[index].answered !== null 
                  ? (questions[index].answered === questions[index].correctAnswer 
                      ? 'bg-green-600' 
                      : 'bg-red-600') 
                  : (darkMode ? 'bg-blue-800' : 'bg-blue-600')}
              `}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      
      {/* Question and options */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-b-lg shadow-md`}>
        <div className="mb-8">
          <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentQuestion + 1}. {questions[currentQuestion]?.text}</h3>
          
          <div className="space-y-3">
            {questions[currentQuestion]?.options.map((option, index) => (
              <div 
                key={index}
                onClick={() => !showExplanation && handleAnswer(option)}
                className={`
                  p-3 border rounded-md cursor-pointer transition
                  ${showExplanation && option === questions[currentQuestion].correctAnswer 
                    ? (darkMode ? 'border-green-500 bg-green-900' : 'border-green-500 bg-green-50') 
                    : showExplanation && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
                    ? (darkMode ? 'border-red-500 bg-red-900' : 'border-red-500 bg-red-50')
                    : selectedAnswer === option
                    ? (darkMode ? 'border-blue-500 bg-blue-900' : 'border-blue-500 bg-blue-50')
                    : (darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-blue-400')
                  }
                  ${showExplanation && option === questions[currentQuestion].correctAnswer
                    ? (darkMode ? 'text-green-300' : 'text-green-800')
                    : showExplanation && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer
                    ? (darkMode ? 'text-red-300' : 'text-red-800')
                    : darkMode ? 'text-white' : 'text-gray-800'}
                `}
              >
                {option}
                {showExplanation && option === questions[currentQuestion].correctAnswer && (
                  <span className={`ml-2 inline-flex items-center ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                    <Check size={16} className="mr-1" /> Correct
                  </span>
                )}
                {showExplanation && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
                  <span className={`ml-2 inline-flex items-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                    <X size={16} className="mr-1" /> Incorrect
                  </span>
                )}
              </div>
            ))}
          </div>
          
          {/* Explanation after answering */}
          {showExplanation && (
            <div className={`mt-6 p-4 rounded-md ${
              selectedAnswer === questions[currentQuestion].correctAnswer 
                ? (darkMode ? 'bg-green-900 text-green-100 border border-green-700' : 'bg-green-50 text-green-800 border border-green-200')
                : (darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-50 text-gray-800 border border-gray-200')
            }`}>
              <h4 className="font-semibold mb-1">Explanation:</h4>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center px-4 py-2 rounded-md font-medium ${
              currentQuestion === 0 
                ? (darkMode ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-400 cursor-not-allowed')
                : (darkMode ? 'bg-blue-900 text-blue-100 hover:bg-blue-800' : 'bg-blue-100 text-blue-700 hover:bg-blue-200')
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Prev</span>
          </button>
          
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={completeTest}
              className={`flex items-center px-4 py-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md font-medium transition duration-200`}
            >
              <span>Complete Test</span>
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className={`flex items-center px-4 py-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md font-medium transition duration-200`}
            >
              <span>Next</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTest;