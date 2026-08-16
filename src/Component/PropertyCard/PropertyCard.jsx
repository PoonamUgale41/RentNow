import "./PropertyCard.css";
import DummyImage from "./house.png";

function PropertyCard({
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
}) {
  return (
    <div className="property-card">
      <img src={DummyImage} alt="Property" className="property-image" />
      <h2 className="property-title">
        {city}, {area}
      </h2>

      <p>Type: {propertyType}</p>

      <p>Size: {size}</p>

      <p>Price: ₹{price.toLocaleString()}</p>

      <p>Amenities: {amenities.join(", ")}</p>

      <p>Rating: ⭐ {rating}</p>

      <p>Reviews: {reviews}</p>

      <p>Owner: {owner}</p>

      <p>Contact: {contact}</p>

      <div>
        <p>Nearby Places:</p>
        <p>🏥 Hospital: {nearbyPlaces.hospital} km</p>
        <p>🏫 School: {nearbyPlaces.school} km</p>
        <p>✈️ Airport: {nearbyPlaces.airport} km</p>
        <p>🛍️ Mall: {nearbyPlaces.mall} km</p>
        <p>🚉 Railway Station: {nearbyPlaces.railwayStation} km</p>
        <p>🚇 Metro Station: {nearbyPlaces.metroStation} km</p>
      </div>
    </div>
  );
}

export default PropertyCard;