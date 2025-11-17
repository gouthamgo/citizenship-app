import React from 'react';
import { BookOpen, Mail, Shield, FileText } from 'lucide-react';

export default function AboutPage({ darkMode }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-8`}>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={32} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About CitizenTest.au
          </h1>
        </div>

        <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          <p className="text-lg">
            CitizenTest.au is a free, comprehensive platform designed to help you prepare for the Australian Citizenship Test with confidence.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Mission
          </h2>
          <p>
            We believe that becoming an Australian citizen is an important milestone, and proper preparation is key to success. Our platform provides:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Complete coverage of all official test topics from "Australian Citizenship: Our Common Bond"</li>
            <li>Over 120+ practice questions with detailed explanations</li>
            <li>6 full mock tests simulating the real test experience</li>
            <li>Gamified learning to keep you motivated and engaged</li>
            <li>Daily challenges to build consistent study habits</li>
            <li>Progress tracking to monitor your readiness</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            How It Works
          </h2>
          <p>
            Our platform uses gamification to make learning engaging and effective:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>XP System:</strong> Earn experience points for every correct answer</li>
            <li><strong>10 Levels:</strong> Progress from Newcomer to Citizenship Expert</li>
            <li><strong>Achievement Badges:</strong> Unlock 10 different achievements</li>
            <li><strong>Streak Tracking:</strong> Build daily study habits</li>
            <li><strong>Daily Challenge:</strong> 5 new questions every day</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About the Test
          </h2>
          <p>
            The Australian Citizenship Test is a computer-based test consisting of 20 multiple-choice questions. To pass, you must:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Answer at least 15 out of 20 questions correctly (75%)</li>
            <li>Answer all 5 questions about Australian values correctly</li>
            <li>Complete the test within 45 minutes</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Free & Open Source
          </h2>
          <p>
            CitizenTest.au is completely free to use. No registration required, no hidden fees, no data collection beyond what's needed for the app to function (stored locally in your browser).
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Us
          </h2>
          <p>
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className={`flex items-center gap-2 mt-4 p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
            <Mail size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <a href="mailto:contact@citizentest.au" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium`}>
              contact@citizentest.au
            </a>
          </div>

          <div className={`mt-8 p-6 rounded-lg border-l-4 border-yellow-500 ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
              <strong>Disclaimer:</strong> This platform is not affiliated with the Australian Government. It is an independent study tool created to help people prepare for the citizenship test. Always refer to official government resources for the most up-to-date information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
