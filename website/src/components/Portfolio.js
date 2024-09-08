import PortCard from "./PortCard"

export default function Portfolio() {
    const portfolioItems = [
        {
            title: "Bayesian Knowledge Trace for Adaptive Competitive Physics Training",
            description: "An implementatation of Bayesian Knowledge Trace with other probabilistic concepts to support adaptive physics problem solving experience",
            technologies: ["Python", "Statistics", "Education"],
            projectUrl: "https://github.com/Berwyn19/AdaptiveBKT"
        },
        {
            title: "Using Multi-Agent Large Language Models to Improve Creative Writing Capabilities",
            description: "Implemented multi-agent LLM where different models can communicate with each other in refining the generated output, primarily focus on the creativity",
            technologies: ["Python", "Large Language Models"],
            projectUrl: "https://github.com/Berwyn19/MultiAgentLLM"
        },
        {
            title: "Semi-Virtual Bowling Game with Graphics Library",
            description: "Implemented graphics library from scratch on bare-metal environment and created a virtual bowling animations which interact real-time with the physical environment",
            technologies: ["C", "RISC-V", "Sensors"],
            projectUrl: "https://github.com/Berwyn19/VirtBowling"
        },
        {
            title: "Split Machine Learning Models to Accurately Predict the Relaxation in Transitional Metal Dichalcogenides",
            description: "Developed a split machine learning pipeline to model the intralayer and interlayer interaction in transitional metal dichalcogenides. Discovered a more interpretable model without sacrificing the accuracy",
            technologies: ["PyTorch", "Supercomputer", "Machine Learning", "C++"],
            projectUrl: "https://github.com/Berwyn19/MatREU"
        }
    ]
    return (
        <div id="portfolio" className="bg-gray-900 text-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <PortCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      );
}