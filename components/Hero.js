import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-green-500"
        >
          Emmanuel Nkosi
        </motion.h1>
        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl mb-8 text-gray-300"
        >
          Full Stack Web Developer & Software Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto"
        >
          Passionate about building scalable, efficient, and user-friendly web applications. 
          Experienced in React, Next.js, Node.js, and cloud technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <a href="#contact" className="bg-green-500 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition duration-300">
            Get in touch
          </a>
          <a href="#projects" className="border border-green-500 text-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-500 hover:text-black transition duration-300">
            View Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
