import React from "react";

function Projects() {
    const projects = [
        {
            id: 1,
            name: "Facile CSS",
            description:
                "A simple functional CSS framework for building fast, beautiful, clean websites.",
            image: "https://facilecss.com/icon.png",
            url: "https://www.facilecss.com",
            github: "https://github.com/facilecss/core",
        },

        {
            id: 2,
            name: "Niels-IT",
            description:
                "Im created a website for my dads freind, and he have his own small IT company, called `Niels-IT`.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F1%2FIT-Transparent-Image.png&f=1&nofb=1",
            url: "https://niels-it.netlify.app",
            github: "https://github.com/lassv/niels-it",
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center text-center text-white h-[68vh] md:h-[85vh] mt-10">
                <h1 className="font-edu text-5xl mb-10">My projects</h1>
                <div className="flex flex-wrap justify-center items-center">
                    {projects.map((project) => (
                        <div className="w-full md:w-1/2 lg:w-1/2">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden ml-2 mb-2 mr-2">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={project.image}
                                    alt={project.name}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-black text-xl mb-2">
                                        {project.name}
                                    </div>
                                    <p className="text-gray-500">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="px-6 py-4">
                                    <a
                                        className="inline-block text-sm px-4 py-4 leading-none border rounded bg-indigo-600 text-white hover:bg-indigo-500 transition ease-in-out duration-150"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i class="fa-solid fa-external-link-alt"></i>
                                        Visit website
                                    </a>
                                    <a
                                        className="inline-block text-sm px-4 py-4 leading-none border rounded bg-indigo-600 text-white hover:bg-indigo-500 transition ease-in-out duration-150 ml-4"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i class="fa-brands fa-github"></i>
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
