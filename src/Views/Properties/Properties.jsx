import { useLocation } from "react-router-dom";

import SearchBar from "../../Components/SearchBar/SearchBar";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import properties from "../../data/properties";

import "./Properties.css";


function Properties() {

  const locationData = useLocation();

  const params = new URLSearchParams(locationData.search);

  const searchLocation =
    params.get("location")?.toLowerCase() || "";

  const propertyType =
    params.get("type")?.toLowerCase() || "";

  const budget =
    params.get("budget") || "";


  const filteredProperties = properties.filter((property) => {

    // Location Search

    const locationMatch =
      searchLocation === "" ||
      property.location
        .toLowerCase()
        .includes(searchLocation);


    // Property Type Search
    // Type is checked from property title

    const typeMatch =
      propertyType === "" ||
      property.title
        .toLowerCase()
        .includes(propertyType);


    // Budget Search

    let budgetMatch = true;

    if (budget === "10000") {

      budgetMatch =
        property.price >= 5000 &&
        property.price <= 10000;

    }

    else if (budget === "20000") {

      budgetMatch =
        property.price > 10000 &&
        property.price <= 20000;

    }

    else if (budget === "above20000") {

      budgetMatch =
        property.price > 20000;

    }


    return (
      locationMatch &&
      typeMatch &&
      budgetMatch
    );

  });


  return (

    <div className="properties-page">


      <section className="properties-banner">

        <h1>
          All Rental Properties
        </h1>

        <p>
          Find the best home according to your budget
        </p>

      </section>


      <SearchBar />


      <section className="all-properties">

        <div className="properties-grid">

          {
            filteredProperties.length > 0 ? (

              filteredProperties.map((property) => (

                <PropertyCard
                  key={property.id}
                  property={property}
                />

              ))

            ) : (

              <h2>
                No Properties Found
              </h2>

            )
          }

        </div>

      </section>

    </div>

  );

}


export default Properties;