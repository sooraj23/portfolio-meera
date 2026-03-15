const Certifications = () => {
  
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      validity: "Valid upto October 2028"
    },
    {
      title: "Advanced Prompt Engineering for Everyone & Practical AI",
    },
    {
      title: "Continuous Integration and Continuous Delivery (CI-CD): IBM",
    }
  ]

  return (
    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-xl font-mono mb-2">{cert.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{cert.validity}</p>
        </div>
      ))}
    </div>
  )
}

export default Certifications