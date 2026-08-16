import PropertyCard from "../../Component/PropertyCard/PropertyCard";
import "./Properties.css";
import { PROPERTIES } from "../../data";

function Properties() {
  return (
    <div>
      <h1>Properties</h1>

      <div className="properties-container">
        {PROPERTIES.map((propertyObj) => {
          const {
            id,
            city,
            area,
            propertyType,
            size,
            price,
            amenities,
            photos,
            rating,
            reviews,
            owner,
            contact,
            nearbyPlaces,
          } = propertyObj;

          return (
            <PropertyCard
              key={id}
              city={city}
              area={area}
              propertyType={propertyType}
              size={size}
              price={price}
              amenities={amenities}
              photos={photos}
              rating={rating}
              reviews={reviews}
              owner={owner}
              contact={contact}
              nearbyPlaces={nearbyPlaces}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Properties;