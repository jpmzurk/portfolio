import home from "@/public/images/home.jpg";
import lakePage from "@/public/images/lake-page.jpg";
import nextTripClone from "@/public/images/next-trip.jpg";
import pdp from "@/public/images/pdp.jpg";
import posm from "@/public/images/posm.jpg";
import pro from "@/public/images/pro.jpg";
import voltyx from "@/public/images/voltyx.jpg";
import waypointsImage from "@/public/images/waypoints.jpg";
import { StaticImageData } from "next/image";

interface Project {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  link?: string;
  company: string;
  overview?: string;
}
export const projects: Project[] = [
  {
    id: "1",
    name: "Waypoints / Map",
    description:
      "Individually developed CRUD application for Geospatial points in Mapbox, React, and Rails. This included csv import/export, image upload, and custom map styling.",
    image: waypointsImage,
    link: "https://www.omniafishing.com/map",
    company: "Omnia Fishing",
    overview: `<p>Waypoints are a collection of geospatial points that are used by anglers to 
    mark locations of interest. These points can be used to mark fishing spots, hazards, or other points of interest. 
    Waypoints is an embedded CRUD application on top of Omnia's richly interactive map. I led and completed this feature set independently along with other foundational map development. </p>

    <p>Like the broader map app waypoints is built on React, Mapbox, and Rails. It allows users to drag and drop points, store notes, upload images, 
    and import and export .gpx files via CSV. Using basic unique constraints in the persistance layer duplicate waypoints were prevented.  Users can also filter waypoints by type, date or lakes and may share waypoints with other users.</p>
    
    <p>One of the interesting challenges in this build out was as users surpassed 1000 waypoints the map became sluggish. Instead of using native mapbox markers I converted waypoints to a geojson layer.  
    This didn't prove to be inherently difficult, but styling challenges increased when working with the geojson layer and mapbox gl's native styling language.</p>

    <p> The work on this project allowed me refactor how the map was loading and to solve multiple bugs with out of sync modules during the load process.</p>`,
  },
  {
    id: "2",
    name: "Product Detail Page",
    description:
      "Completed two redesigns that added, among other things, a color-hover preview, mobile color picker drawer, product media experience and faceting / filtering of fishing reports.",
    image: pdp,
    link: "https://www.omniafishing.com/p/zman-jack-hammer-chatterbait",
    company: "Omnia Fishing",
    overview: `<p>Like many high traffic pages the PDP saw many careful and modular iterations, of which I led several. One of the most impactful was the hover-color preview where a user can hover over a small image and see the hero image change. 
      The challenge was the current color picker was already sluggish, on top of that the code for that section was full of shared component logic and needed to be refactored. 
      I refactored as little as possible while adding the hover effect and focused on memoized the color picker component and its props so the sluggishness evaporated. </p>
      
      <p>I later had the opportunity to complete a redesign on the mobile color picker where I was afforded the time to complete the refactor of this section.  The result made the upper section more readable and maintainable.  
      I was also afforded time to complete a reskin of the entire page layout at which point I was also able to modularize all of the sections of the PDP</p>
      
      <p>In separate feature work I add the product media carousel, media driven fishing reports carousel above the fold and front end based faceting and filtering section for fishing reports complete with up to date counts.</p>
      `,
  },
  {
    id: "3",
    name: "Home Page",
    description:
      "Led FE development of several above the fold features on the Home Page using A/B testing to determine best performing designs.",
    image: home,
    link: "https://www.omniafishing.com/",
    company: "Omnia Fishing",
    overview: `<p>I led and completed development on multiple above the fold features on the home page. 
    The hero section pictured was the most simple of these and used a combo box powered by a search service that allows a user to receive type ahead options to select a lake 
    which directs to the mapping page.  This experience was tested against its predecessor and yielded metrics that were in line with the business goals of the time.</p>
    
    <p>One challenge on the home page was an authenticated design with a hero and an 
    image preview carousel that operated on x and y axis depending on screen size. I led the research for a new carousel package that was built with flexbox, supported the use of buttons and active indexing, could work on either axis and was as low level as possible. 
    I identified Embla as a suitable choice and was able to easily execute the design. After this work the Emlba carousel was adopted across the site. </p>`,
  },
  {
    id: "4",
    name: "SASS Subscription Page",
    description:
      "Created responsive landing page for Omnia Pro subscription service, and an A/B test to examine relationship between page height and subscription starts.",
    image: pro,
    link: "https://www.omniafishing.com/pro",
    company: "Omnia Fishing",
    overview: `<p>Omnia Pro is a subscription service that offers anglers a curated selection of fishing gear each month. I was tasked with developing a responsive landing page for the service. The page was designed to be simple and easy to navigate, balancing visual story telling and clearly stating 
    the benefits of the service.</p> <p>  I advocated to create an A/B test to examine the relationship between page height and subscription starts based on different page designs.  The experiment was launched and the results indicated a reasonably clear winner that was shipped after the 
    pre-determined amount of experiment exposures. </p>`,
  },

  {
    id: "5",
    name: "Lake Page",
    description:
      "Completed full page redesign and refactored code using React hooks to abstract fetching and complex client logic. The result improved maintainability and performance.",
    image: lakePage,
    link: "https://www.omniafishing.com/w/lake-minnetonka-fishing-reports",
    company: "Omnia Fishing",
    overview: `<p>Completed a full redesign of The Lake Page at Omnia and several follow up iterations of high value components.  
    This was no small task as it had a large amount of coupled frontend logic and shared state to display unique user experiences based on their 
    fishing (species) preferences and time of year.</p>  
    
    <p>The rapid rate iteration and changing business demands meant that most complex logic could not be easily abstracted to our API.  
    The rapid pace also meant that the page had a lot of technical debt and was difficult to maintain.  
    I refactored the code to use React hooks to abstract fetching and complex client logic.  This resulted in a more maintainable and performant page.  
    I also implemented a new design that was more visually appealing and easier to navigate. 
    Notably this design included FE faceting and filtering of fishing reports and a fun use of the Intersection Observer to create an inline responsive menu.  
    </p>
    
    <p>It was during this project that I learned why Martin Fowler said to not refactor and add features at the same time.</p> 
    `,
  },

  {
    id: "6",
    name: "POSM",
    description:
      "Completed responsive site redesign and development, refactoring code to improve performance and maintainability.",
    image: posm,
    link: "https://www.posm.com/",
    company: "Keenspace",
    overview: `<p>I completed multiple projects on the site: a full site responsive redesign, created custom Salesforce integration (formstack), and updated the site to be WCAG 2.0 compliant. </p>
   <p> I also provided long term site management, debugging for hosting issues, DNS problems, and assessing and mitigating security risks. </p>`,
  },
  {
    id: "7",
    name: "NexTrip Clone",
    description: `As a personal project, I cloned the NexTrip web app using React and redux.`,
    image: nextTripClone,
    company: "Personal Project",
    overview: `It is fully responsive and provides users with up-to-date information on bus schedules in the Twin Cities. 
    The app uses the Metro Transit API to fetch data.  This site is currently not publicly hosted, but I am currently working on a rewrite in NextJs.  The code is available on my github.`,
  },
  {
    id: "8",
    name: "Voltyx",
    description:
      "Developed a custom responsive home page for client using HTML, CSS, and JS.",
    image: voltyx,
    link: "https://www.voltyx.com/",
    company: "KeenSpace",
  },
];
