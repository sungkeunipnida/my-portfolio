import { ChevronDown } from "lucide-react";

function Hero() {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white relative"
    >
      <h2 className="text-4xl md:text-6xl font-bold">안녕하세요 👋</h2>
      <p className="mt-4 text-lg md:text-2xl">저는 웹 개발자 지망생입니다.</p>

      {/* 스크롤 유도 아이콘 */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 animate-bounce text-white"
        aria-label="Scroll Down"
      >
        <ChevronDown size={60} strokeWidth={3.5} />
      </button>
    </section>
  );
}

export default Hero;
