import aboutUsPic from "../AboutUsPic.jpg"

export const About = () => {
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 text-center">About Us</h1>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={aboutUsPic} alt="logo"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <p className="lead">
                One At A Time Rescue is a foster-based animal rescue organization dedicated to
                providing care and support for animals in need. Based in Brandon, Manitoba,
                our mission is to find loving homes for every animal, one at a time.
              </p>
              <p>
                We rely on the efforts of our passionate volunteers and foster families to
                create a nurturing environment for rescued animals. Join us in making a
                difference and helping animals find their forever homes.
              </p>
              <a href="/adopt" className="btn btn-primary mt-3">
                Learn More About Adoptions
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };