import Link from "next/link";

const subjects = [
  "accounting",
  "business-studies",
  "cat",
  "dance-studies",
  "dramatic-arts",
  "egd",
  "english-fal",
  "geography",
  "history",
  "information-technology",
  "life-orientation",
  "life-sciences",
  "mathematical-literacy",
  "mathematics",
  "physical-sciences",
  "tourism",
  "visual-arts",
  "hospitality-studies",
  "technical-mathematics",
  "technical-sciences",
  "amp",
];

export default function FETPhase() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📚 FET Phase Past Papers</h1>
      <ul className="space-y-2">
        {subjects.map((subject) => (
          <li key={subject}>
            <Link href={`/fet-phase/${subject}`}>
              <span className="text-blue-600 hover:underline capitalize">
                {subject.replace(/-/g, " ")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}