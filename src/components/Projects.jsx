function Projects() {
  return (
    <>
      {[1, 2, 3].map((id) => (
        <div
          key={id}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold mb-4">Project {id}</h3>
          <p className="text-gray-700 flex-1">
            프로젝트 {id}에 대한 간단한 설명을 적습니다. 이 설명은 적당한 길이로
            가독성을 유지합니다.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 transition">
            자세히 보기
          </button>
        </div>
      ))}
    </>
  );
}

export default Projects;
