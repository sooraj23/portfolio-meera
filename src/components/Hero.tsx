import meeraAvatar from '../assets/images/meera-Avatar.jpg';

const Hero = () => {
  return (
    <section id="home" className="text-center py-32 px-6">
      <div className="mb-8">
        <img src={meeraAvatar} alt="Meera's Avatar" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      </div>
      <h1 className="text-4xl font-mono mb-6">Hello! I'm K Meera</h1>
      <p className="text-xl font-mono mb-4">DevOps Analyst – Zifo RnD Solutions</p>
      <div className="flex justify-center space-x-4 mb-12">
        <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-mono flex items-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Open to Work
        </span>
        <span className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-mono">kmeera1099@gmail.com</span>
      </div>
      <div className="space-x-12 text-lg font-mono">
        <a href="#devops" className="hover:underline">DevOps</a>
        <a href="#cloud" className="hover:underline">Cloud</a>
        <a href="#automation" className="hover:underline">Automation</a>
      </div>
    </section>
  )
}

export default Hero