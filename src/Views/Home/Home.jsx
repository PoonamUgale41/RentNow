import { useNavigate } from "react-router-dom";

import SearchBar from "../../Components/SearchBar/SearchBar";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import properties from "../../data/properties";
import heroImage from "../../assets/images/bg1.jpeg";

import "./Home.css";


function Home() {

  const navigate = useNavigate();


  const handleExploreProperties = () => {
    navigate("/properties");
  };


  return (

    <div className="home-page">

      {/* Hero Section */}

      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(
            rgba(15,23,42,.65),
            rgba(15,23,42,.65)
          ),
          url(${heroImage})`
        }}
      >

        <div className="hero-content">

          <h1>
            Find Your Perfect Rental Home
          </h1>

          <p>
            Search apartments, houses and villas
            according to your needs.
          </p>

          <button onClick={handleExploreProperties}>
            Explore Properties
          </button>

        </div>

      </section>


      {/* Search Section */}

      <SearchBar />


      {/* Featured Properties */}

      <section className="featured-section">

        <div className="section-heading">

          <h2>
            Featured Properties
          </h2>

          <p>
            Explore our best rental homes
          </p>

        </div>


        <div className="property-grid">

          {
            properties.slice(0, 3).map((property) => (

              <PropertyCard
                key={property.id}
                property={property}
              />

            ))
          }

        </div>

      </section>

    </div>

  );

}


export default Home;