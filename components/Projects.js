import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiOpenai, SiTensorflow } from 'react-icons/si'

const projects = [
  {
    title: "Pantry Pal",
    description: "A full-stack Pantry Management App using React/Next.js, Material-UI, and Firebase.",
    icon: <FaDatabase className="w-16 h-16 text-green-400" />,
    tech: ["React", "Next.js", "Material-UI", "Firebase"],
    github: "https://github.com/MannieMags/inventory-management",
    live: "https://pantry-pal.vercel.app",
  },
  {
    title: "Scripture Spark",
    description: "An AI-Powered Bible Study App using Next.js 13, Tailwind CSS, and OpenAI API.",
    icon: <SiOpenai className="w-16 h-16 text-green-400" />,
    tech: ["Next.js 13", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/MannieMags/scripturespark",
    live: "https://scripture-spark.vercel.app",
  },
  {
    title: "AmaGroceries",
    description: "AI-Powered Grocery Shopping Assistant using Next.js, React Native, and TensorFlow.js.",
    icon: <SiTensorflow className="w-16 h-16 text-green-400" />,
    tech: ["Next.js", "React Native", "TensorFlow.js"],
    github: "https://github.com/MannieMags/amagroceries",
    live: "https://amagroceries.vercel.app",
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-12 sm:py-16 md:py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-green-500 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="p-6 flex justify-center items-center bg-gray-700">
                {project.icon}
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-green-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="mb-4 flex flex-wrap">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="inline-block bg-gray-700 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-green-300 mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 text-sm sm:text-base">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 text-sm sm:text-base">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
