import { useState, useEffect } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 사라질 때 이벤트 해제 (메모리 누수 방지)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-sm text-white p-4 flex justify-between items-center shadow z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-xl font-bold">
        <a href="#home" className="text-gray-200 hover:text-white">
          sungkeun
        </a>
      </h1>
      <nav className="space-x-5">
        <a href="#about" className="text-gray-200 hover:text-white">
          About
        </a>
        <a href="#projects" className="text-gray-200 hover:text-white">
          Projects
        </a>
        <a href="#update-info" className="text-gray-200 hover:text-white">
          Update Info
        </a>
        <a href="#contact" className="text-gray-200 hover:text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
