import React from "react";
import Typewriter from "typewriter-effect";
import Tooltip from "./components/Tooltip";

function App() {
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
                    />
                </div>

                <button className="px-10 py-3 bg-indigo-600 rounded font-bold hover:bg-indigo-500">
                    <i class="fa-brands fa-github"></i> Github
                    <Tooltip text="dsa" className="group-hover:scale-100" />
                </button>
            </div>
        </>
    );
}

export default App;
