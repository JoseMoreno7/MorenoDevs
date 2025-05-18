import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) =>{
                console.error("Error sending email:", error);
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    const whatsappNumber = "51950542468";
    const whatsappMessage = "Hola, estoy interesado en contactarte";

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
                            to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        {" "}
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name ..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                type="message"
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your message ..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value})}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mb-8 text-center py-8">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" bg-transparent border-2 border-cyan-400 text-cyan-400 p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 md:p-4"
                        >
                            <FaWhatsapp className="text-2xl md:text-3xl px-1" />
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}