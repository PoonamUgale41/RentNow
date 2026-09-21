import { useParams, useNavigate } from "react-router-dom";

import properties from "../../data/properties";

import locationIcon from "../../assets/icons/location.png";
import bedIcon from "../../assets/icons/bed.png";
import bathIcon from "../../assets/icons/bath.png";

import "./PropertyDetails.css";


function PropertyDetails() {

  const { id } = useParams();

  const navigate = useNavigate();


  const property = properties.find(
    (item) => item.id === Number(id)
  );


  if (!property) {

    return (

      <h1 className="not-found">
        Property Not Found
      </h1>

    );

  }


  const handleBookNow = () => {

    const bookingDetails = {

      id: property.id,

      title: property.title,

      location: property.location,

      price: property.price,

      bedroom: property.bedroom,

      bathroom: property.bathroom

    };


    localStorage.setItem(
      "booking",
      JSON.stringify(bookingDetails)
    );


    alert(
      `${property.title} booked successfully!`
    );


    navigate("/properties");

  };


  return (

    <div className="details-page">


      <div className="details-container">


        <div className="details-image">

          <img
            src={property.image}
            alt={property.title}
          />

        </div>


        <div className="details-content">

          <h1>
            {property.title}
          </h1>


          <p className="details-location">

            <img
              src={locationIcon}
              alt="location"
            />

            {property.location}

          </p>


          <h2>
            ${property.price}/month
          </h2>


          <div className="details-features">


            <div>

              <img
                src={bedIcon}
                alt="bed"
              />

              {property.bedroom} Bedrooms

            </div>


            <div>

              <img
                src={bathIcon}
                alt="bath"
              />

              {property.bathroom} Bathrooms

            </div>


          </div>


          <p className="details-area">
            Area : {property.area}
          </p>


          <p className="details-description">
            {property.description}
          </p>


          <button
            className="booking-btn"
            onClick={handleBookNow}
          >
            Book Now
          </button>


        </div>

      </div>

    </div>

  );

}


export default PropertyDetails;