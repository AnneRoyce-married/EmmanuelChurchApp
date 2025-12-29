import React from 'react'

const activities = [
  {
    title: "Lord's Supper",
    time: "Every Sunday evening — 5:15 PM to 7:30 PM.",
    verse: "Acts 20:7 — 'On the first day of the week, when we were gathered together to break bread…'"
  },
  {
    title: "Bible Teaching & Sunday School",
    time: "Every Sunday — 4:00 PM to 5:00 PM.",
    verse: "2 Timothy 3:16 — 'All Scripture is breathed out by God and profitable for teaching…'"
  },
  {
    title: "Sisters' Meeting, Brothers' Meeting & Bible Study",
    time: "First Saturday of every month.",
    verse: "Acts 2:42 — 'They devoted themselves to the apostles’ teaching and the fellowship…'"
  },
  {
    title: "Youth Meeting & Cottage Meeting",
    time: "Third Saturday of every month.",
    verse: "Psalm 119:9 — 'How can a young man keep his way pure? By guarding it according to Your word.'"
  },
  {
    title: "Gospel Outreach",
    time: "Local evangelism and community outreach.",
    verse: "Mark 16:15 — 'Go into all the world and proclaim the gospel to the whole creation.'"
  }
];
export default function Activities() {
   return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <h2
        className="text-3xl font-bold flex items-center gap-3"
        style={{ color: "#2C3552" }}
      >
        <span
          className="inline-block w-2 h-8 rounded"
          style={{ backgroundColor: "#D4A017" }}
        />
        Activities
      </h2>

      <p className="mt-2 text-gray-600">
        Worship • Study • Fellowship • Gospel Outreach
      </p>

      <ul className="mt-8 space-y-6">
        {activities.map(a => (
          <li
            key={a.title}
            className="bg-white p-6 rounded-lg shadow-sm border-l-4"
            style={{ borderColor: "#D4A017" }}
          >
            <div
              className="text-xl font-semibold"
              style={{ color: "#2C3552" }}
            >
              {a.title}
            </div>

            <div className="mt-1 text-gray-700">
              {a.time}
            </div>

            <div
              className="mt-3 text-sm italic text-gray-600 border-l-4 pl-3"
              style={{ borderColor: "#2C3552" }}
            >
              {a.verse}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}