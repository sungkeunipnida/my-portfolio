function Projects() {
  return (
    <div className="scroll-mt-20">
      {/* 제목 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      {/* 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-4">Project {id}</h3>
            <p className="text-gray-700 flex-1">一生懸命作業中です。</p>
            <button className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 hover:scale-105 transition">
              Projectへ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
