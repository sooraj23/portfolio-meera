const Skills = () => {
  const skills = [
    "S3", "Lambda", "EC2", "Amazon EC2", "Amazon RDS", "Amazon CloudWatch", "CloudTrail",
    "AWS Certified", "macOS", "EKS", "AWS CloudFormation", "Blob Storage", "pgAdmin", "AWS",
    "Ansible", "GIT", "GitHub", "GitHub Actions", "DevOps", "CI/CD", "Containerization", "Docker",
    "Data Mining", "Machine Learning", "Kubernetes", "Python Scripting", "PostgreSQL", "SQL",
    "JIRA", "ServiceNow", "Cloud Computing", "Azure"
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map(skill => (
        <div key={skill} className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-5 px-3 rounded-lg text-center transition-colors font-mono text-sm break-words min-w-0 flex items-center justify-center">
          {skill}
        </div>
      ))}
    </div>
  )
}

export default Skills