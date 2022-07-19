import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from "./assets/me.jpeg";
import Typewriter from "typewriter-effect";

function App() {
    const [about, setAbout] = useState(false);

    const skills = [
        {
            id: "html",
            color: "#e34f26",
        },

        {
            id: "css",
            color: "#2965f1",
        },

        {
            id: "javascript",
            color: "#f1e05a",
        },

        {
            id: "react",
            color: "#61dbfb",
        },

        {
            id: "node",
            color: "#43853d",
        },

        {
            id: "mongodb",
            color: "#00684A",
        },

        {
            id: "vite",
            color: "#646cff",
        },

        {
            id: "Facile CSS",
            color: "#ea4442",
        },

        {
            id: "bootstrap",
            color: "#563d7c",
        },

        {
            id: "tailwind css",
            color: "#0ba5e9",
        },

        {
            id: "GitHub",
            color: "#24292e",
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center text-center text-white h-[68vh] md:h-[85vh]">
                <h1 className="font-edu text-5xl mb-4">Lasse Vestergaard</h1>

                <div className="text-gray-300 font-mono mb-4">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`My name is Lasse V`)
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString(
                                    `Im a frontend developer, from denmark.`
                                )
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString(
                                    `I spend the most of my time coding.`
                                )
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString(`I love to learn new things.`)
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString(`Im am 16 years old.`)
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </div>

                <img
                    className="w-[15rem] h-[15rem] rounded-full border-2 border-white shadow-lg mb-4"
                    src={photo}
                    alt="Lasse Vestergaard"
                />

                <div>
                    <Link
                        to={"/projects"}
                        className="px-10 py-3 bg-indigo-600 rounded font-bold hover:bg-indigo-500 ml-4 shadow-lg drop-shadow-2xl shadow-indigo-500"
                    >
                        <i class="fa-solid fa-code"></i> My projects
                    </Link>
                    <button
                        onClick={() => setAbout(!about)}
                        className="px-10 py-3 bg-cyan-500 rounded font-bold hover:bg-cyan-400 ml-4 shadow-lg drop-shadow-2xl shadow-cyan-500"
                    >
                        <i class="fa-solid fa-id-card"></i> About me
                    </button>
                </div>

                {about && (
                    <div className="text-gray-300 font-mono mb-5 mt-10">
                        <h1 className="text-4xl font-bold text-gray-100 mb-4">
                            About Me
                        </h1>
                        <p className="mb-10">
                            I am a frontend developer, from denmark. <br></br>I
                            spend the most of my time coding. <br></br> I love
                            to learn new things. I am 16 years old.
                        </p>

                        <h1 className="text-4xl font-bold text-gray-100 mb-4">
                            Skills
                        </h1>
                        <ul className="text-gray-100">
                            {skills.map((skill) => (
                                <li
                                    className="mb-5 uppercase"
                                    style={{ color: skill.color }}
                                    key={skill.id}
                                >
                                    {skill.id}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
