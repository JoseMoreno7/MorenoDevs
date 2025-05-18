import { RevealOnScroll } from "../RevealOnScroll";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiMysql } from "react-icons/si";

const icons = {
    HTML: <FaHtml5 className="text-orange-500 text-xl flex-shrink-0" />,
    CSS: <FaCss3Alt className="text-blue-500 text-xl flex-shrink-0" />,
    JavaScript: <FaJs className="text-yellow-400 text-xl flex-shrink-0" />,
    React: <FaReact className="text-cyan-400 text-xl flex-shrink-0" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-xl flex-shrink-0" />,
    "Node.js": <FaNodeJs className="text-green-500 text-xl flex-shrink-0" />,
    MongoDB: <SiMongodb className="text-green-600 text-xl flex-shrink-0" />,
    MySQL: <SiMysql className="text-blue-600 text-xl flex-shrink-0" />,
    Python: <FaPython className="text-yellow-400 text-xl flex-shrink-0" />,
    Java: <FaJava className="text-red-500 text-xl flex-shrink-0" />,
};


export const About = () => {
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
        "Python",
        "Java",
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
                        <p className="text-gray-300 mb-3">
                            My name is José Alfredo Moreno. I'm a junior developer and a computer science student at IDAT Higher Institute. I'm constantly learning and enjoy being involved in projects that push me to grow professionally.
                        </p>
                        <p className="text-gray-300 mb-3">
                            I have knowledge in web development, databases, programming logic, and interface design. Through personal projects, I've been able to apply my skills and strengthen both my technical and soft abilities.
                        </p>
                        <p className="text-gray-300 mb-4">
                            I'm currently seeking opportunities to grow as a developer, collaborate on real-world projects, and continue learning. If you'd like to connect or work together, feel free to reach out!
                        </p>

                        
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center"> Frontend</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition flex items-center justify-center gap-2"
                                        >
                                            {icons[tech]}
                                            <span
                                                className="whitespace-nowrap">{tech}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center"> Backend</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition flex items-center justify-center gap-2"
                                        >
                                            {icons[tech]}
                                            <span
                                                className="whitespace-nowrap">{tech}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-6 "> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-6">
                                <li>
                                    <strong> Marketing </strong><br />Cepea (2017 - 2018)
                                </li>
                                <li>
                                    <strong>Responsive Web Design </strong><br />FreeCodeCamp (January 2023 - April 2023)
                                </li>
                                <li>
                                    <strong>Development of Information Systems </strong><br />IDAT Institute (2023 - studying)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2"> Outside of code </h3>
                            <div className="space-y-2 text-gray-300">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300">
                                        {" "}
                                        My personal ritual for focus and creativity
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        I love starting my programming sessions with a good cup of coffee — it helps me get into the flow and stay creative.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300">
                                        {" "}
                                        Besides coding
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        I'm passionate about sports like football, basketball, and even chess. I'm not a chess master, but I enjoy the strategy behind it and I'm always open to learning new games or sports, especially when it involves playing with others.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300">
                                        {" "}
                                        Another thing I truly enjoy is food
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        I’m a big fan of Peruvian cuisine and love discovering new flavors.
                                    </p>
                                </div><div>
                                    <h4 className="text-sm font-semibold text-gray-300">
                                        {" "}
                                        And of course, gaming is a huge part of my free time
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        I enjoy playing games like PES, Dota 2, Free Fire, and Call of Duty. Whether it’s on the field or in-game, I love challenges, strategy, and teamwork.
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