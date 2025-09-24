function Projects() {
  return (
    <>
      {[1, 2, 3].map((id) => (
        <div
          key={id}
          className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold mb-4">Project {id}</h3>
          <p className="text-gray-700 flex-1">一生懸命作業中です。</p>
          <button className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-700 hover:scale-105 transition">
            Projectへ
          </button>
        </div>
      ))}
    </>
  );
}

export default Projects;
