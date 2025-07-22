import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 font-sans bg-gradient-to-br from-blue-50 to-purple-100">

      {/* 🧠 Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-3">
          <Image src="/Azania-logo.png" alt="Azania Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-blue-900">Azania Learning Hub</h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-blue-800">
          <Link href="/">Home</Link>
          <Link href="/question-papers">Past Papers</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/social-media">Our Social Media</Link>
        </nav>
        <div>
  <a
    href="https://classroom.google.com/c/YOUR_CLASS_CODE"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
  >
    Join Our Classroom
  </a>
</div>
      </header>

      {/* 📚 Hero Section */}
      <section
        className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>
        <div className="relative z-10 px-6 text-white max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
            Empowering Learning Across Africa
          </h2>
          <p className="text-lg mb-4 drop-shadow-md">
            Access thousands of past papers, curated notes, and engaging videos—all in one place.
          </p>
          <div className="space-x-4">
            <Link href="/resources">
              <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 shadow-lg">
                Explore Resources
              </button>
            <a
  href="https://classroom.google.com/c/YOUR_CLASS_CODE"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 shadow-lg">
    Join Classroom
  </button>
</a>
          </div>
        </div>
      </section>

      {/* 📁 Content Sections */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-white">
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-blue-800 mb-2">📄 Past Papers</h3>
    <p>Filter by subject, grade level, and exam board.</p>
    <Link href="/question-papers">
      <button className="mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">
        Browse All Papers
      </button>
    </Link>
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-purple-800 mb-2">📝 Study Notes</h3>
    <p>Organized by topic. Includes PDFs, text & slides. Featuring top contributors.</p>
    <button className="mt-4 bg-purple-100 text-purple-800 px-4 py-2 rounded hover:bg-purple-200">
      Browse Notes
    </button>
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-pink-800 mb-2">🎥 Educational Videos</h3>
    <p>Watch recent uploads. Filter by subject and grade.</p>
    <button className="mt-4 bg-pink-100 text-pink-800 px-4 py-2 rounded hover:bg-pink-200">
      Watch Videos
    </button>
  </div>
</section>

      {/* 💬 Why Azania Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Azania?</h3>
        <p className="max-w-3xl mx-auto text-blue-700 mb-6">
          Hear from real learners and educators who use Azania every day.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded shadow">&quot;This platform changed how I study!&quot; – Amina, Grade 12</div>
          <div className="bg-blue-50 p-4 rounded shadow">&quot;Clear notes and real exam papers.&quot; – Thabo, Teacher</div>
          <div className="bg-blue-50 p-4 rounded shadow">&quot;I passed thanks to Azania!&quot; – Lerato, University Student</div>
        </div>
        <div className="mt-8 text-blue-800 font-semibold">
          📈 50,000+ Downloads | 20+ Subjects | Community of 10,000+ Learners
        </div>
      </section>

      {/* 📞 Footer */}
      <footer className="bg-blue-900 text-white px-6 py-8 mt-12">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/question-papers">Past Papers</Link></li>
              <li><Link href="/notes">Notes</Link></li>
              <li><Link href="/videos">Videos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-black rounded mb-2"
            />
            <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-blue-200">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-sm">&copy; 2025 Azania Learning Hub. All rights reserved.</div>
      </footer>
    </div>
  );
}
