import { FaLinkedin, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "Guhan",
    linkedin: "https://www.linkedin.com/in/guhan-sattanathan",
    github: "https://github.com/guhansattanathan",
  },
  {
    name: "Kyle",
    linkedin: "https://www.linkedin.com/in/kyle-cannon-542098273/",
    github: "https://github.com/kylecannon12",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Hoopalytics. All rights reserved.
        </p>

        <div className="flex items-center space-x-8">
          {team.map((person) => (
            <div key={person.name} className="flex items-center space-x-3">
              <span className="text-xs text-white/50">{person.name}</span>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-orange-500 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-orange-500 transition"
              >
                <FaGithub size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
