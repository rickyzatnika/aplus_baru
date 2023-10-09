import { GiTeamIdea } from "react-icons/gi"
import { MdOutlineAddShoppingCart, MdMoreTime } from "react-icons/md"
import { SiGotomeeting } from "react-icons/si"



// export function getDataBySlug(slug) {
//   return dummyData.find((item) => item.slug === slug) || null;
// }

export const choose = [
  {
    id: 1,
    title: "INSPIRING IDEA AND ALWAYS EXCITED",
    desc: "Working with heart and passion, we always try our best to fulfill your imagination desire events and production needs.",
    icons: <GiTeamIdea/>,
  },
  {
    id: 2,
    title: "One Stop Shop",
    desc: "We are committed to be a one-stop shop for your event & production needs. Let us know what you need and we`ll do the rest.",
    icons: <MdOutlineAddShoppingCart/>,
  },
  {
    id: 3,
    title: "We Give it More",
    desc: "The urge to deliver more than client`s expectations has always been our top priority.",  
    icons: <MdMoreTime/>,
  },
  {
    id: 4,
    title: "Consultation Meetings",
    desc: "The best ideas come from meetings, which is why when working with us there is no such thing as too many meetings.",
    icons: <SiGotomeeting/>,
  },
];
