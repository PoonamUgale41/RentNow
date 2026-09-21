import { Link } from "react-router-dom";

import locationIcon from "../../assets/icons/location.png";
import bedIcon from "../../assets/icons/bed.png";
import bathIcon from "../../assets/icons/bath.png";
import heartIcon from "../../assets/icons/heart.png";

import "./PropertyCard.css";


function PropertyCard({ property }) {

  return (

    <div className="property-card">


      <div className="property-image">

        <img
          src={property.image}
          alt={property.title}
        />


        <button className="favorite-btn">

          <img
            src={heartIcon}
            alt="favorite"
          />

        </button>

      </div>


      <div className="property-content">

        <h2>
          {property.title}
        </h2>


        <p className="property-location">

          <img
            src={locationIcon}
            alt="location"
          />

          {property.location}

        </p>


        <div className="property-features">

          <span>

            <img
              src={bedIcon}
              alt="bed"
            />

            {property.bedroom} Beds

          </span>


          <span>

            <img
              src={bathIcon}
              alt="bath"
            />

            {property.bathroom} Bath

          </span>

        </div>


        <h3>
          ${property.price}/month
        </h3>


        <Link
          to={`/property/${property.id}`}
          className="details-btn"
        >
          View Details
        </Link>

      </div>

    </div>

  );

}


export default PropertyCard;