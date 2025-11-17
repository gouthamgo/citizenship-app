import React from 'react';
import { Shield, Database, Eye, Lock } from 'lucide-react';

export default function PrivacyPage({ darkMode }) {
  return (
    <div className="space-y-8">
      <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-8`}>
        <div className="flex items-center gap-3 mb-6">
          <Shield size={32} className={darkMode ? 'text-green-400' : 'text-green-600'} />
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Privacy Policy
          </h1>
        </div>

        <p className={`text-sm mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'} border-l-4 border-green-500`}>
            <h2 className={`text-xl font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Lock size={24} className="text-green-500" />
              Your Privacy Matters
            </h2>
            <p className={darkMode ? 'text-green-200' : 'text-green-800'}>
              CitizenTest.au is committed to protecting your privacy. We do not collect, store, or share any personal information. Everything happens locally in your browser.
            </p>
          </div>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            1. Information We Collect
          </h2>

          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            None. Zero. Nada.
          </h3>
          <p>
            We do not collect any personal information. No email addresses, no names, no phone numbers, no tracking data.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            2. Local Storage
          </h2>
          <p>
            Your study progress, quiz scores, achievements, and preferences are stored <strong>locally in your browser</strong> using localStorage. This data:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Never leaves your device</li>
            <li>Is not sent to any server</li>
            <li>Is not accessible to us or anyone else</li>
            <li>Can be deleted by clearing your browser data</li>
          </ul>

          <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-gray-750' : 'bg-gray-100'}`}>
            <h4 className={`font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Database size={20} />
              What's stored locally:
            </h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>citizenship-progress</code> - Your study progress</li>
              <li><code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>citizenship-user-profile</code> - XP, levels, achievements</li>
              <li><code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>citizenship-dark-mode</code> - Theme preference</li>
              <li><code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>citizenship-onboarding-complete</code> - Tutorial status</li>
              <li><code className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>daily-challenge</code> - Daily challenge progress</li>
            </ul>
          </div>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            3. Cookies
          </h2>
          <p>
            We do not use cookies. Period.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            4. Analytics & Tracking
          </h2>
          <p>
            We do not use Google Analytics, Facebook Pixel, or any other tracking software. We have no idea who uses this site, and we like it that way.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            5. Third-Party Services
          </h2>
          <p>
            This website does not integrate with any third-party services that collect data. The only external links are to official Australian Government resources.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            6. Data Security
          </h2>
          <p>
            Since all data is stored locally in your browser, the security depends on your device's security. We recommend:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Using a secure, updated browser</li>
            <li>Keeping your device protected with passwords/biometrics</li>
            <li>Being cautious when using public computers</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            7. Children's Privacy
          </h2>
          <p>
            This service is suitable for users of all ages preparing for Australian citizenship. Since we don't collect any data, there are no special privacy concerns for children.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            8. Changes to This Policy
          </h2>
          <p>
            If we ever change this policy (which is unlikely since we don't collect data), we'll update the date at the top and notify users prominently on the site.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            9. Your Rights
          </h2>
          <p>
            You have complete control over your data:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Access:</strong> All your data is in your browser's localStorage (F12 → Application → Local Storage)</li>
            <li><strong>Delete:</strong> Clear your browser data to delete everything</li>
            <li><strong>Export:</strong> Copy your localStorage data to back it up</li>
            <li><strong>Control:</strong> You decide what stays and what goes</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            10. Contact
          </h2>
          <p>
            Have questions about privacy? Contact us at <a href="mailto:privacy@citizentest.au" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium`}>privacy@citizentest.au</a>
          </p>

          <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border-l-4 border-blue-500`}>
            <h3 className={`font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Eye size={20} className="text-blue-500" />
              Summary
            </h3>
            <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
              <strong>TL;DR:</strong> We don't collect any data. Everything is stored locally in your browser. You're in complete control. We can't see what you do, and we like it that way. Study in peace! 🇦🇺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
