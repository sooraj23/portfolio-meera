const WorkExperience = () => {
  const experiences = [
    "Designed, deployed, and managed scalable AWS cloud platforms, and delivered HPC services/tools such as AWS ParallelCluster.",
    "Automated patching and configuration workflows for HPC environments using AWS SSM and Ansible, significantly improving operational efficiency.",
    "Containerized applications using Docker and orchestrated deployments on Amazon EKS to enhance portability, reliability, and scalability.",
    "Applied Infrastructure as Code (IaC) practices with AWS CloudFormation to standardize and accelerate environment provisioning.",
    "Monitored system health, performance, and compliance through Amazon CloudWatch and AWS CloudTrail to enable proactive issue detection and faster troubleshooting.",
    "Managed CI/CD pipelines using Git and GitHub to support consistent, repeatable, and reliable software delivery.",
    "Configured and optimized VPC networking architectures, including security groups, subnets, and routing, to ensure secure and efficient cloud communication.",
    "Enforced tag harmonization standards to strengthen resource governance and improve cost allocation visibility.",
    "Led RDS migrations and engine upgrades for PostgreSQL and MySQL while ensuring high availability and minimal downtime.",
    "Executed FinOps practices such as resource right-sizing, budgeting, and cost-control strategies to optimize cloud spend.",
    "Developed robust disaster recovery strategies to safeguard data and achieve defined recovery objectives."
  ]

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-2xl font-mono mb-4 text-center">DevOps Analyst – Zifo RnD Solutions</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
        {experiences.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </div>
  )
}

export default WorkExperience