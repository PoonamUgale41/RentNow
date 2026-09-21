import { useState } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search.png";
import locationIcon from "../../assets/icons/location.png";

import "./SearchBar.css";


function SearchBar() {

  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");


  const handleSearch = () => {

    const params = new URLSearchParams();

    if (location) {
      params.set("location", location);
    }

    if (propertyType) {
      params.set("type", propertyType);
    }

    if (budget) {
      params.set("budget", budget);
    }

    navigate(`/properties?${params.toString()}`);

  };


  return (

    <div className="search-wrapper">


      <div className="search-field">

        <img
          src={locationIcon}
          alt="location"
        />

        <input
          type="text"
          placeholder="Search location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

      </div>


      <div className="search-field">

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >

          <option value="">
            Property Type
          </option>

          <option value="Apartment">
            Apartment
          </option>

          <option value="House">
            House
          </option>

          <option value="Villa">
            Villa
          </option>

          <option value="Home">
            Home
          </option>

        </select>

      </div>


      <div className="search-field">

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >

          <option value="">
            Select Budget
          </option>

          <option value="10000">
            $5,000 - $10,000
          </option>

          <option value="20000">
            $10,000 - $20,000
          </option>

          <option value="above20000">
            $20,000+
          </option>

        </select>

      </div>


      <button
        className="search-button"
        onClick={handleSearch}
      >

        <img
          src={searchIcon}
          alt="search"
        />

        Search

      </button>

    </div>

  );

}


export default SearchBar;