import { useState } from 'react';
import { marketingPrompts } from './data/marketingPrompts';
import PromptCard from './components/PromptCard';

export default function App() {
  const [selected, setSelected] = useState(null);

  const getRandomPrompt = () => {
    const random = marketingPrompts[Math.floor(Math.random() * marketingPrompts.length)];
    setSelected(random);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6 text-purple-800">Digital Marketing Prompt Generator</h1>
      <button
        onClick={getRandomPrompt}
        className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition"
      >
        Generate Prompt
      </button>

      {selected && <PromptCard prompt={selected} />}
    </div>
  );
}