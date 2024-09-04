import { motion } from 'framer-motion'

const skills = [
  "JavaScript (ES6+)", "React", "Next.js", "Node.js", "Express", "MongoDB",
  "GraphQL", "REST APIs", "Git", "Agile Methodologies", "CI/CD", "Cloud Platforms (AWS, GCP)"
]

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-green-500">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-4">
              As a dedicated professional, I thrive on challenges and consistently deliver results. With a robust background in customer care and a proven track record, I am committed to exceeding expectations and fostering long-lasting relationships.
            </p>
            <p className="text-gray-300 mb-4">
              My dedication to excellence extends beyond profession—it is a genuine passion. Motivated by the desire to make a positive impact, I am eager to connect with like-minded professionals who share my commitment to innovation and quality.
            </p>
            <p className="text-gray-300">
              Now, as a Full Stack Web Developer & Software Engineer, I bring my passion for excellence to new challenges and opportunities in the tech space.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <span key={index} className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
