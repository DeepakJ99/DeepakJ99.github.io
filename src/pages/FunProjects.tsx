const projects = [
  {
    title: "AI-Powered Poem Generator",
    description: "Generates poetry based on any theme using GPT.",
    link: "#",
    tags: [
    { title: "React", link: "https://reactjs.org" },
    { title: "API", link: "https://developer.mozilla.org/en-US/docs/Web/API" }
    ]
  },
  {
    title: "CLI Habit Tracker",
    description: "Simple terminal-based habit tracker with daily summaries.",
    link: "#",
    tags: [
    { title: "React", link: "https://reactjs.org" },
    { title: "API", link: "https://developer.mozilla.org/en-US/docs/Web/API" }
  ]
  },
  // Add more
];
interface Tag {
  title: string;
  link: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
  tags: Tag[];
}

export default function FunProjects() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6 text-center mt-6">Fun Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
            <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-zinc-300 dark:border-stone-500 rounded shadow-sm hover:shadow-md transition block"
            >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-zinc-500 dark:text-stone-300 mb-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIdx) => (
                    <a
                    key={tagIdx}
                    href={tag.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:underline"
                    >
                    {tag.title}
                    </a>
                ))}
                </div>
            </a>
            ))}
        </div>
    </div>
  );
}
