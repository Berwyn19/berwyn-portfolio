import Skills from './Skills'
import Work from './Work'

export default function Experience() {
    return (
      <div id="experience" className="bg-gray-900 text-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">Experience & Skills</h2>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <section className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">Work Experience</h3>
              <Work
                title="Research Intern"
                date="June 2024 - August 2024"
                institution="Stanford University Department of Materials Science and Engineering"
                description="Trained equivariant neural networks and polynomial-expansion-based machine learning potentials to accurately predict forces in Transitional Metal Dichalcogenide materials. Successfully established a novel pipeline to deploy more efficient and interpretable machine learning models"
              />
              <Work
                title="Physics and Computer Science Tutor"
                date="June 2023 - Present"
                institution="INAkademia"
                description="Volunteered as a tutor in a non-profit company aimed at providing high-quality accessible education to students all across Indonesia. Conducted a 2-week summer coding bootcamp to introduce college Computer Science to high school students"
              />
              {/* Add more Work components here as needed */}
            </section>
            
            <section className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Skills
                  title="Front-end"
                  skillsList={["React.js", "Next.js", "Tailwind"]}
                />
                <Skills
                  title="Back-end"
                  skillsList={["Django", "SQL", "REST API"]}
                />
                <Skills
                  title="Machine Learning"
                  skillsList={["LLM", "ML on Cloud", "PyTorch"]}
                />
                <Skills
                  title="Systems"
                  skillsList={["CLI", "Version Control", "C", "C++"]}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }