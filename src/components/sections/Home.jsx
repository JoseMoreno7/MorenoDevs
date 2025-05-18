import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/img/profile.png";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
            >
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 gap-10">
                <div className="flex-shrink-0">
                    <img
                    src={profileImg}
                    alt="José Moreno"
                    className="w-60 h-60 object-cover rounded-full border-4 border-cyan-700 shadow-lg"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r 
                    from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
                    >
                        Hi, I’m José Moreno
                    </h1>

                    <p className="text-gray-300 text-lg mb-8 max-w-xl">
                        I'm a junior developer passionate about technology and building functional solutions.
                        I enjoy learning continuously and applying my knowledge to projects that create real impact.
                        Welcome to my portfolio.
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 text-white py-3 px-6  rounded font-medium transition
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};