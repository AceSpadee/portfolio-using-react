import Project1 from "../../assets/img3.png";
import Weather from "../../assets/img2.png";
import Techblog from "../../assets/img1.png";
import RoofTopCat from "../../assets/img5.png";
import MusicPlayer from "../../assets/MusicHome.png";
import PathTracker from "../../assets/img4.png";

const projectsData = [
  {
    title: "Project_1",
    image: Project1,
    repoLink: "https://github.com/AceSpadee/Project-1",
    liveLink: "https://acespadee.github.io/Project-1/",
    private: false,
  },
  {
    title: "Weather-Dashboard",
    image: Weather,
    repoLink: "https://github.com/AceSpadee/Weather-dashboard",
    liveLink: "https://acespadee.github.io/Weather-dashboard/",
    private: false,
  },
  {
    title: "Techblog-Website",
    image: Techblog,
    repoLink: "https://github.com/AceSpadee/Tech-Blog-website",
    liveLink: "https://tech-blog-website-775s.onrender.com",
    private: false,
  },
  {
    title: "Rooftop-Cat",
    image: RoofTopCat,
    repoLink: "https://github.com/AceSpadee/ambient-loader",
    liveLink: "https://ambient-loader.onrender.com",
    private: false,
  },
  {
    title: "Music-Player",
    image: MusicPlayer,
    repoLink: "",
    liveLink: "https://music-player-s59b.onrender.com",
    private: true,
    mockSite: "Frontend Demo Only – No Backend",
  },
  {
    title: "Path-Tracker",
    image: PathTracker,
    repoLink: "",
    liveLink: "",
    private: true,
    mockSite: "🔒 Private Project – Code & Demo Not Public"
  }
];

export default projectsData;