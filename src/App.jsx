import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-blue-600">Testing Tailwind CSS</h1>
        <p className="mt-2 text-gray-600">
          If you see this styled with blue headings and gray text, Tailwind CSS is working!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;