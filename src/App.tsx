import TopNav from './components/TopNav'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <TopNav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default App
