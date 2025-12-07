import Skills from './Skills'
import Certifications from './Certifications'
import WorkExperience from './WorkExperience'
import Education from './Education'

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-mono mb-12 text-center">About</h2>

        <div className="mb-16 text-center">
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            As a seasoned DevOps Analyst with expertise in AWS cloud platforms, I am proficient in creating scalable architectures,
            streamlining CI/CD processes, and managing HPC environments. My technical capabilities include container orchestration
            with Kubernetes and automation using Ansible, complemented by a solid foundation in data analytics and machine learning.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-mono mb-6 text-center">Skills</h3>
          <Skills />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-mono mb-6 text-center">Certifications</h3>
          <Certifications />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-mono mb-6 text-center">Work Experience</h3>
          <WorkExperience />
        </div>

        <div>
          <h3 className="text-2xl font-mono mb-6 text-center">Education</h3>
          <Education />
        </div>
      </div>
    </section>
  )
}

export default About