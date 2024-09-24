import home from "@/public/images/home.jpg";
import lakePage from "@/public/images/lake-page.jpg";
import nextTripClone from "@/public/images/next-trip.jpg";
import pdp from "@/public/images/pdp.jpg";
import posm from "@/public/images/posm.jpg";
import pro from "@/public/images/pro.jpg";
import voltyx from "@/public/images/voltyx.jpg";
import waypointsImage from "@/public/images/waypoints.jpg";

export const projects = [
  {
    id: "1",
    name: "Geospatial markers",
    description:
      "Individually developed CRUD application for Geospatial points in Mapbox, React, and Rails. This included csv import/export, image upload, and custom map styling.",
    image: waypointsImage,
    link: "https://www.omniafishing.com/map",
    company: "Omnia Fishing",
    overview: `Waypoints are a collection of geospatial points that are used by anglers to 
    mark locations of interest. These points can be used to mark fishing spots, hazards, or other points of interest. 
    Waypoints is an embedded CRUD application that allows users to create, read, update, and delete waypoints. 
    Like the broader app waypoints is built on it uses React, Mapbox, and Rails. It allows users to drag and drop points, store notes, upload images, 
    and import and export .gpx files via CSV. Users can also filter waypoints by type, date or lakes and may share waypoints with other users.`,
  },
  {
    id: "2",
    name: "Product Detail Page",
    description:
      "Completed several redesigns and added color-hover preview effect, mobile color picker drawer, media carousel and personalized media based fishing reports.",
    image: pdp,
    link: "https://www.omniafishing.com/p/zman-jack-hammer-chatterbait",
    company: "Omnia Fishing",
  },
  {
    id: "3",
    name: "SASS Subscription Page",
    description:
      "Created responsive landing page for Omnia Pro subscription service, and an A/B test to examine relationship between scroll depth and subscription starts.",
    image: pro,
    link: "https://www.omniafishing.com/pro",
    company: "Omnia Fishing",
  },
  {
    id: "4",
    name: "Home Page",
    description:
      "Led FE development of multiple iterations for Home Page using A/B testing to determine best performing design.",
    image: home,
    link: "https://www.omniafishing.com/",
    company: "Omnia Fishing",
    overview: "",
  },
  {
    id: "5",
    name: "Ommnia Lake Page",
    description:
      "Completed full page redesign and refactored code using React hooks to abstract fetching and complex client logic. The result improved maintainability and performance.",
    image: lakePage,
    link: "https://www.omniafishing.com/w/lake-minnetonka-fishing-reports",
    company: "Omnia Fishing",
  },

  {
    id: "6",
    name: "POSM",
    description:
      "Completed responsive site redesign and development, refactoring code to improve performance and maintainability.",
    image: posm,
    link: "https://www.posm.com/",
    company: "KeenSpace & POSM",
  },
  {
    id: "7",
    name: "Voltyx",
    description:
      "Created a custom home page for client using vanilla HTML, CSS, and JS.",
    image: voltyx,
    link: "https://www.voltyx.com/",
    company: "KeenSpace",
  },
  {
    id: "8",
    name: "NexTrip Clone",
    description:
      "As a personal project, I cloned the NexTrip app using React and redux. Currently working on a rewrite to Nextjs. ",
    image: nextTripClone,
    company: "Personal Project",
  },
];
