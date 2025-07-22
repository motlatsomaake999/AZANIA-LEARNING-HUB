 import { useState } from 'react';

// 📁 All paper filenames organized by year
const papersByYear = {
  "2025": [
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
  ],"2024": [
  "EC-Physical-Science-Grade-12-June-2024-P1-and-Memo.pdf",
  "EC-Physical-Science-Grade-12-June-2024-P2-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-March-2024-QP-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-September-2024-P1-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-September-2024-P2-and-Memo.pdf",
  "GP-JN-Physical-Sciences-Grade-12-March-2024-QP-only.pdf",
  "GP-Physical-Science-Grade-12-June-2024-P1-and-Memo.pdf",
  "GP-Physical-Science-Grade-12-June-2024-P2-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-September-2024-P2-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-June-2024-P1-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-June-2024-P2-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-PRE-TRIAL-2024-P1-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-September-2024-P1-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-September-2024-P2-and-Memo.pdf",
  "LP-Physical-Science-Grade-12-June-2024-P1-and-Memo.pdf",
  "LP-Physical-Science-Grade-12-June-2024-P2-and-Memo.pdf",
  "LP-Physical-Science-Grade-12-September-2024-P1-and-Memo.pdf",
  "LP-Physical-Science-Grade-12-September-2024-P2-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-COLLECTABLES.pdf",
  "MP-Physical-Science-Grade-12-TEST-Doppler-Effect-2024-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-September-2024-P1-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-September-2024-P2-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-May-June-2024-P1-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-May-June-2024-P2-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-November-2024-P1-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-November-2024-P2-and-Memo.pdf",
  "NW-Physical-Sciences-Grade-12-June-2024-P1-only.pdf",
  "NW-Physical-Sciences-Grade-12-June-2024-P2-only.pdf",
  "NW-Physical-Sciences-Grade-12-September-2024-P1-and-Memo.pdf",
  "NW-Physical-Sciences-Grade-12-September-2024-P2-and-Memo.pdf",
  "Physical-Sciences-Gr-12-Assessent-Frame-Sep-2024-ENG.pdf",
  "WC-CW-Physical-Sciences-Grade-12-September-2024-P1-and-Memo.pdf",
  "WC-CW-Physical-Sciences-Grade-12-September-2024-P2-and-Memo.pdf",
  "WC-MC-Physical-Sciences-Grade-12-LAST-PUSH-CHEMISTRY-2024.pdf",
  "WC-MN-Physical-Sciences-Grade-12-September-2024.pdf"
],"2023": [
  "EC-Physical-Sciences-Grade-12-June-2023-P1-and-Memo.pdf",
  "EC-Physical-Sciences-Grade-12-June-2023-P2-and-Memo.pdf",
  "EC-Physical-Sciences-Grade-12-March-2023-QP-and-Memo.pdf",
  "EC-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo.pdf",
  "EC-Physical-Sciences-Grade-12-SEPT-2023-P2-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-March-2023-QP-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo.pdf",
  "FS-Physical-Sciences-Grade-12-Trial-Exam-2023-P2-and-Memo.pdf",
  "Gauteng-Physical-Sciences-Grade-12-March-2023-QP-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-June-2023-P1-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-June-2023-P2-and-Memo.pdf",
  "GP-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo.pdf",
  "IEB-Physical-Sciences-Grade-12-November-2023-P1-only.pdf",
  "KZN-Physical-Sciences-Grade-12-June-2023-P1-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-June-2023-P2-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-Trial-Exam-2023-P1-and-Memo.pdf",
  "KZN-Physical-Sciences-Grade-12-Trial-Exam-2023-P2-and-Memo.pdf",
  "LP-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo-1.pdf",
  "LP-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-March-2023-QP-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-TEST-Chemical-Equilibrium-2023-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-TEST-Doppler-Effect-2023-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-TEST-Rates-of-Reaction-2023-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-Vertical-Projectile-TEST-2023-and-Memo.pdf",
  "MP-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo.pdf",
  "MP-Physical-Sciences-Grade-12-SEPT-2023-P2-and-Memo.pdf",
  "NSC-Physical-Science-Grade-12-November-2023-P1-and-Memo.pdf",
  "NSC-Physical-Science-Grade-12-November-2023-P2-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-May-June-2023-P1-and-Memo.pdf",
  "NSC-Physical-Sciences-Grade-12-May-June-2023-P2-and-Memo.pdf",
  "NW-Physical-Sciences-Grade-12-SEPT-2023-P1-and-Memo.pdf"
],"2022": [
  "EC-Physical-Science-Grade-12-SEPT-2022-P1-and-Memo.pdf",
  "Free-State-Physical-Science-March-2022-Grade-12-QP-and-Memo.pdf",
  "FS-Physical-Science-Grade-12-June-2022-P1-and-Memo.pdf",
  "FS-Physical-Science-Grade-12-SEPT-2022-P1-and-Memo.pdf",
  "Gauteng-Physical-Science-Grade-12-SEPT-2022-P1-and-Memo.pdf",
  "Gauteng-Physical-Science-Grade-12-June-2022-P1-and-Memo.pdf",
  "IEB-Physical-Science-Grade-12-November-2022-P1-and-Memo.pdf",
  "Limpopo-Physical-Science-Grade-12-Pre-Trial-2022-P1-and-Memo.pdf",
  "Limpopo-Physical-Science-Grade-12-SEPT-2022-P2-and-Memo.pdf",
  "Limpopo-Physical-Science-Grade-12-June-2022-P1-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-SEPT-2022-P1-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-SEPT-2022-P2-and-Memo.pdf",
  "MP-Physical-Science-Grade-12-Organic-Chemistry-TEST-2022-and-Memo.pdf",
  "NSC-Physical-Science-Grade-12-November-2022-P1-and-Memo.pdf",
  "NW-Physical-Science-Grade-12-SEPT-2022-P1-and-Memo.pdf",
  "NW-Physical-Science-Grade-12-SEPT-2022-P2-and-Memo.pdf",
  "Physical-Science-Grade-12-June-2022-P1-and-Memo.pdf",
  "Physical-Science-Grade-12-SEPT-2022-P1-and-Memo.pdf",
  "Physical-Science-Grade-12-March-2022-QP-and-Memo.pdf",
  "Physical-Science-NSC-Grade-12-June-2022-P2-and-Memo.pdf",
  "Physical-Sciences-Grade-12-June-2022-P1-and-Memo.pdf",
  "TEST-ELECTROCHEMISTRY-2022-and-Memo.pdf",
  "TEST-ELECTROSTATICS-2022-and-Memo.pdf"
],"2021": [
  "EC-Physical-Science-Trial-2021-P1-and-Memo.pdf",
  "Free-State-Physical-Science-Trial-2021-P1-and-Memo.pdf",
  "GP-Physical-Science-Grade-12-Trial-Exam-2021-P1-and-Memo.pdf",
  "GP-Physical-Science-Grade-12-Trial-Exam-2021-P2-only.pdf",
  "LIMPOPO-Physical-Science-Trial-2021-P1-and-Memo.pdf",
  "MCED-Physical-Science-Trial-2021-P1-and-Memo.pdf",
  "MDE-PHYSICAL-SCIENCES-GR-12-June-2021-P1-and-Memo.pdf",
  "NWP-Physical-Science-Trial-2021-P1-and-Memo.pdf",
  "NWP-Physical-Science-Trial-2021-P2-and-Memo.pdf",
  "Physical-Science-gr-12-April-2021-QP-and-Memo.pdf",
  "Physical-Science-Grade-12-June-2021-NSC-P1-Memo-only.pdf",
  "Physical-Science-Grade-12-June-2021-NSC-P2-Memo-only.pdf",
  "Physical-Science-Grade-12-NSC-November-2021-P1-and-Memo.pdf",
  "Physical-Science-Grade-12-NSC-November-2021-P2-and-Memo.pdf",
  "Physical-Science-Grade-12-Trial-2021-P1-and-Memo.pdf",
  "Physical-Science-Grade-12-Trial-2021-P1-and-Memo-with-Addendum.pdf",
  "Physical-Science-Grade-12-Trial-2021-P2-and-Memo.pdf",
  "Physical-Science-NCS-June-2021-Grade-12-P1-and-Memo.pdf",
  "Physical-Science-NCS-June-2021-Grade-12-P2-and-Memo.pdf",
  "WCED-Physical-Science-Trial-2021-P1-and-Memo.pdf"
],"2020": [
  "Freestate-Phy-Sc-Sept-2020-P2-and-Memo.pdf",
  "Limpopo-PHSC-September-2020-P2-and-MEMO-.pdf",
  "MP-Physical-Sciences-Grade-12-Practical-MOMENTUM-2020-and-Memo.pdf",
  "PHY-SC-Gr-12-March-2020-p2.pdf",
  "PHY-SC-Gr-12-SEPT-2020-P1-and-Memo.pdf",
  "Phy-Sc-Gr-12-Sept-2020-P2-and-MEMO.pdf",
  "phy-sc-grade-12-P1March-2020-1.pdf",
  "Physical-Science-Grade-12-Nov-2020-P1-and-Memo.pdf",
  "Physical-Science-Grade-12-Nov-2020-P2-and-Memo.pdf",
  "PHYSICAL-SCIENCE-P2-and-Memo-2020-June-KZN.pdf",
  "Physical-Sciences-June-2020-Paper-1-and-Memo.pdf",
  "PHYSICAL-SCIENCES-SEPT-2020-P1-and-MEMO-.pdf"
]

  // 🎯 Add other years here, e.g. "2024": [ ...files ], "2023": [ ...files ], up to "2014"
};

const extractProvince = (filename) => {
  const match = filename.match(/^(NSC|KZN|EC|FS|GP|LP|MP|NW|WC)/);
  return match ? match[0] : "Other";
};

export default function PhysicalSciencesPapers() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [searchTerm, setSearchTerm] = useState("");

  const papers = papersByYear[selectedYear] || [];

  const filteredPapers = papers.filter((file) =>
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
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-blue-900">
          🧪 Grade 12 Physical Sciences Past Papers ({selectedYear})
        </h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 border border-blue-300 rounded text-blue-800"
        >
          {Object.keys(papersByYear).sort((a, b) => b - a).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Search by province, topic, memo…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-blue-300 rounded"
      />
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredPapers.length} of {papers.length} papers for {selectedYear}
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
                  href={`/papers/fet-phase/physical-sciences/grade-12/${selectedYear}/${filename}`}
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
