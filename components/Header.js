import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-black bg-opacity-50 z-50"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-green-500"
        >
          EN
        </motion.div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-green-500 hover:text-green-300">About</a></li>
          <li><a href="#projects" className="text-green-500 hover:text-green-300">Projects</a></li>
          <li><a href="#contact" className="text-green-500 hover:text-green-300">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  )
}
