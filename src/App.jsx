import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import UpdateInfo from "./components/UpdateInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="h-screen">
          <Hero />
        </section>

        {/* About */}
        <section
          id="about"
          className="min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gray-100"
        >
          <div className="max-w-4xl mx-auto">
            <About />
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16 bg-gray-100 flex items-center"
        >
          <div className="max-w-6xl mx-auto w-full">
            <Projects />
          </div>
        </section>

        {/* Update Info */}
        <section
          id="update-info"
          className="min-h-[60vh] flex justify-center items-center px-4 sm:px-6 lg:px-8 py-4 bg-gray-100"
        >
          <div className="max-w-4xl w-full">
            <UpdateInfo />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gray-100"
        >
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
