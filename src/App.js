import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import { data } from "./data";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";

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
                         />
                    ))}
               </div>
          </div>
     );
}

export default App;

// git remote set-url origin https://github.com/crbwebdevonly/frontend-mentor-intermediate-job-listings
