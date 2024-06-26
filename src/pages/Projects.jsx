import { Link } from "react-router-dom";
import "../ThumbnailGrid.css"; // Make sure to create this CSS file

const websites = [
  { name: "Portfolio", url: "https://curtisclayton-portfolio.netlify.app" },
  { name: "instagram Clone", url: "https://curtisgram.netlify.app" },
  { name: "JavaScript Mandrakes", url: "https://curtisclayton-mandrake.netlify.app" },
  { name: "Carnage", url: "https://carnage-by-curtis.netlify.app" },
  // Add more websites here
];

function Projects() {
  return (
    <div className="grid-container mt-20 object-cover grid-cols-3 justify-evenly " >
      {websites.map((site, index) => (
        <div className="thumbnail object-cover h-full w-96 flex justify-evenly" key={index}>
          <iframe
            src={site.url}
            title={site.name}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
          
        <Link to={site.url} target="_blank" rel="noreferrer">
          <div className="thumbnail-title ">{site.name}</div>
         
          </Link>
        </div>
      ))}
      
    </div>
  );
}

export default Projects;
