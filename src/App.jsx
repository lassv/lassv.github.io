import React from "react";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center text-white h-[68vh] md:h-[85vh]">
        <h1 className="font-edu text-5xl mb-4">Lasse Vestergaard</h1>

        <div className="text-gray-300 font-mono">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`My name is Lasse V`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`Im a frontend developer, from denmark.`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`I spend the most of my time coding.`)
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
      </div>
    </>
  );
}

export default App;
