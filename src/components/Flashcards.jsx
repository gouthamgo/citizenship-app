import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw, ChevronLeft, ChevronRight, Shuffle, Check, X,
  BookOpen, Flag, Scale, Heart, Trophy, ArrowLeft
} from 'lucide-react';

const FLASHCARD_SETS = {
  'australian-values': {
    title: 'Australian Values (CRITICAL)',
    icon: Heart,
    color: 'red',
    description: 'You MUST get all values questions correct to pass!',
    cards: [
      {
        front: 'What are the core Australian values?',
        back: 'Freedom, Respect, Equality, Democracy, and Rule of Law. These form the foundation of Australian society.'
      },
      {
        front: 'What does "Parliamentary Democracy" mean in Australia?',
        back: 'Australian citizens vote to elect representatives to make laws and decisions on their behalf in Parliament.'
      },
      {
        front: 'What is the "Rule of Law"?',
        back: 'Everyone in Australia must obey the law, including government officials. No one is above the law.'
      },
      {
        front: 'What does "Equality" mean in Australian society?',
        back: 'All people are equal before the law and have equal opportunities, regardless of background, gender, or religion.'
      },
      {
        front: 'What is "Freedom of Speech" in Australia?',
        back: 'People can express their views within the law, but speech that incites violence or hatred is prohibited.'
      },
      {
        front: 'What is "Freedom of Religion"?',
        back: 'Everyone can practice any religion they choose, or no religion at all, without government interference.'
      },
      {
        front: 'What does "Mutual Respect" mean?',
        back: 'Treating all people with dignity and respect, regardless of their differences in culture, religion, or background.'
      },
      {
        front: 'What is Australia\'s commitment to a "Fair Go"?',
        back: 'Everyone deserves a fair chance and equal opportunity to succeed, regardless of their background.'
      }
    ]
  },
  'history': {
    title: 'Australian History',
    icon: Flag,
    color: 'blue',
    description: 'Key historical events and facts',
    cards: [
      {
        front: 'When did the First Fleet arrive in Australia?',
        back: '26 January 1788. This marks the beginning of European settlement in Australia.'
      },
      {
        front: 'Who were the first inhabitants of Australia?',
        back: 'Aboriginal and Torres Strait Islander peoples, who have lived in Australia for over 65,000 years.'
      },
      {
        front: 'When did Australia become a nation?',
        back: '1 January 1901, when the six colonies federated to form the Commonwealth of Australia.'
      },
      {
        front: 'What is the significance of ANZAC Day?',
        back: 'Commemorates Australian and New Zealand Army Corps landing at Gallipoli on 25 April 1915. Honours all who served and died in wars.'
      },
      {
        front: 'What are Australia\'s national colors?',
        back: 'Green and gold, representing Australia\'s landscape and golden wattle (national flower).'
      },
      {
        front: 'When did Aboriginal and Torres Strait Islander peoples gain the right to vote federally?',
        back: '1962. They were granted full voting rights in all Australian federal elections.'
      },
      {
        front: 'What is the significance of the 1967 Referendum?',
        back: 'Over 90% of Australians voted to count Aboriginal and Torres Strait Islander peoples in the census and allow the Commonwealth to make laws for them.'
      }
    ]
  },
  'government': {
    title: 'Government & Law',
    icon: Scale,
    color: 'green',
    description: 'How Australia is governed',
    cards: [
      {
        front: 'Who is Australia\'s Head of State?',
        back: 'The King of Australia (currently King Charles III), represented in Australia by the Governor-General.'
      },
      {
        front: 'Who is the head of the Australian Government?',
        back: 'The Prime Minister, who is the leader of the political party or coalition with majority support in the House of Representatives.'
      },
      {
        front: 'What are the three levels of government in Australia?',
        back: 'Federal (Commonwealth), State/Territory, and Local (Council) governments, each with different responsibilities.'
      },
      {
        front: 'What is the Australian Constitution?',
        back: 'The set of rules by which Australia is governed. It came into effect on 1 January 1901 and can only be changed by referendum.'
      },
      {
        front: 'What are the two houses of federal Parliament?',
        back: 'The House of Representatives (lower house) and the Senate (upper house).'
      },
      {
        front: 'Who has the power to make laws in Australia?',
        back: 'The Australian Parliament (elected representatives). Laws must pass through both houses and receive Royal Assent.'
      },
      {
        front: 'What is the "Separation of Powers"?',
        back: 'Division of government into three branches: Legislature (makes laws), Executive (implements laws), and Judiciary (interprets laws).'
      },
      {
        front: 'How often must federal elections be held?',
        back: 'At least every 3 years for the House of Representatives. Senators serve 6-year terms.'
      },
      {
        front: 'Is voting compulsory in Australia?',
        back: 'Yes, for Australian citizens aged 18 and over. You can be fined if you don\'t vote without a valid reason.'
      }
    ]
  },
  'symbols': {
    title: 'Australian Symbols',
    icon: BookOpen,
    color: 'purple',
    description: 'National symbols and traditions',
    cards: [
      {
        front: 'What is on the Australian Coat of Arms?',
        back: 'A kangaroo and an emu holding a shield with state badges, supported by golden wattle. The kangaroo and emu cannot walk backwards, symbolizing progress.'
      },
      {
        front: 'What is Australia\'s national anthem?',
        back: 'Advance Australia Fair. It became the official anthem in 1984, replacing God Save the Queen.'
      },
      {
        front: 'What is the Commonwealth Star on the Australian flag?',
        back: 'A seven-pointed star representing the unity of the six states and territories. Each point represents a state or territory.'
      },
      {
        front: 'What is the significance of the Southern Cross on the flag?',
        back: 'The constellation visible in the Southern Hemisphere, representing Australia\'s geographic position.'
      },
      {
        front: 'What are the colors of the Aboriginal flag?',
        back: 'Black (Aboriginal people), Red (earth/ochre), and Yellow (sun/life giver).'
      },
      {
        front: 'What do the Torres Strait Islander flag colors represent?',
        back: 'Green (land), Blue (sea), Black (people), White (peace), and the Dhari (headdress) represents Torres Strait Islanders.'
      }
    ]
  }
};

export default function Flashcards({ darkMode }) {
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState(new Set());
  const [unknownCards, setUnknownCards] = useState(new Set());
  const [shuffledCards, setShuffledCards] = useState([]);
  const [studyMode, setStudyMode] = useState('all'); // 'all', 'unknown'

  const currentSet = selectedSet ? FLASHCARD_SETS[selectedSet] : null;

  useEffect(() => {
    if (currentSet) {
      resetCards();
    }
  }, [selectedSet]);

  const resetCards = () => {
    if (currentSet) {
      setShuffledCards([...currentSet.cards]);
      setCurrentCardIndex(0);
      setIsFlipped(false);
      setKnownCards(new Set());
      setUnknownCards(new Set());
    }
  };

  const shuffleCards = () => {
    if (currentSet) {
      const cards = studyMode === 'unknown' && unknownCards.size > 0
        ? currentSet.cards.filter((_, idx) => unknownCards.has(idx))
        : [...currentSet.cards];

      const shuffled = cards.sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled);
      setCurrentCardIndex(0);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const markAsKnown = () => {
    const originalIndex = currentSet.cards.findIndex(c => c === shuffledCards[currentCardIndex]);
    setKnownCards(new Set([...knownCards, originalIndex]));
    unknownCards.delete(originalIndex);
    setUnknownCards(new Set(unknownCards));
    if (currentCardIndex < shuffledCards.length - 1) {
      handleNext();
    }
  };

  const markAsUnknown = () => {
    const originalIndex = currentSet.cards.findIndex(c => c === shuffledCards[currentCardIndex]);
    setUnknownCards(new Set([...unknownCards, originalIndex]));
    knownCards.delete(originalIndex);
    setKnownCards(new Set(knownCards));
    if (currentCardIndex < shuffledCards.length - 1) {
      handleNext();
    }
  };

  const getColorClasses = (color, type = 'bg') => {
    const colors = {
      red: type === 'bg' ? 'from-red-900/40 to-pink-900/40 border-red-700/50' : 'text-red-400',
      blue: type === 'bg' ? 'from-blue-900/40 to-blue-800/40 border-blue-700/50' : 'text-blue-400',
      green: type === 'bg' ? 'from-green-900/40 to-green-800/40 border-green-700/50' : 'text-green-400',
      purple: type === 'bg' ? 'from-purple-900/40 to-purple-800/40 border-purple-700/50' : 'text-purple-400'
    };
    return colors[color] || colors.blue;
  };

  if (!selectedSet) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Flashcards</h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Quick and effective way to memorize key facts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(FLASHCARD_SETS).map(([key, set]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedSet(key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl text-left transition-all duration-200 border-2 ${
                darkMode
                  ? `bg-gradient-to-br ${getColorClasses(set.color, 'bg')}`
                  : 'bg-white border-gray-200 hover:border-gray-400'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                darkMode ? `bg-${set.color}-800` : `bg-${set.color}-100`
              }`}>
                <set.icon size={28} className={getColorClasses(set.color, 'text')} />
              </div>
              <h3 className="text-xl font-bold mb-2">{set.title}</h3>
              <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {set.description}
              </p>
              <div className={`text-sm font-medium ${getColorClasses(set.color, 'text')}`}>
                {set.cards.length} flashcards
              </div>
              {key === 'australian-values' && (
                <div className="mt-3 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-xs font-bold text-red-400">
                  ⚠️ CRITICAL FOR TEST
                </div>
              )}
            </motion.button>
          ))}
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-blue-900/20 border border-blue-700/50' : 'bg-blue-50 border border-blue-200'}`}>
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <Trophy size={20} className="text-blue-500" />
            How to Use Flashcards
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>• Click a flashcard set to start studying</li>
            <li>• Read the question and try to answer it in your head</li>
            <li>• Click the card to flip and check your answer</li>
            <li>• Mark if you knew it (✓) or need more practice (✗)</li>
            <li>• Review unknown cards until you master them all!</li>
          </ul>
        </div>
      </div>
    );
  }

  const currentCard = shuffledCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / shuffledCards.length) * 100;
  const masteryProgress = currentSet ? (knownCards.size / currentSet.cards.length) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedSet(null)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          <ArrowLeft size={20} />
          Back to Sets
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={shuffleCards}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode ? 'bg-purple-900/40 hover:bg-purple-800/40 border border-purple-700/50' : 'bg-purple-100 hover:bg-purple-200'
            } transition-colors`}
          >
            <Shuffle size={20} />
            Shuffle
          </button>

          <button
            onClick={resetCards}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode ? 'bg-blue-900/40 hover:bg-blue-800/40 border border-blue-700/50' : 'bg-blue-100 hover:bg-blue-200'
            } transition-colors`}
          >
            <RotateCcw size={20} />
            Reset
          </button>
        </div>
      </div>

      {/* Set Info */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-lg ${darkMode ? `bg-${currentSet.color}-900/40` : `bg-${currentSet.color}-100`}`}>
            <currentSet.icon size={24} className={getColorClasses(currentSet.color, 'text')} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{currentSet.title}</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {currentSet.description}
            </p>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Current Progress</span>
              <span className="font-bold">{currentCardIndex + 1} / {shuffledCards.length}</span>
            </div>
            <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Mastery</span>
              <span className="font-bold text-green-500">{knownCards.size} / {currentSet.cards.length} known</span>
            </div>
            <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
              <div
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${masteryProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Study Mode Selector */}
        {unknownCards.size > 0 && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => { setStudyMode('all'); shuffleCards(); }}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                studyMode === 'all'
                  ? 'bg-blue-600 text-white'
                  : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All Cards ({currentSet.cards.length})
            </button>
            <button
              onClick={() => { setStudyMode('unknown'); shuffleCards(); }}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                studyMode === 'unknown'
                  ? 'bg-orange-600 text-white'
                  : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Review Unknown ({unknownCards.size})
            </button>
          </div>
        )}
      </div>

      {/* Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCardIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="perspective-1000"
        >
          <motion.div
            className="relative min-h-[400px] cursor-pointer"
            onClick={handleFlip}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div
              className={`absolute inset-0 backface-hidden rounded-2xl p-8 border-4 ${
                darkMode
                  ? `bg-gradient-to-br ${getColorClasses(currentSet.color, 'bg')}`
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-300'
              } flex items-center justify-center`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-center">
                <div className={`text-sm font-bold mb-4 ${getColorClasses(currentSet.color, 'text')}`}>
                  QUESTION
                </div>
                <p className="text-2xl font-bold">{currentCard.front}</p>
                <div className={`mt-8 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Click to reveal answer
                </div>
              </div>
            </div>

            {/* Back */}
            <div
              className={`absolute inset-0 backface-hidden rounded-2xl p-8 border-4 ${
                darkMode
                  ? 'bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-700/50'
                  : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300'
              } flex items-center justify-center`}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-center">
                <div className="text-sm font-bold mb-4 text-green-500">
                  ANSWER
                </div>
                <p className="text-xl leading-relaxed">{currentCard.back}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            currentCardIndex === 0
              ? 'opacity-50 cursor-not-allowed'
              : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex gap-3"
          >
            <button
              onClick={markAsUnknown}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              <X size={20} />
              Need Practice
            </button>
            <button
              onClick={markAsKnown}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white transition-colors"
            >
              <Check size={20} />
              I Know This
            </button>
          </motion.div>
        )}

        <button
          onClick={handleNext}
          disabled={currentCardIndex === shuffledCards.length - 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            currentCardIndex === shuffledCards.length - 1
              ? 'opacity-50 cursor-not-allowed'
              : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Completion Message */}
      {knownCards.size === currentSet.cards.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 text-center"
        >
          <Trophy size={48} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-bold mb-2">Congratulations! 🎉</h3>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
            You've mastered all {currentSet.cards.length} flashcards in this set!
          </p>
          <button
            onClick={resetCards}
            className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            Study Again
          </button>
        </motion.div>
      )}
    </div>
  );
}
