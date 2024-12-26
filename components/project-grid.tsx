interface Project {
  title: string
  date: string
  views: string
  description: string
  slug: string
}

export default function ProjectGrid() {
  const projects: Project[] = [
    {
      title: "Zod Bird",
      date: "May 21, 2023",
      views: "6K",
      description: "Zodbird is an e2e typed tinybird.co client library for typescript, leveraging zod for type safety and transformations",
      slug: "zod-bird"
    },
    {
      title: "chronark.com",
      date: "Mar 28, 2023", 
      views: "6.4K",
      description: "The website you're looking at",
      slug: "chronark-com"
    },
    {
      title: "Upstash Core Analytics",
      date: "Feb 13, 2023",
      views: "2.1K", 
      description: "Low level utilities to build analytics tools on top of Redis.",
      slug: "upstash-core-analytics"
    },
    {
      title: "React.js CLI",
      date: "Feb 5, 2023",
      views: "2.5K",
      description: "A CLI React component to interact with Upstash Redis databases.",
      slug: "react-js-cli"
    },
    {
      title: "envshare.dev",
      date: "Jan 16, 2023",
      views: "4.6K",
      description: "EnvShare is a simple tool to share environment variables securely. It uses AES-GCM to encrypt your data before sending it to the server. The encryption key never leaves your browser.",
      slug: "envshare-dev"
    },
    {
      title: "@chronark/access",
      date: "Nov 13, 2022",
      views: "2K",
      description: "A minimal library for access control. It is designed to be used together with opaque access tokens by providing a simple interface to define roles",
      slug: "chronark-access"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <a
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="block p-4 rounded-lg bg-card hover:bg-muted transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <span className="text-muted-foreground text-sm">{project.date}</span>
              <h2 className="text-xl font-medium text-foreground">{project.title}</h2>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {project.views}
            </div>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
        </a>
      ))}
    </div>
  )
}

