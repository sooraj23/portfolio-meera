const Education = () => {
  const educations = [
    {
      degree: "MS/M.Sc(Science) | Applied Statistics and Data Analytics",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      grade: "Grade - 8.5/10"
    },
    {
      degree: "B.Sc | Mathematics",
      institution: "Sree sankara college, kalady",
      grade: "Grade - 9.2/10"
    }
  ]

  return (
    <div className="space-y-4">
      {educations.map((edu, index) => (
        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-xl font-mono mb-2">{edu.degree}</h3>
          <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
          <p className="text-gray-600 dark:text-gray-300">{edu.grade}</p>
        </div>
      ))}
    </div>
  )
}

export default Education