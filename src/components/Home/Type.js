import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Research Paper Writing",
          "Review Paper Writing",
          "Thesis Writing",
          "Graphical Abstract Creation",
          "PowerPoint Presentation",
          "Conference Proceedings",
          "Research Publication Assistance (Scopus, Web of Science, UGC)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
