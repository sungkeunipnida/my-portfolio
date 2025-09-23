function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-sm text-white p-4 flex justify-between items-center shadow z-50">
      <h1 className="text-xl font-bold">My Portfolio</h1>
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
