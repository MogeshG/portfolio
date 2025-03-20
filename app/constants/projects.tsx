import StickerIcon from "@/public/sticker.webp";
import MathIcon from "@/public/math.webp";

export interface projectType {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
}

const projects: projectType[] = [
  {
    id: 1,
    name: "Sticker App",
    description: "Developed backend for the android application",
    image: "/sticker.webp",
    url: "https://play.google.com/store/apps/details?id=com.skyraan.stickers",
  },
  {
    id: 2,
    name: "Math Learner App",
    description: "Developed backend for the android application",
    image: "/math.webp",
    url: "https://play.google.com/store/apps/details?id=com.skyraan.mathlearning",
  },
  //   {
  //     id: 3,
  //     name: "Math Learner App",
  //     description: "Developed backend for the android application",
  //     image: "",
  //     url: "https://play.google.com/store/apps/details?id=com.skyraan.mathlearning",
  //   },
  //   {
  //     id: 3,
  //     name: "Math Learner App",
  //     description: "Developed backend for the android application",
  //     image: "",
  //     url: "https://play.google.com/store/apps/details?id=com.skyraan.mathlearning",
  //   },
];

export default projects;
