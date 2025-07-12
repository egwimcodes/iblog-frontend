import { FaBolt, FaRobot, FaUserCircle } from "react-icons/fa";
import { Feature } from "../interface/features";

export const features: Feature[] = [
  {
    title: "AI Writer",
    desc: "Generate blog ideas, outlines, and full posts with AI assistance.",
    icon: (
      <FaRobot className="text-3xl text-purple-500 group-hover:scale-110 group-hover:text-pink-500 transition-transform duration-300" />
    ),
    gradient: "from-purple-500 via-pink-400 to-purple-600",
  },
  {
    title: "Custom Profiles",
    desc: "Showcase your content and personality with personalized pages.",
    icon: (
      <FaUserCircle className="text-3xl text-pink-500 group-hover:scale-110 group-hover:text-purple-500 transition-transform duration-300" />
    ),
    gradient: "from-pink-500 via-purple-400 to-pink-600",
  },
  // {
  //   title: "Engagement Tools",
  //   desc: "Real-time feedback, shares, highlights, and reactions.",
  //   icon: (
  //     <FaUserCircle className="text-3xl text-green-500 group-hover:scale-110 group-hover:text-purple-500 transition-transform duration-300" />
  //   ),
  //   gradient: "from-pink-500 via-purple-400 to-pink-600",
  // },
  {
    title: "Engagement Tools",
    desc: "Real-time feedback, shares, highlights, and reactions.",
    icon: (
      <FaBolt className="text-3xl text-yellow-400 group-hover:scale-110 group-hover:text-pink-500 transition-transform duration-300" />
    ),
    gradient: "from-yellow-400 via-pink-400 to-purple-500",
  },

];
