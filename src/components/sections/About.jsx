import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    //const para las skills de frontend y backend
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
    ];
    const backendSkills = [
        "Node.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Python",
        "Java",
        "C++",
        "C#",
    ];


    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
                            to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1
                        transition-all">
                        <p className="text-gray-300 mb-6">
                            Throughout my career, I have had the opportunity to carry out a variety of projects that have allowed me to develop my technical and problem-solving skills. I am passionate about learning new technologies and constantly improving my skills. I am always looking for new challenges and opportunities to grow as a developer.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                        key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                        key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 "> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Systems Engineering and Informatics </strong><br />UNAP University (2018 - 2021)
                                </li>
                                <li>
                                    <strong>Responsive Web Design </strong><br />FreeCodeCamp (April 5, 2023)
                                </li>
                                <li>
                                    <strong>Sevelopment of Information Systems </strong><br />IDAT Institute (2023 - 2025)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 "> Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Software Engineer at ABC Corp (2020 - Present) </h4>
                                    <p>
                                        Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Intern at DEF Startups  (2019) </h4>
                                    <p>
                                        Assited in the development of a mobile application using React Native. Participated in code reviews and contributed to the design of the application architecture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};