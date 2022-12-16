import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";

const Grid = () => {
  const [capsules, setcapsules] = useState([""]);
  const [query, setquery] = React.useState("status");
  const [noresult, setnoresult] = useState(true);
  const [searchvalue, setsearchvalue] = useState("your request");
  const [ishovering, setishovering] = useState(-1);
  const [searchhovering, setsearchhovering] = useState(false);

  useEffect(() => {
    // getdata();
    // alert("shown")
  }, [setquery]);

  const getdata = () => {
    axios.get(`https://api.spacexdata.com/v3/capsules?${query}=active`).then((res) => {
      console.log(res.data);
      setnoresult(false);
      setcapsules(res.data);
    });
  };

  const searchby = (value) => {
    setquery([value]);
    getdata();
    console.log(value);
    setsearchvalue(value);
    handlesearchleave();
  };
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log(e.target.value);
      searchby(e.target.value);
    }
  }
  function handlesearchleave(e) {
    // console.log(e);
    setsearchhovering(false);
  }
  function handlesearchhovering(e) {
    // console.log(e);
    setsearchhovering(true);
  }

  return (
    <div className="grid">
      <div className="data">
        <div className="top_data" onMouseLeave={() => handlesearchleave()}>
          <h1>SpaceX</h1>
          <p>The internet’s source of freely-usable Space data. </p>
          <p> Powered by SpaceX API.</p>

          <div className="search_box">
            <input
              type="text"
              placeholder="Search Capsules from SpaceX"
              onClick={() => handlesearchhovering()}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </div>
          <div>
            <div
              className={` data   ${searchhovering ? "" : "hidden"}`}
              onMouseLeave={handlesearchleave}
            >
              <div className="mousehover">
                <p> Search by</p>
                <div className="trending_searches">
                  <p
                    onClick={() => {
                      searchby("Status");
                    }}
                  >
                    Status
                  </p>
                  <p
                    onClick={() => {
                      searchby("Original_launch");
                    }}
                  >
                    Original_launch
                  </p>
                  <p
                    onClick={() => {
                      searchby("type");
                    }}
                  >
                    Type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="result">
        <div className="main" onClick={handlesearchleave}>
          <div className={`${noresult ? "" : " hidden"} `}>
            Results not found for "{searchvalue}"
          </div>
          <InfiniteScroll
            className="appa"
            dataLength={capsules.length/5}
            next={getdata}
            hasMore={true}
            loader={<Loader />}
          >
            <div className="capsule_box">
              <div>
                <div className="grids">
                  {capsules?.map((capsule) => (
                    <div className="carda" key={capsule.capsule_serial}>
                      <div
                        className="capsule_main_div"
                        onMouseEnter={() =>
                          setishovering(capsule.capsule_serial)
                        }
                        onMouseLeave={() => setishovering(-1)}
                      >
                        <div className="capsulehover">
                          <div className="top4">
                            <div className="kelbm">
                              <div
                                className={`ppjpj ${
                                  ishovering == capsule.capsule_serial
                                    ? "backgr"
                                    : "hidden"
                                } `}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="capsule">
                          <div className="jss1">
                            <div className="jss1a">
                              <p>capsule_serial: {capsule.capsule_serial}</p>
                              <p>capsule_id: {capsule.capsule_id}</p>
                            </div>
                            <div className="jss1b">
                              <p>Status: {capsule.status}</p>
                              <p>landings: {capsule.landings}</p>
                            </div>
                          </div>
                          <div className="jss2">
                            <p>Details: {capsule.details}</p>
                          </div>
                          <div className="missions">
                            <h4>Missions</h4>
                            {capsule.missions?.map((mission) => (
                            <div className="mission_data" key={mission.name}>
                              <div className="mission_name">
                                Mission Name:{mission.name}
                              </div>
                              <div className="mission_name">
                                Flight : {mission.flight}
                              </div>
                            </div>
                          ))}
                          </div>
                          
                          <p>Type: {capsule.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Grid;