import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1">
        {/* Hero: 화면 꽉 차게 */}
        <section>
          <Hero />
        </section>

        {/* About */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <About />
          </div>
        </section>

        {/* Projects */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Projects
            </h2>
            {/* 반응형 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Projects />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
