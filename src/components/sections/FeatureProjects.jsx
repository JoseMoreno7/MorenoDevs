import  {RevealOnScroll} from "../RevealOnScroll";
import futureImg from "../../assets/img/InvenTour.png";
import futureImg2 from "../../assets/img/MJ-Travel-Peru.png";

export const FeatureProjects = () => {
    return (
        <section
            id="futureProjects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
                            to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        {" "}
                        Future Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                InvenTour
                            </h3>
                            <p className="text-gray-400 mb-4">
                                InvenTour is a desktop-style web application designed to streamline the management of inventory, sales, orders, suppliers, and reports for travel and tourism agencies. With a clean UI and responsive layout, the app helps businesses stay organized and efficient. This future project will focus on building a fully functional admin panel with real-time reporting and secure data handling.
                            </p>
                            <img
                                src={futureImg}
                                alt="Preview of Agency Website"
                                className="w-full rounded-lg mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "Chart.js", "JWT Auth", "React Router"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                        text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    {" "}
                                    View Project →{" "}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                MJ Travel Peru
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A modern and responsive website for a travel and tourism agency in Peru. The project will feature sections like home, services, tours, gallery, testimonials, and contact. It aims to provide a smooth and attractive user experience to boost online visibility and client engagement.
                            </p>
                            <img
                                src={futureImg2}
                                alt="Preview of MJ Travel Peru"
                                className="w-full rounded-lg mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Vite", "JWT", "Cloudinary"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                                        text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    {" "}
                                    View Project →{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>  
        </section>
    );
}