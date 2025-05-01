// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

export const FosterPage = () => {
  return (
    <div>

      {/* Page Header */}
      <section className="py-5 text-center" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <h1 className="section-title">
            <span className="highlight-yellow">Foster</span>{" "}
            <span className="highlight-teal">With Us</span>
          </h1>
        </div>
      </section>

      {/* Intro & Call-to-Action */}
      <section className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container">
          <p style={{ fontSize: "1.1rem", color: "#231F20", maxWidth: "800px", margin: "0 auto 1.5rem" }}>
            One At A Time Rescue is a completely foster-based organization.  
            Our network of caring volunteers provides temporary homes, food, and love for animals in need.  
            We’re always looking for new foster families—if you’d like to be one of our lifesavers,  
            please fill out the form below.
          </p>
          <div className="text-center">
            <a
              href="https://forms.gle/testers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-4 py-2"
              style={{
                backgroundColor: "#BAD648",
                border: "none",
                color: "#073242",
                fontFamily: "'Varela Round', sans-serif",
              }}
            >
              Apply to Foster
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5" style={{ backgroundColor: "#231F20" }}>
        <div className="container">
          <h2 className="text-center mb-4 section-title" style={{ color: "#FCB531" }}>
            FAQ
          </h2>

          {[
            {
              q: "What do you do as a foster?",
              a: "You welcome an animal into your home, give it food, shelter, and love, and help it learn basic manners until it finds a permanent family.",
            },
            {
              q: "What should I expect as a foster?",
              a: "You’ll handle day-to-day care—feeding, walks, playtime—and attend any vet or training appointments. We’re here to guide you every step of the way.",
            },
            {
              q: "What will be provided to me when I foster?",
              a: "We supply food, basic medical care, bedding, and training support. You just need to open your heart and home!",
            },
            {
              q: "What if things aren’t working out?",
              a: "No problem—just contact our team. We’ll re-place the pet with another foster or find another solution that works better for you and the animal.",
            },
            {
              q: "What if I go on holidays?",
              a: "Let us know your dates—we can arrange for a trusted friend, volunteer, or boarding to look after your foster while you’re away.",
            },
            {
              q: "How long will I have my foster?",
              a: "Most fosters last 2–6 weeks, depending on the pet’s needs and adoption timing. We’ll keep you updated throughout.",
            },
            {
              q: "Can I adopt my foster?",
              a: "Absolutely! Fosters get first choice to adopt if they fall in love and want to keep their foster pet forever.",
            },
          ].map(({ q, a }, idx) => (
            <div key={idx} className="mb-4">
              <h5 style={{ color: "#93D1DA", fontFamily: "'Varela Round', sans-serif" }}>
                {q}
              </h5>
              <p style={{ color: "#FFFFFF", fontFamily: "'Lato', sans-serif" }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};