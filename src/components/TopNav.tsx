import { useTheme } from '../ThemeContext'

const TopNav = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div>
        <h1 className="text-lg font-mono">K Meera</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">DevOps Analyst</p>
      </div>
      <div className="space-x-6 text-sm">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
      <button type="button" onClick={toggleTheme} className="text-sm font-mono focus:outline-none cursor-pointer p-2 rounded">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}

export default TopNav