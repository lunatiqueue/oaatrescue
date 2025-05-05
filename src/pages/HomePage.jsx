import { Link } from "react-router-dom";
import heroBanner from "../images/hero-picture.jpg";
import secondHero from "../images/secondHero.jpg";

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
    <main>
      {/* 1. HERO */}
      <section
        className="hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative'
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content text-center text-white">
          <h1>New Beginnings</h1>
          <h2>Start Here</h2>
          <Link to="/adopt" className="btn btn-hero mt-3">
            Adopt Today
          </Link>
        </div>
      </section>

      {/* 2. MEET OUR PETS */}
      <section className="meet-pets py-5 text-center" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <h2 className="section-title">Meet Our Pets</h2>
          <p className="section-subtitle mb-5">
            Our furry friends waiting for loving homes.
          </p>
          <div className="row justify-content-center g-4">
            {animals.length ? animals.map(a => (
              <div className="col-md-4" key={a._id}>
                <Link to={`/animal/${a._id}`} className="pet-card d-block text-decoration-none shadow-sm">
                  <div
                    className="pet-img"
                    style={{
                      backgroundImage: `url(${a.image})`,
                      height: '250px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '8px 8px 0 0'
                    }}
                  />
                  <div className="pet-info p-3 bg-white">
                    <h5 className="mb-1">{a.name}</h5>
                    <p className="text-muted mb-0">
                      {a.age} yrs &bull; {a.gender}
                    </p>
                  </div>
                </Link>
              </div>
            )) : (
              <p>Loading pets…</p>
            )}
          </div>
          <Link to="/adopt" className="btn btn-outline-primary mt-4">
            View All Pets
          </Link>
        </div>
      </section>

      {/* 3. STATS + HELP */}
      <section className="help-stats py-5" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="row gx-5 align-items-center">
            {/* Left image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={secondHero}
                alt="How to help"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            {/* Right stats + help */}
            <div className="col-lg-6 d-flex flex-column" style={{ height: '100%' }}>
              {/* Stats (top) */}
              <div className="stats d-flex justify-content-between mb-5">
                <div className="text-center">
                  <h3 className="display-5" style={{ color: '#BAD648' }}>178</h3>
                  <p className="mb-0 text-muted">Cats Saved in 2024</p>
                </div>
                <div className="text-center">
                  <h3 className="display-5" style={{ color: '#93D1DA' }}>56</h3>
                  <p className="mb-0 text-muted">Dogs Saved in 2024</p>
                </div>
                <div className="text-center">
                  <h3 className="display-5" style={{ color: '#E8744B' }}>2,229</h3>
                  <p className="mb-0 text-muted">Pets Saved Since 2018</p>
                </div>
              </div>

              {/* How You Can Help (bottom) */}
              <div className="mt-auto">
                <h2 className="section-title">How You Can Help?</h2>
                <p className="section-text mb-4">
                  We rescue one pet at a time—but we need your support.
                  Foster, donate, or share our mission to make a real difference.
                </p>
                <Link to="/foster" className="btn btn-foster me-2">
                  Foster With Us
                </Link>
                <Link to="/donate" className="btn btn-donate">
                  Donate Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
  className="adopt-section py-5"
  style={{ backgroundColor: '#231F20', color: '#FFFFFF' }}
>
  <div className="container">

    {/* Heading */}
    <div className="text-center mb-5">
      <h2 className="section-title" style={{ color: '#BAD648' }}>
        How to Adopt
      </h2>
      <h3 className="section-subtitle" style={{ color: '#93D1DA' }}>
        From Us
      </h3>
    </div>

    {/* Vertical Steps */}
    <div
  className="steps-vertical mx-auto mb-5"
  style={{ maxWidth: '400px' }}
>
  {[
    'Explore Our Available Animals',
    'Complete an Adoption Application',
    'Virtual Home Tour',
    'Meet & Greet',
    'Pay Adoption Fee'
  ].map((text, idx) => (
    <div key={idx} className="step-item d-flex align-items-start mb-4">
      <div className="step-number">{idx + 1}</div>
      <div className="step-text">
        <h5 className="mb-1">Step {idx + 1}</h5>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  ))}
</div>

    {/* Fees & Inclusions */}
    <div className="mb-5">
      <h4 className="section-subtitle mb-3" style={{ color: '#FFFFFF' }}>
        Adoption Fees &amp; Inclusions
      </h4>
      <div className="row">
        {/* Puppies */}
        <div className="col-md-6 mb-4">
          <h5>
            Puppies (Under 1 year old){' '}
            <span style={{ color: '#BAD648' }}>$450</span>
          </h5>
          <p style={{ fontSize: '0.9rem', color: '#EDEDED' }}>
            Includes age appropriate vaccines, deworming, spay/neuter
            voucher at clinics, + online puppy course.
          </p>
        </div>
        {/* Dogs */}
        <div className="col-md-6 mb-4">
          <h5>
            Dogs (Over 1 year old){' '}
            <span style={{ color: '#BAD648' }}>$350</span>
          </h5>
          <p style={{ fontSize: '0.9rem', color: '#EDEDED' }}>
            Includes vaccines, deworming, spay/neuter voucher (if needed).
          </p>
        </div>
        {/* Kittens */}
        <div className="col-md-6 mb-4">
          <h5>
            Kittens (Under 1 year old){' '}
            <span style={{ color: '#BAD648' }}>$175</span>
          </h5>
          <p style={{ fontSize: '0.9rem', color: '#EDEDED' }}>
            Includes vaccines, deworming, spay/neuter voucher + kitten care
            guide.
          </p>
        </div>
        {/* Cats */}
        <div className="col-md-6 mb-4">
          <h5>
            Cats (Over 1 year old){' '}
            <span style={{ color: '#BAD648' }}>$100</span>
          </h5>
          <p style={{ fontSize: '0.9rem', color: '#EDEDED' }}>
            Includes vaccines, deworming, spay/neuter voucher (if needed).
          </p>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr style={{ borderColor: '#FFFFFF' }} />

    {/* Approved Clinics */}
    <div className="approved-clinics text-center mt-4">
      <h4 className="section-subtitle mb-3" style={{ color: '#FFFFFF' }}>
        Approved Clinics
      </h4>
      <ul
        className="list-unstyled d-flex flex-wrap justify-content-center gap-2"
      >
        {[
          'Virden Animal Hospital',
          'Wheat City Brandon',
          'Grand Valley Animal Clinic',
          'Carberry Small Animal Vet Clinic',
          'Minnedosa Veterinary Clinic',
          'Boissevain Animal Clinic'
        ].map((clinic) => (
          <li
            key={clinic}
            className="clinic-item px-3 py-1 rounded"
          >
            {clinic}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
    </main>
  );
};