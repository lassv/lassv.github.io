import React from "react";
import Typewriter from "typewriter-effect";

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
                        options={{
                            loop: true,
                        }}
                    />
                </div>

                <div>
                    <button className="px-10 py-3 bg-indigo-600 rounded font-bold hover:bg-indigo-500 ml-4 shadow-lg drop-shadow-xl shadow-indigo-500">
                        <i class="fa-solid fa-code"></i> My projects
                    </button>
                    <button className="px-10 py-3 bg-cyan-600 rounded font-bold hover:bg-cyan-500 ml-4 shadow-lg drop-shadow-xl shadow-cyan-500">
                        <i class="fa-solid fa-id-card"></i> About me
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
