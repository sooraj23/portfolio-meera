import Skills from './Skills'
import Certifications from './Certifications'
import WorkExperience from './WorkExperience'
import Education from './Education'
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll'

const About = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section id="about" ref={ref} className={`py-16 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-mono mb-12 text-center">About</h2>

        <div className="mb-16 text-center">
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            AWS Certified Cloud Engineer with expertise in designing scalable, secure, highly available,
and cost-optimized cloud architectures. Skilled in Infrastructure as Code, configuration
management, container orchestration, and managing Continuous Integration and
Continuous Deployment automation. Experienced in high-performance computing
environments, AWS services, AWS CLI, Linux administration, and DevOps best practices.
Proven ability to improve operational efficiency, enhance system reliability, optimize cloud
spending, and collaborate effectively with cross-functional teams to deliver resilient cloud
solutions.
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