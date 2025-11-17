import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

export default function TermsPage({ darkMode }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-8`}>
        <div className="flex items-center gap-3 mb-6">
          <FileText size={32} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Terms of Service
          </h1>
        </div>

        <p className={`text-sm mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using CitizenTest.au ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            2. Description of Service
          </h2>
          <p>
            CitizenTest.au is a free study platform designed to help users prepare for the Australian Citizenship Test. The Service provides:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Study materials based on official government resources</li>
            <li>Practice quizzes and mock tests</li>
            <li>Gamified learning features (XP, levels, achievements)</li>
            <li>Progress tracking and analytics</li>
            <li>Daily challenges</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            3. Use of the Service
          </h2>
          <p>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use the Service in any way that violates any applicable law or regulation</li>
            <li>Attempt to interfere with or disrupt the Service</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Use automated means to access the Service without permission</li>
            <li>Reproduce, modify, or distribute the Service's content without permission</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            4. Intellectual Property
          </h2>
          <p>
            The Service and its original content (excluding government materials), features, and functionality are owned by CitizenTest.au and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p className="mt-4">
            Study materials are based on the official Australian Government resource "Australian Citizenship: Our Common Bond," which is Crown Copyright.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            5. Disclaimer of Warranties
          </h2>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} border-l-4 border-yellow-500`}>
            <h3 className={`font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <AlertCircle size={20} className="text-yellow-500" />
              Important Disclaimer
            </h3>
            <div className={`text-sm space-y-2 ${darkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>
              <p>
                <strong>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong>
              </p>
              <p>
                CitizenTest.au is NOT affiliated with, endorsed by, or officially connected with the Australian Government or the Department of Home Affairs.
              </p>
              <p>
                This Service is an independent study tool. While we strive for accuracy, we make no guarantees about:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>The accuracy or completeness of the content</li>
                <li>Your success on the actual citizenship test</li>
                <li>The Service's availability or reliability</li>
                <li>Freedom from errors or bugs</li>
              </ul>
            </div>
          </div>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            6. Official Resources
          </h2>
          <p>
            You should always:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Consult official government resources at <a href="https://immi.homeaffairs.gov.au/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium`}>immi.homeaffairs.gov.au</a></li>
            <li>Read the official resource book "Australian Citizenship: Our Common Bond"</li>
            <li>Verify any information with official sources</li>
            <li>Check the latest test requirements before scheduling your test</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            7. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, CitizenTest.au shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Loss of data or progress</li>
            <li>Failure to pass the citizenship test</li>
            <li>Interruption of service</li>
            <li>Errors or inaccuracies in content</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            8. User Responsibility
          </h2>
          <p>
            You are solely responsible for:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Your study and preparation for the citizenship test</li>
            <li>Verifying information with official sources</li>
            <li>Backing up your progress (if desired)</li>
            <li>Your device's security and browser data</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            9. Free Service
          </h2>
          <p>
            The Service is provided completely free of charge. We reserve the right to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Modify, suspend, or discontinue the Service at any time</li>
            <li>Change these Terms of Service with notice</li>
            <li>Add or remove features</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            10. Open Source
          </h2>
          <p>
            This project is open source and available on GitHub. Contributions, suggestions, and improvements are welcome.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            11. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            12. Changes to Terms
          </h2>
          <p>
            We may update these Terms from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Continued use of the Service after changes constitutes acceptance of the new Terms.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            13. Contact
          </h2>
          <p>
            Questions about these Terms? Contact us at <a href="mailto:legal@citizentest.au" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium`}>legal@citizentest.au</a>
          </p>

          <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'} border-l-4 border-green-500`}>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Commitment
            </h3>
            <p className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
              CitizenTest.au is committed to providing a free, privacy-respecting, helpful study tool for Australian citizenship test preparation. We want you to succeed! Good luck with your citizenship journey! 🇦🇺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
