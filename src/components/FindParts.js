import React from "react";

const FindParts = ({ banner }) => {
  console.log(banner);

  return (
    <div className="block-finder block">
      <div className="decor block-finder__decor decor--type--bottom">
        <div className="decor__body">
          <div className="decor__start" />
          <div className="decor__end" />
          <div className="decor__center" />
        </div>
      </div>
      <div
  className="block-finder__image"
  style={{
    backgroundImage:
      'url("assets/images/modal.png")'
  }}
/>
     
    </div>
  );
};

export default FindParts;
