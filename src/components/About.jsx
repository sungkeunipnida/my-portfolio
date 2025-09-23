function About() {
  return (
    <section id="about" className="text-center scroll-mt-20">
      {/* 제목 */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        About Me
      </h2>

      {/* 소개 문장 */}
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
        저는 소프트웨어 공학을 전공하고, 최종적으로 풀스택 개발을 지향하고
        있습니다. React와 Tailwind CSS를 활용하여 사용자 경험을 극대화하는
        반응형 웹 애플리케이션을 개발하는 것을 목표로 하고 있습니다.
      </p>
    </section>
  );
}

export default About;
