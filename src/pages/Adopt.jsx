import { useEffect, useState } from "react";
import { AnimalCard } from "../components/AnimalCard";

export const Adopt = () => {
    const [animals, setAnimals] = useState([]);
    const [filters, setFilters] = useState({
        type: "",
        size: "",
        gender: "",
        status: "",
    });

    const fetchAnimals = async () => {
        try {
            const queryParams = new URLSearchParams(filters).toString();
            const response = await fetch(`http://localhost:5000/api/animals?${queryParams}`);
            const data = await response.json();
            setAnimals(data);
        } catch (error) {
            console.error("Error fetching animals:", error);
        }
    };

    useEffect(() => {
        fetchAnimals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Filters */}
                <div className="col-md-3">
                    <h5>Filters</h5>
                    <div className="mb-3">
                        <label className="form-label">Type</label>
                        <select name="type" className="form-select" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Size</label>
                        <select name="size" className="form-select" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select name="gender" className="form-select" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select name="status" className="form-select" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="Available">Available</option>
                            <option value="Adopted">Adopted</option>
                            <option value="Fostered">Fostered</option>
                        </select>
                    </div>
                </div>

                {/* Animal Cards */}
            
                <div className="col-md-9">
                    <h2 className="mb-4">Adoptable Pets</h2>
                    <div className="row g-4">
                        {animals.length ? animals.map((animal) => (
                            <div className="col-md-6 col-lg-4" key={animal._id}>
                                <AnimalCard animal={animal} />
                            </div>
                        )) : (
                            <div className="col-12 text-center">
                                <h4>No animals found matching the selected filters.</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
