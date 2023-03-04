import React from 'react';
import SchemeColor from "./SchemeColor";
import './style.css';


const Palette = ({ image, name, attributionUrl, attributionName, colors, description, direction }) => {
  
  const dir = direction === 'vertical' 
    ? 'palette-scheme palette-scheme--vertical' 
    : 'palette-scheme palette-scheme--horizontal';

  return (
    <>
    <div className="palette">
      <div className={dir}>
        <img className="scheme-image" src={image} alt={name} />
        <div className="scheme-colors">

          {colors.map((color) => 
            <SchemeColor color={color} key={color} />
          )}

        </div>
      </div>
      <div className="palette-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Photo by <a href={attributionUrl} target="_blank">{attributionName}</a>.</p>
      </div>
    </div>
    </>
  )
}

export default Palette;
