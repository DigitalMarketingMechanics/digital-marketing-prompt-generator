export default function PromptCard({ prompt }) {
  return (
    <div className="mt-8 bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
      <h2 className="text-xl font-semibold text-purple-600 mb-2">{prompt.category}</h2>
      <p className="text-gray-800 whitespace-pre-line">{prompt.prompt}</p>
    </div>
  );
}
