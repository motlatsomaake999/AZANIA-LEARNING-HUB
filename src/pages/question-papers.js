export default function QuestionPapers() {
  const papers = [
    {
      name: "Grade 12 Maths 2022",
      file: "/papers/grade12-maths-2022.pdf",
    },
    {
      name: "Grade 11 Physics 2023",
      file: "/papers/grade11-physics-2023.pdf",
    },
    {
      name: "Grade 10 Life Science 2021",
      file: "/papers/grade10-life-science-2021.pdf",
    },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📄 Past Papers</h1>
      <ul className="space-y-4">
        {papers.map((paper) => (
          <li key={paper.file}>
            <a
              href={paper.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {paper.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}