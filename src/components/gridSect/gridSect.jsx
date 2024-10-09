import React from 'react'
import "./gridSect.css"

const gridSect = () => {
  return (
    <div className="gridsectcont">
    <div className="grid">
        <div>
            <h1 className="header">Main Realty</h1>
            <h2 className="main-title title">Exceptional Real Estate Developer in Dubai</h2>
            <hr className="divider" />
            <p className="description">At Main Realty, we believe that everyone deserves a home that fits their unique lifestyle and preferences.</p>
            <button className="button">EXPLORE MORE</button>
        </div>
        <div className="grid2cont">
        <div className="grid-2">
            <img src="https://placehold.co/600x400" alt="Two people in construction attire looking at blueprints" className="image" />
            <img src="https://placehold.co/600x400" alt="Person in a suit presenting data on a tablet" className="image" />
            <img src="https://placehold.co/600x400" alt="Person holding a small model house" className="image" />
            <img src="https://placehold.co/600x400" alt="Person drawing architectural plans" className="image" />
        </div>
        </div>
    </div>
</div>
  );
};

export default gridSect
