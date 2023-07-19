import React from "react";

function ProjectItem({ technologies }) {
  return (
    <div>
      {technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>
  );
}

export default ProjectItem;
