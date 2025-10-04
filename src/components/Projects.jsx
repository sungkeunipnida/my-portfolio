import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 프로젝트 1 */}
        <Link
          to="/projects/project1"
          className="p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2 text-gray-600">Google Maps API 활용</p>
          </div>
        </Link>

        {/* 프로젝트 2 (작업 중) */}
        <div className="p-6 rounded-2xl shadow-lg bg-gray-200 hover:scale-105 transition flex text-gray-500 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">一生懸命作業中・・・</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl shadow-lg bg-gray-200 hover:scale-105 transition flex text-gray-500 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold">Project ３</h3>
            <p className="mt-2">一生懸命作業中・・・</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
