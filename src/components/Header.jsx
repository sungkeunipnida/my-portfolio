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
      <h1 className="text-xl font-bold">sungkeun</h1>
      <nav className="space-x-4">
        <a href="#home" className="hover:text-blue-400">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#projects" className="hover:text-blue-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
