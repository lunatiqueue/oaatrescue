import { Link } from "react-router-dom";

export const AnimalCard = ({ animal }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={animal.image}
        alt={animal.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{animal.name}</h5>
        <p className="card-text mb-1">{animal.breed}</p>
        <p className="card-text text-muted">{animal.age} years old</p>
        <Link to={`/animal/${animal._id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
};