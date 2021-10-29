import React from "react";
import styled from "styled-components";

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
const Card = ({ data, setFilters, filters }) => {
     //======================================================
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
                         <StyledLogo1 logoPath={data.logo}></StyledLogo1>
                         {/* <StyledImg1 src={data.logo} alt="" /> */}
                         {/* <img
                              src={require("../images/manage.svg").default}
                              // src={require(`. + ${data.logo}).default}
                              alt=""
                         /> */}
                         {/* <img src={()=>{return "../images/manage.svg"}}} alt="" /> */}
                         {/* <img src={require(`. + ${data.logo}`).default} alt="" /> */}
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
