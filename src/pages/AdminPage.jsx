import React, { useState, useEffect } from 'react';

export const AdminPage = () => {
  const emptyForm = {
    type: '',
    name: '',
    age: '',
    breed: '',
    color: '',
    gender: '',
    status: '',
    size: '',
    weight: '',
    canLiveWith: '',       // comma-separated list
    spayed: false,
    vaccinesUpToDate: false,
    goodWithKids: false,
    specializedCare: false,
    location: '',
    biography: '',
    imageFile: null,
  };

  const [animals, setAnimals] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  // Load all animals
  const fetchAnimals = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/animals', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setAnimals(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();// eslint-disable-next-line
  }, []);

  // Handle field changes
  const handleChange = e => {
    const { name, value, type: inputType, checked, files } = e.target;
    if (name === 'imageFile') {
      setForm(f => ({ ...f, imageFile: files[0] }));
    } else if (inputType === 'checkbox') {
      setForm(f => ({ ...f, [name]: checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  // Prepare form for editing
  const startEdit = animal => {
    setIsEditing(true);
    setEditId(animal._id);
    setForm({
      type: animal.type || '',
      name: animal.name || '',
      age: animal.age || '',
      breed: animal.breed || '',
      color: animal.color || '',
      gender: animal.gender || '',
      status: animal.status || '',
      size: animal.size || '',
      weight: animal.weight || '',
      canLiveWith: animal.canLiveWith?.join(', ') || '',
      spayed: animal.spayed || false,
      vaccinesUpToDate: animal.vaccinesUpToDate || false,
      goodWithKids: animal.goodWithKids || false,
      specializedCare: animal.specializedCare || false,
      location: animal.location || '',
      biography: animal.biography || '',
      imageFile: null,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setForm(emptyForm);
  };

  // Submit add or update
  const handleSubmit = async e => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:5000/api/animals/${editId}`
      : 'http://localhost:5000/api/animals';
    const method = isEditing ? 'PUT' : 'POST';

    const body = new FormData();
    // Append all form values
    Object.entries(form).forEach(([key, val]) => {
      if (key === 'imageFile') {
        if (val) body.append('image', val);
      } else if (key === 'canLiveWith') {
        // split comma list into array
        const arr = val.split(',').map(s => s.trim()).filter(Boolean);
        arr.forEach(item => body.append('canLiveWith', item));
      } else {
        body.append(key, val);
      }
    });

    try {
      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body
      });
      if (!res.ok) throw new Error('Save failed');
      await fetchAnimals();
      cancelEdit();
    } catch (err) {
      console.error(err);
      alert('Error saving animal');
    }
  };

  // Delete
  const handleDelete = async id => {
    if (!window.confirm('Delete this animal?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/animals/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Delete failed');
      setAnimals(a => a.filter(x => x._id !== id));
    } catch (err) {
      console.error(err);
      alert('Error deleting animal');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="section-title mb-4">
        {isEditing ? 'Edit Animal' : 'Add New Animal'}
      </h1>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row g-3">

          {/* Enum selects and text inputs */}
          {[
            { name: 'type', label: 'Type', type: 'select', options: ['', 'Dog', 'Cat'] },
            { name: 'status', label: 'Status', type: 'select', options: ['', 'Available', 'Adopted', 'Fostered'] },
            { name: 'size', label: 'Size', type: 'select', options: ['', 'Small', 'Medium', 'Large'] },
            { name: 'gender', label: 'Gender', type: 'select', options: ['', 'Male', 'Female'] },
            { name: 'name', label: 'Name', type: 'text' },
            { name: 'breed', label: 'Breed', type: 'text' },
            { name: 'color', label: 'Color', type: 'text' },
            { name: 'age', label: 'Age', type: 'number' },
            { name: 'weight', label: 'Weight (kg)', type: 'number' },
            { name: 'location', label: 'Location', type: 'text' },
          ].map(field => (
            <div className="col-md-4" key={field.name}>
              <label className="form-label">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  className="form-select"
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                >
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt || 'Select...'}</option>
                  ))}
                </select>
              ) : (
                <input
                  className="form-control"
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}

          {/* canLiveWith */}
          <div className="col-md-6">
            <label className="form-label">Can Live With (comma-separated)</label>
            <input
              type="text"
              name="canLiveWith"
              className="form-control"
              value={form.canLiveWith}
              onChange={handleChange}
            />
          </div>

          {/* Checkboxes for booleans */}
          <div className="col-md-6 d-flex flex-wrap gap-3">
            {[
              { name: 'spayed', label: 'Spayed/Neutered' },
              { name: 'vaccinesUpToDate', label: 'Vaccines Up-to-Date' },
              { name: 'goodWithKids', label: 'Good With Kids' },
              { name: 'specializedCare', label: 'Specialized Care' },
            ].map(cb => (
              <div className="form-check" key={cb.name}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={cb.name}
                  id={cb.name}
                  checked={form[cb.name]}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={cb.name}>
                  {cb.label}
                </label>
              </div>
            ))}
          </div>

          {/* Biography */}
          <div className="col-12">
            <label className="form-label">Biography</label>
            <textarea
              className="form-control"
              name="biography"
              rows="3"
              value={form.biography}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image Upload */}
          <div className="col-md-6">
            <label className="form-label">Image</label>
            <input
              type="file"
              name="imageFile"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
              {...(!isEditing && { required: true })}
            />
          </div>

          {/* Submit/Cancel */}
          <div className="col-12 d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Update Animal' : 'Add Animal'}
            </button>
            {isEditing && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>

      <hr />

      {/* Animal List */}
      <h2 className="section-title my-4">Current Animals</h2>
      {loading ? (
        <p>Loading…</p>
      ) : animals.length === 0 ? (
        <p>No animals found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {animals.map(a => (
                <tr key={a._id}>
                  <td>{a.name}</td>
                  <td>{a.type}</td>
                  <td>{a.breed}</td>
                  <td>{a.age}</td>
                  <td>{a.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => startEdit(a)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(a._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
