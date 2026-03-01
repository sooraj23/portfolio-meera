const WorkExperience = () => {
  const experiences = [
    "Delivered end-to-end production and application support for AWS workloads; resolved EC2, VPC, storage, and networking issues to maintain high availability and performance.",
    "Designed and maintained scalable, fault-tolerant Cloud and HPC environments on AWS.",
    "Streamlined patching and configuration management using AWS Systems Manager (SSM) and Ansible, increasing operational efficiency.",
    "Containerized applications using Docker and orchestrated deployments on Amazon EKS (Kubernetes) with monitoring and observability integration.",
    "Provisioned infrastructure using Infrastructure as Code (Terraform, AWS CloudFormation) for standardized and repeatable deployments.",
    "Implemented CI/CD pipelines using Git and GitHub Actions to automate build, testing, and release processes.",
    "Monitored infrastructure using Amazon CloudWatch and CloudTrail; reduced MTTR through proactive alerting and log analysis.",
    "Engineered secure VPC architectures (subnets, route tables, security groups, NAT gateways, load balancers).",
    "Applied tagging strategy and FinOps best practices to optimize AWS cost and resource utilization.",
    "Executed Amazon RDS migrations and version upgrades (PostgreSQL, MySQL) with minimal downtime.",
    "Established disaster recovery solutions aligned with defined RTO/RPO objectives.",
    "Administered Linux systems including user management, shell scripting, patching, log monitoring, and hardening.",
    "Developed automation using Python, Bash, AWS Lambda, and VS Code for event-driven and serverless workflows.",
    "Contributed within Agile/Scrum environments; supported sprint ceremonies and cross-functional releases.",
    "Created technical architecture documentation, deployment guides, and operational runbooks.",
    "Managed incidents, service requests, and change tickets via JIRA and ServiceNow (SNOW); ensured SLA adherence."
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