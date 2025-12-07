const Projects = () => {
  const projects = [
    {
      title: "Income Classification Model",
      descriptions: [
        "Built an income classification model predicting salaries >$50K.",
        "Utilized Decision Tree, Random Forest, kNN, K-Means, and Naive Bayes algorithms.",
        "Performed exploratory data analysis (EDA), data preprocessing, and visualization."
      ]
    },
    {
      title: "Nonparametric Regression and Classification",
      descriptions: [
        "Developed and implemented a k-nearest neighbor (kNN) based algorithm.",
        "Handled mixed covariates including functional, categorical, and continuous predictors.",
        "Conducted a comprehensive simulation study demonstrating superior accuracy."
      ]
    }
  ]

  return (
    <section id="projects" className="py-32 px-6">
      <h2 className="text-3xl font-mono mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <h3 className="text-2xl font-mono mb-4">{project.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects