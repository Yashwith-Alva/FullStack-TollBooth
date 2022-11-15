import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import BgImage from "../assets/img/CarouselBg.jpg";
import axios from "axios";
import UserPageBanner from "./UserPageBanner";
import VehicleInfoComp from "./VehicleInfoComp";

function UserPage() {
  let { id } = useParams();
  const [userid, setuserid] = useState({});

  // Cleaning up useEffect!!
  useEffect(() => {
    let getMethod = axios
      .get(`http://localhost:3001/usersReg/byId/${id}`)
      .then((response) => {
        setuserid(response.data);
      });

    return () => {
      clearInterval(getMethod);
    };
  });

  return (
    <div>
      <div className="UserPage">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={BgImage} alt="First slide" />
            <Carousel.Caption>
              <h3>{userid.firstname}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={BgImage} alt="Second slide" />
            <Carousel.Caption>
              <h3>{userid.vehicleuniqueid ? "" : "No Vehicle registered!"}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BgImage} alt="Third slide" />
            <Carousel.Caption>
              <h3>{userid.moneyStored}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="UserPageBanner">
        <UserPageBanner />
      </div>

      <div className="DivVehicle">
        <VehicleInfoComp />
      </div>
    </div>
  );
}

export default UserPage;

/* 
<p>{userid.vehicleType}</p>
<p>{userid.LicensePlate}</p>
<p>{userid.dlno}</p> */
