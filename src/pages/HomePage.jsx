import { Link } from "react-router-dom";
import heroBanner from "../hero-picture.jpg";
import secondHero from "../secondHero.jpg";

import { useEffect, useState } from "react";

export const HomePage = () => {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/animals");
        const data = await response.json();
        setAnimals(data.slice(0, 3)); // Show only first 3 pets
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    };
    fetchAnimals();
  }, []);

  return (
    <div>

      {/* Fullscreen Hero Greeting */}
      <section
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            width: "100%",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1 className="display-4 section-title" style={{ fontWeight: "700", textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            New Beginnings<br />Start Here
          </h1>
        </div>
      </section>

      {/* Adoptable Pets Preview */}
      <section className="py-5 text-center" style={{ backgroundColor: "#F9FAFB" }}>
  <div className="container">
    <h2 className="mb-3 section-title">Meet Our Pets</h2>
    <p className="mb-4">A few of our furry friends currently up for adoption.</p>

    <div className="row justify-content-center g-4">
      {animals.length ? animals.map((animal) => (
        <div className="col-md-4" key={animal._id}>
          <div className="card shadow-sm h-100 border-0">
            <img
              src={animal.image}
              className="card-img-top"
              alt={animal.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{animal.name}</h5>
              <p className="card-text text-muted">{animal.breed}</p>
              <p className="card-text text-muted">{animal.age} yrs • {animal.gender}</p>
            </div>
          </div>
        </div>
      )) : (
        <p>Loading pets...</p>
      )}
    </div>

    <Link to="/adopt" className="btn btn-outline-primary mt-4 px-4 py-2">
      View All Pets
    </Link>
  </div>
</section>

      {/* Statistics Section */}
      <section className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h2 className="display-4" style={{ color: "#BAD648", fontWeight: "700" }}>178</h2>
              <p className="text-muted">Cats Saved in 2024</p>
            </div>
            <div className="col-md-4 mb-4">
              <h2 className="display-4" style={{ color: "#93D1DA", fontWeight: "700" }}>56</h2>
              <p className="text-muted">Dogs Saved in 2024</p>
            </div>
            <div className="col-md-4 mb-4">
              <h2 className="display-4" style={{ color: "#E8744B", fontWeight: "700" }}>2,229</h2>
              <p className="text-muted">Pets Saved Since 2018</p>
            </div>
          </div>
          <Link to="/about" className="btn btn-outline-primary px-4 py-2 mt-3">
            Find Out More
          </Link>
        </div>
      </section>

      {/* Hero Left - Info Right Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={secondHero}
                alt="How to help"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <h2 className="section-title mb-3" style={{ fontWeight: "700" }}>How You Can Help?</h2>
              <p style={{ fontSize: "1.1rem", color: "#4F4F4F" }}>
                One At A Time Rescue is driven by the belief that every animal deserves a second chance. You can make that possible.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/about#foster" className="btn btn-primary px-4 py-2" style={{ backgroundColor: "#BAD648", borderColor: "#BAD648", color: "#073242" }}>
                  Foster With Us
                </Link>
                <a href="/donate" className="btn btn-primary px-4 py-2" style={{ backgroundColor: "#E8744B", borderColor: "#E8744B" }}>
                  Donate Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="mb-5 section-title">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">1. Find a Pet</h5>
                  <p className="card-text text-muted">
                    Browse adoptable animals and find your perfect match.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">2. Submit an Application</h5>
                  <p className="card-text text-muted">
                    Fill out a short adoption form to get started.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">3. Meet & Adopt</h5>
                  <p className="card-text text-muted">
                    Once approved, welcome your new best friend home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};