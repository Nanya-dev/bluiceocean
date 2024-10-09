import React from 'react';
import "./InfoSection.css"

const InfoSection = () => {
  return (
    <section className="info12">
      <div className="info-wrapper">
        <div className="words">
          <div>
            <h5 className="elementor-heading-title">
              Discover the Future of Investment
            </h5>
          </div>
          <div>
            <h2 className="titlehead">
              Why Main Realty<br />is Your Key to Success<br />in Dubai's Property Market
            </h2>
          </div>
          <div className="underline"></div>
          <div className="text2">
            <p className="txt">
              <span style={{ fontWeight: 400 }}>
                In the dynamic landscape of Dubai’s real estate sector, where opportunities abound and innovation reigns supreme, Main Realty emerges as the pinnacle of excellence in off-plan property development. With a steadfast commitment to unparalleled quality and visionary design, Main Realty sets the standard for investment excellence in one of the world’s most vibrant cities.
              </span>
            </p>
          </div>
          <div>
            <a href="#" className="button">
              EXPLORE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;