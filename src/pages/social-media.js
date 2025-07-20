export default function SocialMedia() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">🌍 Our Social Media</h1>
      <p className="text-lg mb-6 text-gray-700">
        Stay connected and follow us on social media for the latest updates, free resources, and learning tips.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <a href="https://facebook.com/YourPage" target="_blank" className="bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          📘 Facebook
        </a>
        <a href="https://instagram.com/YourPage" target="_blank" className="bg-pink-100 p-4 rounded shadow hover:bg-pink-200">
          📸 Instagram
        </a>
        <a href="https://twitter.com/YourPage" target="_blank" className="bg-blue-50 p-4 rounded shadow hover:bg-blue-100">
          🐦 Twitter (X)
        </a>
        <a href="https://wa.me/YourNumber" target="_blank" className="bg-green-100 p-4 rounded shadow hover:bg-green-200">
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}