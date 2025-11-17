import { Flag, BookOpen, Landmark, Heart } from 'lucide-react';

export const SECTIONS = [
    {
      id: 'part1',
      title: 'Part 1: Australia and its people',
      icon: Flag,
      description: 'Learn about Australian history, culture, symbols, and traditions',
      subsections: [
        { id: 'aboriginal', title: 'Aboriginal and Torres Strait Islander peoples', description: 'The original inhabitants of Australia', completed: false },
        { id: 'european', title: 'Early days of European settlement', description: 'The arrival of the First Fleet and early colonial history', completed: false },
        { id: 'nation', title: 'The nation of Australia', description: 'How Australia became a nation', completed: false },
        { id: 'states', title: 'Australia\'s states and territories', description: 'The six states and territories of Australia', completed: false },
        { id: 'traditions', title: 'Traditions', description: 'Australian cultural traditions and celebrations', completed: false },
        { id: 'important-days', title: 'Important days for Australians', description: 'National holidays and commemorative days', completed: false },
        { id: 'flags', title: 'Australia\'s flags', description: 'The national flag and other important flags', completed: false },
        { id: 'symbols', title: 'Australia\'s symbols', description: 'National symbols including coat of arms and emblems', completed: false },
        { id: 'anthem', title: 'Australia\'s national anthem', description: 'Advance Australia Fair and its significance', completed: false },
      ]
    },
    {
      id: 'part2',
      title: 'Part 2: Australia\'s democratic beliefs, rights and liberties',
      icon: BookOpen,
      description: 'Understand Australian values, freedoms, and citizen responsibilities',
      subsections: [
        { id: 'democratic-beliefs', title: 'Our democratic beliefs', description: 'The principles of Australian democracy', completed: false },
        { id: 'freedoms', title: 'Our freedoms', description: 'Rights and freedoms protected by Australian law', completed: false },
        { id: 'equalities', title: 'Our equalities', description: 'Equal rights and fair treatment for all', completed: false },
        { id: 'responsibilities', title: 'Responsibilities and privileges of Australian citizenship', description: 'What it means to be an Australian citizen', completed: false },
      ]
    },
    {
      id: 'part3',
      title: 'Part 3: Government and the law in Australia',
      icon: Landmark,
      description: 'Explore how Australian government works and the legal system',
      subsections: [
        { id: 'how-say', title: 'How do I have my say?', description: 'Participating in Australian democracy', completed: false },
        { id: 'system-gov', title: 'How did we establish our system of government?', description: 'The Australian Constitution and Federation', completed: false },
        { id: 'power-control', title: 'How is the power of government controlled?', description: 'Separation of powers and checks and balances', completed: false },
        { id: 'head-state', title: 'Who is Australia\'s Head of State?', description: 'The role of the Monarch and Governor-General', completed: false },
        { id: 'leaders', title: 'Who are some of Australia\'s leaders?', description: 'Prime Minister, Ministers, and other leaders', completed: false },
        { id: 'how-governed', title: 'How is Australia governed?', description: 'Federal, state, and local government', completed: false },
        { id: 'laws-made', title: 'How are laws made?', description: 'The legislative process in Australia', completed: false },
        { id: 'laws-enforced', title: 'How are laws enforced?', description: 'Police, courts, and the justice system', completed: false },
      ]
    },
    {
      id: 'part4',
      title: 'Part 4: Australian values',
      icon: Heart,
      description: 'Australian values and community life',
      subsections: [
        { id: 'values', title: 'Australian values', description: 'Core values of Australian society', completed: false },
        { id: 'community', title: 'Our community', description: 'Community participation and contribution', completed: false },
      ]
    },
  ];