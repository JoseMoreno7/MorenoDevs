import  {RevealOnScroll} from "../RevealOnScroll";
import futureImg3 from "../../assets/img/calculadora.png";
import futureImg4 from "../../assets/img/app-dolar.png";
import futureImg5 from "../../assets/img/app-clima.png";
import futureImg6 from "../../assets/img/app-clima-v2.png";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
                            to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        {" "}
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Scientific Calculator
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A scientific calculator built with HTML, TailwindCSS, and JavaScript. Features:
                                <br />• Basic operations: addition, subtraction, multiplication, division, percentage.
                                <br />• Scientific functions: powers, roots, logarithms, trigonometry, and the π constant.
                                <br />• Modern and responsive interface, styled with TailwindCSS.
                                <br />• Interactive history that stores up to 12 recent operations.
                            </p>
                            <img
                                src={futureImg3}
                                alt="Preview of Agency Website"
                                className="w-full rounded-4xl mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Html", "JavaScript", "TailwindCSS"].map((tech, key) => (
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
                                    href="https://josemoreno7.github.io/calculadora-js/"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                Dollar App - Exchange Rate
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A web application that allows you to check the current exchange rate of the US dollar (USD) against multiple international currencies, using the ExchangeRate API. Features:
                                <br />• Real-time query with daily updates.
                                <br />• 150+ currencies with readable names (e.g., PEN - Peruvian Sol)
                                <br />• Automatic PEN update upon upload.
                            </p>
                            <img
                                src={futureImg4}
                                alt="Preview of Agency Website"
                                className="w-full rounded-4xl mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Html", "JavaScript", "TailwindCSS"].map((tech, key) => (
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
                                    href="https://josemoreno7.github.io/app-dolar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                Weather App
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A simple, responsive web application for checking the current weather for any city in the world in real time. Developed with modern technologies such as HTML, TailwindCSS, and pure JavaScript. Features:
                                <br />• Check the current weather by city.
                                <br />• Spanish language support.
                                <br />• Dynamic weather icons.
                            </p>
                            <img
                                src={futureImg5}
                                alt="Preview of Agency Website"
                                className="w-full rounded-4xl mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Html", "JavaScript", "TailwindCSS"].map((tech, key) => (
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
                                    href="https://josemoreno7.github.io/app-clima/"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                Weather App 2.0
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A simple web application to check the current weather in any city in the world using the OpenWeather API. Now with Celsius and Fahrenheit. Features:
                                <br />• Check the current weather by city.
                                <br />• Converting units between Celsius (°C) and Fahrenheit (°F)
                                <br />• Compatible with desktop and mobile.
                                <br />• Spanish language support.
                            </p>
                            <img
                                src={futureImg6}
                                alt="Preview of Agency Website"
                                className="w-full rounded-4xl mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Html", "JavaScript", "TailwindCSS"].map((tech, key) => (
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
                                    href="https://josemoreno7.github.io/app-clima-v2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
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