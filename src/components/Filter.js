import React from "react";
import IconRemove from "../images/icon-remove.svg";

const items = ["item1", "item2", "item3", "item3", "item3"];
// {items}
const Filter = ({ filters, setFilters }) => {
     return (
          <div className="filter">
               <div className="filter-items-wrap">
                    {filters.map((e) => (
                         <div className="filter-item">
                              <div className="name">{e}</div>
                              <div
                                   className="icon-wrap"
                                   onClick={() => {
                                        setFilters(
                                             filters.filter((f) => f !== e)
                                        );
                                   }}
                              >
                                   <img src={IconRemove} alt="" />
                              </div>
                         </div>
                    ))}
               </div>
               <div
                    className="clear"
                    onClick={() => {
                         setFilters([]);
                    }}
               >
                    Clear
               </div>
          </div>
     );
};

export default Filter;
