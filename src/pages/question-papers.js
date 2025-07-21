import { useState } from 'react';

const papers2025 = [
  "2025_KZN_PHSC_GRADE_12_ATP_FINAL.pdf",
  "EC-CHW-Physical-Sciences-Grade-12-March-2025-QP-only.pdf",
  "EC-ORT-Physical-Sciences-Grade-12-TEST-Organic-Reactions-2025-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-June-2025-P1-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-June-2025-P2-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-March-2025-QP-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-June-2025-P1-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-June-2025-P2-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-March-2025-QP-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-June-2025-P1-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-March-2025-QP-and-Memo.pdf",
  "LP-B-Physical-Sciences-Grade-12-March-2025-QP-and-Memo.pdf",
  "LP-Physical-Sciences-Grade-12-June-2025-P1-and-Memo.pdf",
  "LP-Physical-Sciences-Grade-12-June-2025-P2-and-Memo.pdf",
  "LP-Physical-Sciences-Grade-12-March-2025-QP-only.pdf",
  "LP-Physical-Sciences-Grade-12-TEST-Work-Energy-Power-2025-and-Memo.pdf",
  "LP-VW-Physical-Sciences-Grade-12-TEST-Term-1-2025-only.pdf",
  "LP-W-Physical-Sciences-Grade-12-MOMENTUM-PRACTICAL-2025.pdf",
  "MP-Physical-Sciences-Grade-12-March-2025-QP-and-Memo.pdf",
  "MP-Physical-Sciences-Grade-12-TEST-Work-Energy-and-Power-2025-and-Memo (1).pdf",
  "MP-Physical-Science-Grade-12-TEST-Work-Energy-and-Power-2025-and-Memo.pdf",
  "MP-Physical-Sciences-Grade-12-June-2025-P1-and-Memo.pdf",
  "MP-Physical-Sciences-Grade-12-June-2025-P2-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-May-June-2025-P1.pdf",
  "NSC-Physical-Sciences-Grade-12-May-June-2025-P2-only.pdf",
  "NW-Physical-Science-Grade-12-March-2025-QP-and-Memo.pdf",
  "NW-Physical-Science-Grade-12-June-2025-P1-and-Memo.pdf",
  "Physical-Science-Grade-12-Momentum-Practical-Notes-2018.pdf",
  "Physical-Science-Grade-12-Term-2-TITRATION-Practical-Manual.pdf"
];

const extractProvince = (filename) => {
  const match = filename.match(/^(NSC|KZN|EC|FS|GP|LP|MP|NW)/);
  return match ? match[0] : "Other";
};

export default function QuestionPapers2025() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPapers = papers2025.filter((file) =>
    file.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grouped = filteredPapers.reduce((acc, file) => {
    const province = extractProvince(file);
    acc[province] = acc[province] || [];
    acc[province].push(file);
    return acc;
  }, {});

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">📘 Grade 12 Physical Sciences — 2025</h2>
      <input
        type="text"
        placeholder="Search by month, province, memo…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-blue-300 rounded"
      />
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredPapers.length} of {papers2025.length} papers
      </p>

      {Object.entries(grouped).map(([province, files]) => (
        <div key={province} className="mb-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">{province}</h3>
          <div className="space-y-2">
            {files.map((filename, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white shadow p-3 rounded text-sm"
              >
                <span>{filename.replace(".pdf", "")}</span>
                <a
                  href={`/papers/fet-phase/physical-sciences/grade-12/2025/${filename}`}
                  download
                >
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Download
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
