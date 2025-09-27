import { useEffect, useState } from "react";

function UpdateInfo() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/lastupdate.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split("\n");
        setLogs(lines);
      })
      .catch(() => setLogs(["unable to fetch the data."]));
  }, []);

  return (
    <div className="text-center scroll-mt-20">
      {/* 제목 */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        Update Info
      </h2>

      {/* 로그 영역 (정사각형 박스) */}
      <div
        className="
          w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem]
          overflow-y-auto rounded p-4
          bg-gray-100 space-y-2 text-left mx-auto
        "
      >
        {logs.map((line, idx) => (
          <p key={idx} className="text-sm text-gray-800">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default UpdateInfo;
