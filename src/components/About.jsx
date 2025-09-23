function About() {
  return (
    <section id="about" className="text-center scroll-mt-20">
      {/* 제목 */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        About
      </h2>

      {/* 소개 문장 */}
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
        私ソフトウェア工学を複数専攻し、フルスタック開発を目処にしています。
        <br />
        本webはReactとTailwind
        CSSを活用し、使用者経験を中心としてレスポンシブウェブを目指しています。
      </p>
    </section>
  );
}

export default About;
