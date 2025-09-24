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
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-100 text-white relative pt-[env(safe-area-inset-top)]"
    >
      <h2 className="text-4xl md:text-6xl font-bold">こんにちは</h2>
      <p className="mt-4 text-lg md:text-2xl">
        わざわざ開いてくださってありがとうございます。
        <br /> LEE SUNG KEUN （イ・ソングン）と申します。
      </p>

      {/* 스크롤 유도 아이콘 */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-10 animate-bounce text-white"
        aria-label="Scroll Down"
      >
        <ChevronDown size={60} strokeWidth={3.5} />
      </button>
    </section>
  );
}

export default Hero;
