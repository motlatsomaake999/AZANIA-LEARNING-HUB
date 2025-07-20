export default function QuestionPapers() {
  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">📄 Past Exam Papers</h1>

      {/* FET PHASE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-purple-800 mb-2">FET PHASE</h2>
        
        <div className="ml-4 mb-4">
          <h3 className="text-lg font-semibold text-blue-700">Physical Sciences</h3>
          <ul className="list-disc pl-6">
            <li>Grade 10</li>
            <li>Grade 11</li>
            <li>Grade 12</li>
          </ul>
        </div>

        <div className="ml-4 mb-4">
          <h3 className="text-lg font-semibold text-blue-700">Mathematics</h3>
          <ul className="list-disc pl-6">
            <li>Grade 10</li>
            <li>Grade 11</li>
            <li>Grade 12</li>
          </ul>
        </div>
      </section>

      {/* SENIOR PHASE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-green-800 mb-2">SENIOR PHASE</h2>

        <div className="ml-4 mb-4">
          <h3 className="text-lg font-semibold text-green-700">Natural Sciences</h3>
          <ul className="list-disc pl-6">
            <li>Grade 7</li>
            <li>Grade 8</li>
            <li>Grade 9</li>
          </ul>
        </div>
      </section>

      {/* INTERMEDIATE PHASE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-yellow-700 mb-2">INTERMEDIATE PHASE</h2>

        <div className="ml-4 mb-4">
          <h3 className="text-lg font-semibold text-yellow-600">Life Skills</h3>
          <ul className="list-disc pl-6">
            <li>Grade 4</li>
            <li>Grade 5</li>
            <li>Grade 6</li>
          </ul>
        </div>
      </section>

      {/* FOUNDATION PHASE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">FOUNDATION PHASE</h2>

        <div className="ml-4 mb-4">
          <h3 className="text-lg font-semibold text-pink-600">Mathematics</h3>
          <ul className="list-disc pl-6">
            <li>Grade R</li>
            <li>Grade 1</li>
            <li>Grade 2</li>
            <li>Grade 3</li>
          </ul>
        </div>
      </section>
    </div>
  );
}