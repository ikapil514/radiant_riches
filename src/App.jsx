import "./App.scss";
import { Divider, TextField, Button } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IoSearchSharp, IoInformationCircleOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import MainCard from "./Components/MainCard";
import { Card } from "./text";
import BottomCard from "./Components/BottomCard";

export default function App() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-search">
          <TextField
            size="small"
            color=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoSearchSharp size={20} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="font-normal flex justify-evenly">
          <button className="nav-btn">Categories</button>
          <button className="nav-btn">Website Builder</button>
          <button className="nav-btn">Today's Deal</button>
        </div>
      </div>
      <div className="main-div">
        <h1 className="font-medium text-3xl">Best Website builder in the US</h1>
        <div className="mb-2 mt-5">
          <Divider />
        </div>
        <div className="flex justify-between max-[450px]:block">
          <div className="info-div">
            <p className=" flex text-center items-center text-gray-500 info">
              <GiConfirmed />
              <span className="ml-1">Last Updated - February 22, 2020</span>
            </p>
            <p className=" flex text-center items-center text-gray-500 info">
              <IoInformationCircleOutline size={18} />
              <span className="ml-1">Advertising Disclosure</span>
            </p>
          </div>
          <div className="flex items-center">
            <Button variant="text" style={{ textTransform: "capitalize" }}>
              Top Relevant
              <span className="ml-2">
                <IoIosArrowDown />
              </span>
            </Button>
          </div>
        </div>
        <div className="mb-5">
          <Divider />
        </div>
        <div className="flex justify-evenly flex-wrap">
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            Tools
          </Button>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            AWS Builder
          </Button>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            Start Build
          </Button>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            Build Supplies
          </Button>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            Tooling
          </Button>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            Blue Hosting
          </Button>
        </div>
        <div className="page-nav text-gray-500 text-sm">
          <button className="flex items-center">
            Home
            <span className="m-1">
              <IoIosArrowForward />
            </span>
          </button>
          <button className="flex items-center">
            Hosting for all
            <span className="m-1">
              <IoIosArrowForward />
            </span>
          </button>
          <button className="flex items-center">
            Hosting
            <span className="m-1">
              <IoIosArrowForward />
            </span>
          </button>
          <button className=" flex items-center">
            Hosting 6
            <span className="m-1">
              <IoIosArrowForward />
            </span>
          </button>
          <button className=" flex items-center text-primaryblue font-semibold">
            Hosting 5
          </button>
        </div>
        <div className="cards-container">
          {Card.map((item, indx) => (
            <div key={indx}>
              <MainCard data={item} />
            </div>
          ))}
        </div>
        <h2 className="mt-10 mb-5 font-medium text-2xl text-gray-700 ">
          Related deals you might like
        </h2>
        <div className="bottom-card">
          <BottomCard />
          <BottomCard />
          <BottomCard />
        </div>
      </div>
      <div className="signup-parent">
        <div className="signup-div">
          <h2 className="sign-text text-gray-500 ">
            Sign up And Get Exclusive Special Deals
          </h2>
          <div className="flex flex-col justify-evenly items-center pt-3">
            <TextField size="small" />
            <button className="h-[40px] w-[100px] text-white bg-[#1976d2] mt-3 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <div>
          <h2 className="text-white uppercase text-lg">Contact</h2>
          <h2>About</h2>
          <h2>Contact</h2>
          <h2>Categories</h2>
          <h2>Privacy Policy</h2>
          <h2>Terms Of Service</h2>
        </div>
        <div>
          <h2 className="text-white uppercase text-lg">Categories</h2>
          <h2 className="text-base">Hosting</h2>
          <h2 className="text-base">Web Builder</h2>
          <h2 className="text-base">Data Center</h2>
          <h2 className="text-base">Robotic-Automation</h2>
        </div>

        <div className="flex items-center">
          <h2 className="mr-1">United States</h2>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
