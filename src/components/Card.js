import React from "react";
import styled from "styled-components";
//======================================================

const Image1 = require("../images/photosnap.svg").default;
const Image2 = require("../images/manage.svg").default;
const Image3 = require("../images/account.svg").default;
const Image4 = require("../images//myhome.svg").default;
const Image5 = require("../images/loop-studios.svg").default;
const Image6 = require("../images/faceit.svg").default;
const Image7 = require("../images/shortly.svg").default;
const Image8 = require("../images/insure.svg").default;
const Image9 = require("../images/eyecam-co.svg").default;
const Image10 = require("../images/the-air-filter-company.svg").default;
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

// const Image1 = require("../images/photosnap.svg");

//======================================================
// import {data: } from "../data"
//======================================================
const StyledImg1 = styled.img`
     height: 100px;
     width: 100px;
`;
//======================================================
const StyledLogo1 = styled.div`
     /* border: 2px solid blue; */
     width: 100%;
     height: 100%;

     background: url(frontend-mentor-intermediate-job-listings${(props) =>
          props.logoPath.split(".")[1] + ".svg"});
     // const kk2 = props.logoPath.split(".");
     // const kk2 = kk.split(".");
     // console.log(kk2);
     // return kk2[1] + ".svg";

     background-repeat: no-repeat;
     background-size: contain;
`;
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
//======================================================
const Card = ({ data, setFilters, filters, imageArray }) => {
     //======================================================
     // console.log(imageArray);
     console.log(data);
     //======================================================
     const handleAddFilterClick = (e) => {
          // console.log(e.target.innerHTML);
          if (!filters.some((f) => f === e.target.innerHTML)) {
               setFilters([...filters, e.target.innerHTML]);
          }
     };
     //======================================================
     // let array1 = [1, 2, 3];
     // const array2 = [1,  3, 4];
     // const array3 = [1, 2];
     // console.count(
     //      "//===console.log(array1.every(a1=>array3.includes(a1)));========="
     // );
     // console.log(array1.every((a1) => array3.includes(a1)));
     // console.count(
     //      "//====console.log(array1.every((a1) => array2.includes(a1)));======="
     // );
     // console.log(array1.every((a1) => array2.includes(a1)));
     // console.count(
     //      "//==console.log(array3.every((a3) => array2.includes(a3)));=========="
     // );
     // console.log(array3.every((a3) => array2.includes(a3)));

     // // console.log(data.logo);
     // console.count("//======================================================");
     // console.count("//======================================================");
     // console.count("//============console.log(Object.values(data));======");
     // console.log(Object.values(data));
     // console.count("//======================================================");
     // console.count("//======================================================");
     // console.count("//======================================================");
     // Object.values(data).forEach((e) => console.log(e));

     //======================================================
     return (
          <div className={data.featured ? "card featured" : "card"}>
               <div className="top">
                    <div className="logo">
                         {data.id === 1 && <img src={Image1} alt="" />}
                         {data.id === 2 && <img src={Image2} alt="" />}
                         {data.id === 3 && <img src={Image3} alt="" />}
                         {data.id === 4 && <img src={Image4} alt="" />}
                         {data.id === 5 && <img src={Image5} alt="" />}
                         {data.id === 6 && <img src={Image6} alt="" />}
                         {data.id === 7 && <img src={Image7} alt="" />}
                         {data.id === 8 && <img src={Image8} alt="" />}
                         {data.id === 9 && <img src={Image9} alt="" />}
                         {data.id === 10 && <img src={Image10} alt="" />}
                    </div>
                    <div className="info-wrap">
                         <div className="line1">
                              <div className="company">
                                   {data.company + data.id}
                              </div>
                              {data.new && <div className="new">NEW!</div>}
                              {data.featured && (
                                   <div className="featured">FEATURED</div>
                              )}
                         </div>
                         <div className="line2">{data.position}</div>
                         <div className="line3">
                              <div className="ago">{data.postedAt}</div>
                              <li className="contract">{data.contract}</li>
                              <li className="location">{data.location}</li>
                              {/* <div className="ago">{data.postedAt}</div>
                              <div className="contract">{data.contract}</div>
                              <div className="location">{data.location}</div> */}
                         </div>
                    </div>
               </div>
               <hr />
               <div className="bottom">
                    <ul>
                         <li onClick={handleAddFilterClick}>{data.role}</li>
                         <li onClick={handleAddFilterClick}>{data.level}</li>

                         {data.tools.map((e, i) => (
                              <li onClick={handleAddFilterClick} key={i}>
                                   {e}
                              </li>
                         ))}
                         {data.languages.map((e, i) => (
                              <li onClick={handleAddFilterClick} key={i}>
                                   {e}
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default Card;
