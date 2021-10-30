import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import { data } from "./data";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
//======================================================
const ImageD = require("./images/delete.JPG");
const Image1 = require("./images/photosnap.svg").default;
const Image2 = require("./images/manage.svg").default;
const Image3 = require("./images/account.svg").default;
const Image4 = require("./images//myhome.svg").default;
const Image5 = require("./images/loop-studios.svg").default;
const Image6 = require("./images/faceit.svg").default;
const Image7 = require("./images/shortly.svg").default;
const Image8 = require("./images/insure.svg").default;
const Image9 = require("./images/eyecam-co.svg").default;
const Image10 = require("./images/the-air-filter-company.svg").default;
const imageArray = [
     Image1,
     Image2,
     Image3,
     Image4,
     Image5,
     Image6,
     Image7,
     Image8,
     Image9,
     Image10,
];
const imageObj2 = {
     Image1,
     Image2,
     Image3,
     Image4,
     Image5,
     Image6,
     Image7,
     Image8,
     Image9,
     Image10,
};

const imageObj = {
     Image1: require("./images/photosnap.svg").default,
     Image2: require("./images/manage.svg").default,
};

// const Image3 = require("./images/account.svg").default;
// const Image4 = require("./images//myhome.svg").default;
// const Image5 = require("./images/loop-studios.svg").default;
// const Image6 = require("./images/faceit.svg").default;
// const Image7 = require("./images/shortly.svg").default;
// const Image8 = require("./images/insure.svg").default;
// const Image9 = require("./images/eyecam-co.svg").default;
// const Image10 = require("./images/the-air-filter-company.svg").default;
// }
function App() {
     //======================================================
     //======================================================
     const [cards, setCards] = useState([...data]);
     const [filters, setFilters] = useState([]);
     const [count, setCount] = useState(0);

     //======================================================
     //======================================================
     //======================================================

     //======================================================
     // useEffect(() => {
     //      // effect
     //      const rrr = []
     //      console.log(Object.values(cards[0]));
     //      const a1 = Object.values(cards[0]);
     //      const allArray = [...a1, ...cards[0].languages, ...cards[0].tools];
     //      console.log("alll>>", allArray);
     //      console.log(
     //           "inc>>>",
     //           // ["Senior", "Full Time", "Frontend", "CSS2"]
     //           filters.every((e) =>
     //                allArray.includes(e)
     //           )
     //      );
     //      return () => {
     //           // cleanup
     //      };
     // }, [filters]);

     //======================================================
     //======================================================
     useEffect(() => {
          // effect
          if (filters.length === 0) {
               setCards([...data]);
          } else {
               const rrr = [];
               data.forEach((d) => {
                    // console.log(999);

                    // const a1 = Object.values(cards[0]);
                    const a1 = Object.values(d);
                    // const allArray = [...a1, ...cards[0].languages, ...cards[0].tools];
                    const allArray = [...a1, ...d.languages, ...d.tools];
                    // console.log("alll>>", allArray);

                    if (filters.every((f) => allArray.includes(f))) {
                         rrr.push(d);
                    }
               });
               // console.log(Object.values(cards[0]));
               // console.log(Object.values(cards[0]));
               // console.log(
               //      "inc>>>"
               //      // ["Senior", "Full Time", "Frontend", "CSS2"]
               //      // filters.every((e) => allArray.includes(e))
               // );
               setCards([...rrr]);
          }
          return () => {
               // cleanup
          };
     }, [filters]);

     //======================================================
     // console.log(imageArray);
     //======================================================
     return (
          <div className="App-container">
               <div className="header"></div>
               <div className="card-container">
                    {filters.length > 0 && (
                         <div className="filter-container">
                              <Filter
                                   setFilters={setFilters}
                                   filters={filters}
                              />
                         </div>
                    )}
                    {cards.map((e) => (
                         <Card
                              data={e}
                              key={e.id}
                              setFilters={setFilters}
                              filters={filters}
                              // imageArray={imageArray}
                         />
                    ))}
               </div>
          </div>
     );
}

export default App;

// git remote set-url origin https://github.com/crbwebdevonly/frontend-mentor-intermediate-job-listings
