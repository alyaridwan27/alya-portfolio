import React, { useState } from 'react';

// --- Inline SVG Icons (Replacing lucide-react dependency) ---

// Icon: Sparkles
const IconSparkles = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10a.5.5 0 0 0-.5-.5h-2.18l-1.92-2.73a.5.5 0 0 0-.8-0.01L12.5 9.5H10a.5.5 0 0 0-.5.5v2.18l-2.73 1.92a.5.5 0 0 0-0.01.8l2.74 1.91h2.18a.5.5 0 0 0 .5.5v-2.18l1.92-2.73a.5.5 0 0 0 0.01-.8L16 12.5H18a.5.5 0 0 0 .5-.5V10h2.5zM22 2L18 6M6 18L2 22M20 18L16 22M4 4L0 8"/></svg>
);

// Icon: Code (Used for AI Planner & Code Generator)
const IconCode = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

// Icon: Bug (Used for Testing focus)
const IconBug = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 20a2.5 2.5 0 0 1-2.5-2.5V7a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v10.5a2.5 2.5 0 0 1-2.5 2.5h-15z"></path><path d="M12 17L12 11"></path><path d="M12 11l-3 3"></path><path d="M12 11l3 3"></path><path d="M12 4.5v-2.5"></path><path d="M12 4.5c-3 0-5.5 2-5.5 4.5"></path><path d="M12 4.5c3 0 5.5 2 5.5 4.5"></path></svg>
);

// Icon: Smartphone (Used for Native Project)
const IconSmartphone = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>
);

// Icon: TrendingUp (Used for Code Generator Project)
const IconTrendingUp = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 10.5 12.5 5.5 17.5"></polyline><polyline points="18 7 22 7 22 11"></polyline></svg>
);

// Icon: Briefcase (Work/Projects)
const IconBriefcase = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

// Icon: Mail
const IconMail = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><path d="M2 5L12 12L22 5"></path></svg>
);

// Icon: Github
const IconGithub = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22.1c-2.4 0-4.4-0.9-5.9-2.4C7.6 18.2 6.7 16.2 6.7 13.8c0-2.3 0.8-4.3 2.3-5.8 1.5-1.5 3.5-2.3 5.8-2.3 2.3 0 4.3 0.8 5.8 2.3 1.5 1.5 2.3 3.5 2.3 5.8 0 2.4-0.9 4.4-2.4 5.9-1.5 1.5-3.5 2.4-5.9 2.4zM22.1 13.8c0 2.3-0.8 4.3-2.3 5.8-1.5 1.5-3.5 2.3-5.8 2.3-2.3 0-4.3-0.8-5.8-2.3-1.5-1.5-2.3-3.5-2.3-5.8 0-2.3 0.8-4.3 2.3-5.8 1.5-1.5 3.5-2.3 5.8-2.3 2.3 0 4.3 0.8 5.8 2.3 1.5 1.5 2.3 3.5 2.3 5.8zM15 9.8c-1.3 0-2.5 0.5-3.4 1.4-0.9 0.9-1.4 2.1-1.4 3.4 0 1.3 0.5 2.5 1.4 3.4 0.9 0.9 2.1 1.4 3.4 1.4 1.3 0 2.5-0.5 3.4-1.4 0.9-0.9 1.4-2.1 1.4-3.4 0-1.3-0.5-2.5-1.4-3.4-0.9-0.9-2.1-1.4-3.4-1.4z"></path></svg>
);

// Icon: Linkedin
const IconLinkedin = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// Icon: FileText
const IconFileText = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
);


// --- Global Data and Configuration ---

// Personal Info
const user = {
    name: "Alya Nursalma Ridwan",
    major: "Double Degree CS (BINUS) & Software Engineering (La Trobe)",
    tagline: "Building robust, full-stack applications with a focus on comprehensive testing and maintainability.",
    links: {
        github: "https://github.com/alyaridwan27",
        linkedin: "https://www.linkedin.com/in/alya-ridwan-a0a0b123b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        resume: "#", // Placeholder for now
        email: "alyanursalmaridwan@gmail.com"
    }
};

// Project Data
const projects = [
    {
        id: 1,
        title: "AI Travel Planner (Gemini & Firebase)",
        tags: ["React", "Gemini AI", "Firebase", "TypeScript"],
        description: "A travel itinerary generator powered by the Gemini AI API. Features include destination/budget input, itinerary generation, and real-time trip saving via Firestore.",
        status: "Live Demo Available (Core features stable)",
        notes: "Note: Google Autocomplete is currently disabled due to API changes; all other Firebase and core Gemini logic is fully functional and stable.",
        color: "bg-yellow-200/90",
        icon: IconCode,
        links: { demo: "https://ai-travel-planner-lac.vercel.app/", github: "https://github.com/alyaridwan27/ai-travel-planner", video: "https://www.youtube.com/watch?v=OAA_8KccAdg" }
    },
    {
        id: 2,
        title: "CarMatch (Native Mobile Platform)",
        tags: ["React Native", "Firebase Auth/Store", "Mobile", "Jest/Test Lab"],
        description: "A cross-platform car selling application allowing real-time listings, location tracking, and user interaction. Demonstrates full-stack mobile development expertise.",
        status: "Group Project: Video Demo & Test Report Available",
        notes: "Testing Focus: Implemented Firebase Test Lab, Jest Unit Testing, and Usability Testing to ensure native stability and user experience.",
        color: "bg-pink-200/90",
        icon: IconSmartphone,
        links: { github: "https://github.com/alyaridwan27/CarMatch", video: "https://www.youtube.com/watch?v=m_1CeTgUmLY" }
    },
    {
        id: 3,
        title: "Code Generator (Next.js & PostgreSQL)",
        tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Playwright/JMeter"],
        description: "A full-stack application for generating code snippets, featuring comprehensive CRUD operations and robust persistence via a PostgreSQL database.",
        status: "Live Demo Available (Extensive Testing Report)",
        notes: "Quality Assurance: Project was thoroughly tested using Playwright (E2E), Lighthouse (Performance), and JMeter (Load Testing).",
        color: "bg-blue-200/90",
        icon: IconTrendingUp,
        links: { demo: "https://cwa-assignment1.vercel.app/", github: "https://github.com/alyaridwan27/CWA-Assignment1" }
    },
];

// Skill/Focus Data (Sticky Notes)
const focusAreas = [
    {
        title: "Testing & QA",
        description: "Expertise in unit (Jest), E2E (Playwright), load (JMeter), and usability testing across web and native platforms.",
        color: "bg-yellow-300",
        rotation: "rotate-[-2deg]",
        icon: IconBug
    },
    {
        title: "Full-Stack (Next/Prisma)",
        description: "Proficient in building modern stack applications: Next.js, TypeScript, REST APIs, and database persistence (Prisma/PostgreSQL).",
        color: "bg-pink-300",
        rotation: "rotate-[1deg]",
        icon: IconCode
    },
    {
        title: "Firebase Ecosystem",
        description: "Advanced use of Firebase Authentication, Firestore (real-time data), and Storage in both React and React Native environments.",
        color: "bg-purple-300",
        rotation: "rotate-[3deg]",
        icon: IconSparkles
    }
];

// --- Utility Components ---

const StickyNote = ({ title, description, color, rotation, icon: Icon }) => (
    <div
        className={`p-6 md:p-8 ${color} ${rotation} shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-black rounded-xl`}
        style={{ transform: `rotate(${rotation})` }}
    >
        <div className="flex items-center space-x-3 mb-2">
            <Icon className="w-6 h-6 text-black" />
            <h3 className="text-xl font-bold font-inter text-black">{title}</h3>
        </div>
        <p className="text-sm text-gray-800">{description}</p>
    </div>
);

const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    return (
        <div className={`p-5 rounded-xl border border-gray-300 shadow-md ${project.color} hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold font-inter text-gray-800">{project.title}</h3>
                <Icon className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-sm text-gray-700 mb-3">{project.description}</p>
            {project.notes && <p className="text-xs italic text-gray-500 mb-3">{project.notes}</p>}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-white rounded-full border border-gray-400 text-gray-700">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-4">
                {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-black hover:text-gray-700 transition duration-150 underline decoration-wavy decoration-black/50">
                        Live Demo
                    </a>
                )}
                {project.links.video && (
                    <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-black hover:text-gray-700 transition duration-150">
                        Video Demo
                    </a>
                )}
                {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-black hover:text-gray-700 transition duration-150">
                        GitHub <span aria-hidden="true">&rarr;</span>
                    </a>
                )}
            </div>
        </div>
    );
};

// --- Main App Component ---

const App = () => {
    // State for simple form simulation (no actual submission here)
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [messageSent, setFormSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to Firebase/backend endpoint
        console.log("Form Submitted:", formState);
        setFormSent(true);
        setTimeout(() => setFormSent(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white font-inter text-gray-900 p-4 md:p-8">
            {/* Global Container with Border Styling */}
            <div className="max-w-7xl mx-auto border-thin p-6 md:p-10 lg:p-12 relative">
                {/* Decorative Corners (Matching the inspiration image) */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black"></div>

                {/* --- Navigation (Top Right) --- */}
                <header className="flex justify-between items-center mb-16"> {/* Changed to justify-between */}
                    {/* Site Title/Logo (Top Left) */}
                    <div className="font-bold text-lg text-black">Alya Ridwan's Portfolio</div> {/* Added this div */}
                    <nav className="text-sm space-x-6 text-gray-700 hidden sm:flex">
                        <a href="#projects" className="hover:text-black">Projects</a>
                        <a href="#about" className="hover:text-black">About</a>
                        <a href="#contact" className="hover:text-black">Contact</a>
                    </nav>
                </header>

                {/* --- 1. Hero Section --- */}
                <section id="hero" className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    <div className="lg:col-span-2">
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4">
                            I engineer scalable React applications.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg">
                            {user.major} | {user.tagline}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#projects" className="flex items-center justify-center px-6 py-3 border border-black text-white bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-150">
                                View My Work
                            </a>
                            <a href={user.links.resume} className="flex items-center justify-center px-6 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition duration-150">
                                <IconFileText className="w-4 h-4 mr-2" /> Resume
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- 2. What I Do / Focus Areas (Sticky Notes) --- */}
                <section id="skills" className="mb-24">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <IconSparkles className="w-6 h-6 mr-2 text-yellow-500" /> Technical Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {focusAreas.map((area, index) => (
                            <StickyNote key={index} {...area} />
                        ))}
                    </div>
                </section>

                {/* --- 3. Project Showcase --- */}
                <section id="projects" className="mb-24">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <IconBriefcase className="w-6 h-6 mr-2 text-blue-500" /> Featured Projects
                        <span className="text-sm font-normal text-gray-500 ml-4">({projects.length} key projects for internship review)</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                {/* --- 4. About Me (Work/Academic Experience) --- */}
                <section id="about" className="mb-24">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <IconFileText className="w-6 h-6 mr-2 text-green-500" /> Academic Background & Skills
                    </h2>
                    <div className="p-8 border-2 border-black rounded-xl bg-gray-50/50 shadow-inner">
                        <p className="mb-4 text-gray-700 font-semibold">
                            I am {user.name}, a double-degree student focusing on Computer Science and Software Engineering. My curriculum has emphasized core principles, while my project work has focused on industry-relevant, production-ready development.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="w-6 h-6 flex items-center justify-center bg-black text-white text-sm font-bold rounded-full mr-3 shrink-0">1</span>
                                <div>
                                    <p className="font-semibold">Core Expertise: {user.major}</p>
                                    <p className="text-sm text-gray-600">Combines rigorous CS theory from BINUS with the practical, systematic approach of Software Engineering from La Trobe University, Australia.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 flex items-center justify-center bg-black text-white text-sm font-bold rounded-full mr-3 shrink-0">2</span>
                                <div>
                                    <p className="font-semibold">Version Control & Collaboration</p>
                                    <p className="text-sm text-gray-600">Extensive experience with Git and GitHub, utilizing branching, merging, and pull requests for effective group project collaboration.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* --- 5. Contact Form --- */}
                <section id="contact" className="mb-12 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <IconMail className="w-6 h-6 mr-2 text-red-500" /> Get in Touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6 p-8 border-2 border-black rounded-xl bg-gray-50/50 shadow-xl">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border-b border-gray-400 p-2 focus:outline-none bg-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border-b border-gray-400 p-2 focus:outline-none bg-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell me about your project or opportunity!</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                value={formState.message}
                                onChange={handleChange}
                                className="mt-1 block w-full border-b border-gray-400 p-2 focus:outline-none bg-transparent resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 border border-black text-white bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-150"
                        >
                            Send Message
                        </button>
                        {messageSent && (
                            <p className="text-green-600 text-center sm:text-left mt-2">Message simulated! Thanks for reaching out.</p>
                        )}
                    </form>
                </section>

                {/* --- Footer --- */}
                <footer className="pt-8 border-t border-black mt-16 text-center text-sm text-gray-500">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href={user.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><IconGithub className="w-5 h-5" /></a>
                        <a href={user.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition"><IconLinkedin className="w-5 h-5" /></a>
                        <a href={`mailto:${user.links.email}`} className="hover:text-black transition"><IconMail className="w-5 h-5" /></a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} {user.name} | Built with React & Tailwind</p>
                </footer>
            </div>
        </div>
    );
};

export default App;