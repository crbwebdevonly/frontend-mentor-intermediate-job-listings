import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import { data } from "./data";
import Filter from "./components/Filter";

function App() {
     return (
          <div className="App-container">
               <div className="header"></div>
               <div className="card-container">
                    <div className="filter-container">
                         {false && <Filter />}
                    </div>
                    {data.map((e) => (
                         <Card data={data} />
                    ))}
               </div>
          </div>
     );
}

export default App;

// git remote set-url origin https://github.com/crbwebdevonly/frontend-mentor-intermediate-job-listings
