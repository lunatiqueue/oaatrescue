import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { SiX } from 'react-icons/si';

export const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/animals/${id}`);
      const data = await res.json();
      setAnimal(data);
    })();
  }, [id]);

  if (!animal) return <div className="text-center py-5">Loading…</div>;

  const images = animal.images?.length
    ? animal.images
    : [animal.image].filter(Boolean);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <section className="animal-details-section">
      <div className="animal-details-container">
        {/* ASIDE */}
        <aside className="animal-aside">
          {/* Thumbnails */}
          <div className="thumbnails mb-3">
            {images.map((src, i) => (
              <div className="thumb" key={i}>
                <img src={src} alt={`${animal.name} ${i + 1}`} />
              </div>
            ))}
          </div>

          {/* Copy Link */}
          <div className="copy-link mb-3">
            <button onClick={handleCopyLink} className="btn-copy">
              <FaLink /> Copy Link
            </button>
          </div>

          {/* Share This Pet */}
          <div className="share-this mb-4">
            <h6>Share this pet</h6>
            <div className="icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <SiX />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* FOSTER CTA */}
          <div className="foster-cta">
            <h6>Hello FOSTERS!</h6>
            <p>
              Interested in this pet or ready to help One At A Time?{" "}
              <Link to="/foster">Learn about fostering →</Link>
            </p>
          </div>

           {/* Adopt Now Button */}
           <div className="adopt-me-cta mb-4">
            <a
              href="https://forms.gle/G9LH1Dd8kq3Kg9S38"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-adopt-me"
            >
              Adopt Me
            </a>
          </div>

            {/* Our Location */}
          <div className="rescue-location">
            <strong>Our Shelter Location:</strong><br/>
            Brandon, Manitoba, Canada
          </div>
        </aside>

        {/* MAIN */}
        <main className="animal-main">
          <header className="animal-header mb-4">
            <h1>{animal.name}</h1>
            <p className="added-date">
              Added on {new Date(animal.createdAt).toLocaleDateString()}
            </p>
          </header>

          <div className="info-grid mb-4">
            {/* Details */}
            <div className="details-col">
              <h5 className="mb-3">Details</h5>
              <dl className="details-list">
                <dt>TYPE</dt>
                <dd>{animal.type}</dd>

                <dt>BREED</dt>
                <dd>{animal.breed}</dd>

                <dt>AGE</dt>
                <dd>{animal.age} yrs</dd>

                <dt>GENDER</dt>
                <dd>{animal.gender}</dd>

                <dt>COLOR</dt>
                <dd>{animal.color}</dd>

                <dt>STATUS</dt>
                <dd className="text-status">{animal.status}</dd>

                <dt>SIZE</dt>
                <dd>{animal.size}</dd>

                <dt>WEIGHT</dt>
                <dd>{animal.weight} kg</dd>

                {animal.canLiveWith?.length > 0 && (
                  <>
                    <dt>CAN LIVE WITH</dt>
                    <dd>{animal.canLiveWith.join(", ")}</dd>
                  </>
                )}

                <dt>SPAYED/NEUTERED</dt>
                <dd>{animal.spayed ? "Yes" : "No"}</dd>

                <dt>VACCINATED</dt>
                <dd>{animal.vaccinesUpToDate ? "Yes" : "No"}</dd>

                <dt>GOOD WITH KIDS</dt>
                <dd>{animal.goodWithKids ? "Yes" : "No"}</dd>

                <dt>SPECIAL CARE</dt>
                <dd>{animal.specializedCare ? "Yes" : "No"}</dd>

                <dt>LOCATION</dt>
                <dd>{animal.location}</dd>
              </dl>
            </div>

            {/* Biography */}
            <div className="bio-col">
              <h5 className="mb-3">About</h5>
              <p>{animal.biography}</p>
            </div>
          </div>

          <Link to="/adopt" className="btn btn-back">
            ← Back to Adopt
          </Link>
        </main>
      </div>
    </section>
  );
};