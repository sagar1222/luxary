import React, { useEffect } from "react";
import FindParts from "./FindParts";
import BannersBlock from "./BannersBlock";
import BrandsBlock from "./BrandsBlock";
import CategoryBlock from "./CategoryBlock";
import FeatureBlock from "./FeatureBlock";
import {
  getHomeData,
  getHome,
  getAllProducts,
  getProducts,
} from "../features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";

import StaticSection from "./StaticSection";
import FindByCategory from "./FindByCategory";
import FindByBrands from "./FindByBrands";
import Topcat from "./Topcat";
import Brandicon from "./Brandicon";

const Home = () => {
  // document.title = 'Red Parts — Home'

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHome());
    dispatch(getProducts());
  }, [dispatch]);
  const home_data = useSelector(getHomeData);
  const products = useSelector(getAllProducts);
  // console.log(home_data);
  return (
    <>
      <FindParts banner={home_data.banners} />
      <FeatureBlock />
      <FindByCategory categories={home_data.categories}/>
      <FindByBrands brands={home_data.brand}/>
      <Topcat/>
      <CategoryBlock
        categories={home_data.categories}
        products={products.data}
      />
      <BannersBlock />
      <BrandsBlock brands={home_data.brand} products={products.data} />
      <StaticSection />
     
      <Brandicon/>
      

    </>
  );
};

export default Home;
