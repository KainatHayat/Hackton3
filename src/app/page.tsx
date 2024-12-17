import Image from "next/image";
import TopHeader from "./component/TopHead";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Editorpick from "./component/Editorpick";
import FeatureProducts from "./component/FeatureProducts";
import Summer2020 from "./component/Summer2020";
import FeaturePost from "./component/FeaturePost";

export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Hero/>
      <Editorpick/>
      <FeatureProducts/>
      <Summer2020/>
      <FeaturePost/>
    </div>
  );
}
