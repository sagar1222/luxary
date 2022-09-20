import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Style.css'

const FindByCategory = ({ categories }) => {
  const [tiles, setTiles] = useState(6);

  return (
    <>
    <div className="block-space block-space--layout--before-footer" />
    <div className="K2-grid coll-3 icon-p-2">
  <h2> categories </h2>
  <div className="row">
                {categories?.map((cate, idx) => {
                  return (
                    idx < tiles && (
                      <div className="col-md-2" key={idx}>
                        <div className="c-icons">
                          <NavLink
                            to="/shop"
                            state={{ id: idx, _id: cate.id, type: "c" }}
                          >
                            {" "}
                            <img src={cate.thumb} alt="" />
                            <h4>{cate.name}</h4>
                          </NavLink>{" "}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
  <br></br>
  <ul>
    <li>
    
      <a href="#" title="#">
      <img src="https://storage.googleapis.com/spares/spares/segment_icon/Brakes.png" alt="5f78ddd36b4ebe9a9ec5ab11"/>
      <span>Brakes</span> </a>
     
    </li>
    <li>
      <a href="#" title="#">
      <img src="https://storage.googleapis.com/spares/segment_icons/Lubrication_Hydraulics.png" alt="5f78ddd36b4ebe9a9ec5ab03"/>
        <span>Oils & Fluids</span>
      </a>
    </li>
    <li>
      <a href="#" title="Seo">
      <img src="https://storage.googleapis.com/spares/spares/segment_icon/Ac.png" alt="5f78ddd36b4ebe9a9ec5ab0f"/>
        <span>AC</span>
      </a>
    </li>
    <li>
      <a href="#" title="News">
      <img src="https://storage.googleapis.com/spares/spares/segment_icon/Fuel-System.png" alt="5f78ddd36b4ebe9a9ec5ab12"/>
        <span>Fuel System</span>
      </a>
    </li>
    <li>
      <a href="#" title="Subscribe">
      <img src="https://storage.googleapis.com/spares/segment_icons/car_accessory-icon-particular-12.png" alt="5f78ddd36b4ebe9a9ec5ab07"/>
        <span>Car Accessories</span>
      </a>
    </li>
    <li>
      <a href="#" title="Telegram">
      <img src="https://storage.googleapis.com/spares/spares/segment_icon/Wheels.png" alt="5f78ddd36b4ebe9a9ec5ab08"/>
        <span>Wheels & Tyre</span>
      </a>
    </li>
    <li>
    
    <a href="#" title="#">
    <img src="https://storage.googleapis.com/spares/segment_icons/Fasteners.png" alt="5f78ddd36b4ebe9a9ec5ab13"/>
    <span>Fasteners</span> </a>
   
  </li>
  <li>
    <a href="#" title="#">
    <img src="https://storage.googleapis.com/spares/new_parts_images/service%20kit-01.svg" alt="62a2e270cdb853eda5198ebf"/>
      <span>Service Kit</span>
    </a>
  </li>
  <li>
    <a href="#" title="Seo">
    <img src="https://storage.googleapis.com/spares/segment_icons/Safety_Ergonomics.png" alt="5f78ddd36b4ebe9a9ec5ab19"/>
      <span>Interiors Comfort & Safety</span>
    </a>
  </li>
  <li>
    <a href="#" title="News">
    <img src="https://storage.googleapis.com/spares/spares/segment_icon/Fuel-System.png" alt="5f78ddd36b4ebe9a9ec5ab12"/>
      <span>Fuel System</span>
    </a>
  </li>
  <li>
    <a href="#" title="Subscribe">
    <img src="https://storage.googleapis.com/spares/segment_icons/car_accessory-icon-particular-12.png" alt="5f78ddd36b4ebe9a9ec5ab07"/>
      <span>Car Accessories</span>
    </a>
  </li>
  <li>
    <a href="#" title="Telegram">
    <img src="https://storage.googleapis.com/spares/spares/segment_icon/Wheels.png" alt="5f78ddd36b4ebe9a9ec5ab08"/>
      <span>Wheels & Tyre</span>
    </a>
  </li>
    
  </ul>
  <button
                style={{ outline: "none" }}
                id="loadMore"
                onClick={() => setTiles(tiles === 6 ? categories?.length : 6)}
              >
                {tiles === 6 ? "Load More" : "Hide"}
              </button>{" "}
</div>
<br></br>

   



    </>
  );
};

export default FindByCategory;
