// import { Link } from "react-router-dom";
import aboutHero from "../about.jpg";
import { FaHeart, FaBullseye, FaUsers, FaCheckCircle } from 'react-icons/fa';
// import { useEffect } from "react";

export const AboutPage = () => {
  return (
    <div>
{/* Hero Section */}
<section
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          className="display-4 section-title text-white"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}
        >
          About Us
        </h1>
      </section>

      {/* Who We Are */}
      <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who We Are
          </h2>
          <p className="lead">
            One At A Time Rescue is a small, foster-based animal rescue in Brandon, Manitoba.  
            We work with volunteers and foster families who open their homes and hearts to pets in need.  
            Every animal gets medical care, training, and love until we find them a forever family.
          </p>
          <p>
            Since 2018, we’ve helped over 2,000 cats and dogs find new beginnings.  
            Our team is a mix of students, families, and retirees—all united by one goal:  
            to give each animal a safe place and a fresh start, one at a time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container">
          <div className="row g-4">
            {/* Mission */}
            <div className="col-md-6 text-center">
              <FaHeart size={48} className="about-icon mb-2" />
              <h3 className="section-title mb-3">Our Mission</h3>
              <p>
                To rescue, rehabilitate, and rehome animals by connecting them  
                with loving foster homes and adopters. We make sure every pet  
                is healthy, happy, and ready for a new life.
              </p>
            </div>
            {/* Vision */}
            <div className="col-md-6 text-center">
              <FaBullseye size={48} className="about-icon mb-2" />
              <h3 className="section-title mb-3">Our Vision</h3>
              <p>
                A community where no pet is left behind—where adoption is celebrated,  
                and every animal has the chance to become a cherished family member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5" style={{ backgroundColor: "#FCB531" }}>
        <div className="container text-center text-dark">
          <h2 className="mb-4 section-title" style={{ color: "#073242" }}>
            Our Values
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <FaUsers size={36} className="about-icon mb-2" />
              <h5>Compassion</h5>
              <p>We treat every animal with kindness and respect.</p>
            </div>
            <div className="col-md-4">
              <FaCheckCircle size={36} className="about-icon mb-2" />
              <h5>Integrity</h5>
              <p>We act honestly and transparently in all our rescue efforts.</p>
            </div>
            <div className="col-md-4">
              <FaUsers size={36} className="about-icon mb-2" />
              <h5>Community</h5>
              <p>We believe teamwork and support make our mission possible.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};