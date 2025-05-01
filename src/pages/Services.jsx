export const ServicesPage = () => {
    // Criteria arrays
    const hopeCriteria = [
      "Applicant must be 18 years or older",
      "All pets must be spayed/neutered (or referral to low-cost spay)",
      "Food brand/type requests may be met as supplies allow",
      "Participation ends if additional pets join the household",
      "OAAT may terminate participation at any time"
    ];
  
    const oopsCriteria = [
      "Entire litter must be surrendered to OAAT",
      "Mom will be spayed and returned to your care",
      "OAAT covers short-term medical needs (ear mites, parasites, minor illness)",
      "Owner responsible for any post-op medical costs",
      "Space is limited and subject to foster availability"
    ];
  
    return (
      <div>
        {/* Header */}
        <section className="py-5 text-center" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container">
            <h1 className="section-title">
              <span className="highlight-yellow">Services</span>{" "}
              <span className="highlight-teal">We Offer</span>
            </h1>
          </div>
        </section>
  
        {/* Intro Paragraph */}
        <section className="py-4" style={{ backgroundColor: "#F9FAFB" }}>
          <div className="container">
            <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", color: "#231F20" }}>
              <strong>HOPE</strong> (Help Our Pets Eat) provides families in sudden
              financial need with pet food assistance up to six times in a 12-month
              period—so pets can stay at home rather than be surrendered. 
              <br /><br /> 
              <strong>OOPS</strong> (Owned Pet Spay Program) cares for pregnant dogs
              or cats and their litters: we bring mom in to deliver, find homes for
              her babies, spay mom, and return her safely to you.
            </p>
          </div>
        </section>
  
        {/* Programs Criteria */}
        <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container">
            <div className="row g-4">
              {/* HOPE Column */}
              <div className="col-md-6">
                <h3 className="section-title mb-3">HOPE Criteria</h3>
                <ul style={{ color: "#231F20", fontSize: "1rem", lineHeight: 1.6 }}>
                  {hopeCriteria.map((crit, index) => (
                    <li key={index}>{crit}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <a
                    href="https://forms.gle/iJP1YM6bVXtvsFoB8"
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
                    HOPE Application
                  </a>
                </div>
              </div>
  
              {/* OOPS Column */}
              <div className="col-md-6">
                <h3 className="section-title mb-3">OOPS Criteria</h3>
                <ul style={{ color: "#231F20", fontSize: "1rem", lineHeight: 1.6 }}>
                  {oopsCriteria.map((crit, index) => (
                    <li key={index}>{crit}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <a
                    href="https://docs.google.com/forms/d/1nCPn18fyaESZafuMeOM9BWuVqAvwxaRESkaWteAbLdU/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-4 py-2"
                    style={{
                      backgroundColor: "#E8744B",
                      border: "none",
                      color: "#FFFFFF",
                      fontFamily: "'Varela Round', sans-serif",
                    }}
                  >
                    OOPS Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };