import "../css/Home.css";
import Homecarousel from "../components/Homecarousel";
import About from "../components/About";
import Homedepartments from "../components/Homedepartments";
import Homerecentnews from "../components/Homerecentnews";
import {
  initialNewsData,
  HomedepartmentsData,
  photos,
  aboutData,
} from "../utils";

export default function Home() {
  return (
    <>
      <Homecarousel photos={photos} />
      <About aboutData={aboutData} />
      <Homedepartments homedepartments={HomedepartmentsData} />
      <Homerecentnews recentNews={initialNewsData} />
    </>
  );
}
