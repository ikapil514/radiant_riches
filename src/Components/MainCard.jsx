import React from "react";
import "../App.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@mui/material";
import starRating from "../Star_Rating.svg";
import { TiTick } from "react-icons/ti";
import { HiOutlineTrophy, HiOutlineReceiptPercent } from "react-icons/hi2";
import { MdDiamond } from "react-icons/md";

function HighlightCard({ data }) {
  //string
  if (typeof data === "string") {
    return <h2 className="pl-8">{data}</h2>;
  }
  //Array
  return (
    <div className="rounded ml-5 pl-3 p-1 bg-[#f3f9ff]">
      {data.map((item, inx) => (
        <div key={inx} className="flex mt-2">
          <h2 className=" text-primaryblue mr-3 bg-[#fbfcfd] shadow-sm px-2 rounded-md font-medium">
            {item.number}
          </h2>
          <h2>{item.string}</h2>
        </div>
      ))}
    </div>
  );
}

function MainCard({ data }) {
  return (
    <div className="div-container">
      <div className="text-white">
        {data.badge_type === "best_choice" && (
          <div className="flex items-center w-[130px] h-[30px] bg-[#ff7724] rounded-r-md">
            <span className="m-1">
              <HiOutlineTrophy />
            </span>
            Best Choice
          </div>
        )}
        {data.badge_type === "best_value" && (
          <div className="flex items-center w-[130px] h-[30px] bg-[#ff7724] rounded-r-md">
            <span className="m-1">
              <MdDiamond />
            </span>
            Best Value
          </div>
        )}
        {data.badge_type === "20%" && (
          <div className="flex items-center w-[100px] h-[30px] bg-[#ff7724] rounded-r-md">
            <span className="m-1">
              <HiOutlineReceiptPercent />
            </span>
            26% OFF
          </div>
        )}
      </div>
      <div className="box">
        <div className="">
          <div className="imageDiv"></div>
          <p className="text-center">{data.builder}</p>
        </div>
        <div className="textDiv">
          <h2 className="font-medium">{data.headlineText}</h2>
          {data.smallText}
          <h2 className="font-semibold mt-2 mb-1">Main Highlight</h2>
          <div>
            {data.mainHighlight && <HighlightCard data={data.mainHighlight} />}
            {data.headline2}
            <div>
              {data.box &&
                data.box.map((item, idx) => (
                  <div key={idx} className="flex items-center pl-2">
                    <TiTick />
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <button className="flex text-primaryblue text-center items-center mt-2">
            Show more
            <span className="ml-1">
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <div className="ratingDiv">
          <div className="rating-box text-center flex flex-col justify-evenly items-center h-[60%]">
            <h2 className="text-3xl text-darkblue">{data.rating}</h2>
            <h2 className="text-darkblue">{data.ratingTxt}</h2>
            <img src={starRating} alt="img" />
          </div>
          <Button variant="contained">View</Button>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
