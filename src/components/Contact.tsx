import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll'

const Contact = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section id="contact" ref={ref} className={`py-32 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-mono mb-12">Contact</h2>

        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+91-9526288674</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">kmeera1099@gmail.com</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">Ernakulam, INDIA</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-2">Languages</h3>
            <p className="text-gray-600 dark:text-gray-300">English, Malayalam</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/k-meera-2591a0236/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact