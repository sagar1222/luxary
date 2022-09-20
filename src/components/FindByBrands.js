import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FindByBrands = ({ brands }) => {
  const [tiles, setTiles] = useState(6);

  return (
    <>
    <div className="block-space block-space--layout--divider-nl" />

    <div className="container-fluid">
  <div className="block-banners block">
    <img src="assets/images/ads-banner.png" className="img-fluid" />
  </div>
</div>

    </>
  );
};

export default FindByBrands;
