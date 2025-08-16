import React from "react";
import projectCard from "./projectCard";
import RevealonScroll from "../RevealonScroll";

const Project = () => {
  return (
    <section id="projects" className="p-10 md:p-24 text-white">
      <RevealonScroll>
      <h1 className="text-2xl md:text-4xl text-black font-bold">Projects</h1>

      {/* Center the cards, keep same card height */}
      <div className="py-12 px-8 flex flex-wrap justify-around gap-5">
        <projectCard
          title="News App"
          main="Developed a news app to fetch and display news articles from an external API. Utilized react's state and lifecycle methods with  user authentication using localStorage "
          liveLink="https://material-ui-flax-five.vercel.app/"
          codeLink="https://github.com/Anoop-95/Material-UI"
          card_img="/news_bg.png"
        />
        <projectCard
          title="My Notes"
          main="A full-stack Notes App built with React, Node.js, and JWT authentication, featuring a responsive Bootstrap UI for creating and managing notes."
          liveLink="https://mynotes-app-xi.vercel.app"
          codeLink="https://github.com/Anoop-95/mynotes-app"
          card_img="/notes_bg.jpeg"
        />
        
      </div>
      </RevealonScroll>
    </section>
  );
};

export default Project;
