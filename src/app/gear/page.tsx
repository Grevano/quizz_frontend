'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Gear {
  id: number;
  name: string;
  brand: string;
  category: string;
}

export default function GearPage() {
  const [gears, setGears] = useState<Gear[]>([]);
  const [formData, setFormData] = useState({ name: '', brand: '', category: '', description: '' });

  // Fetch data saat load
  useEffect(() => {
    fetch('/api/gear').then(res => res.json()).then(data => setGears(data));
  }, []);

  // Handle Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/gear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    window.location.reload(); // Reload 
  };

  // Handle Delete Gear
  const deleteGear = async (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this gear?');
    if (!confirmed) return;
    try {
      const response = await fetch(`/api/gear?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setGears(gears.filter(gear => gear.id !== id));
      } else {
        console.error('Failed to delete gear');
      }
    } catch (error) {
      console.error('Error deleting gear:', error);
    }
  };

 return (
  <div className="animate-fade-in">
    <div className="row">
      {/* Form Section */}
      <div className="col-lg-4 mb-4">
        <div className="custom-card p-4 sticky-top" style={{ top: '100px', zIndex: 1 }}>
          <h4 className="mb-4 text-white"><span className="text-accent">Add</span> New Gear</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-secondary small">Gear Name</label>
              <input type="text" className="form-control" required onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="mb-3">
               <label className="form-label text-secondary small">Brand</label>
               <input type="text" className="form-control" required onChange={e => setFormData({...formData, brand: e.target.value})} />
            </div>
            <div className="mb-3">
               <label className="form-label text-secondary small">Category</label>
               <select className="form-select" onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option value="">Select Category...</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Pedal">Pedal</option>
                  <option value="Amp">Amplifier</option>
               </select>
            </div>
            <div className="mb-4">
               <label className="form-label text-secondary small">Description</label>
               <textarea className="form-control" rows={3} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
            </div>

            <button type="submit" className="btn w-100 fw-bold py-2" style={{ backgroundColor: '#03dac6', color: '#000' }}>
              + Save to Vault
            </button>
          </form>
        </div>
      </div>

      {/* List Section */}
      <div className="col-lg-8">
        <h3 className="mb-4 border-bottom pb-2 border-secondary">My Collection</h3>
        <div className="row g-4">
          {gears.map((item, index) => (
            <div key={item.id} className="col-md-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="custom-card h-100 p-3 d-flex flex-column justify-content-between position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0 p-3 opacity-25">
                   <i className="bi bi-music-note-beamed fs-1 text-accent"></i> 
                </div>
                
                <div>
                  <div className="badge bg-dark border border-secondary text-secondary mb-2">{item.category}</div>
                  <h5 className="card-title fw-bold text-white mb-1">{item.name}</h5>
                  <p className="text-accent mb-3">{item.brand}</p>
                </div>
                
                <div className="d-flex gap-2 mt-auto">
                  <Link href={`/gear/${item.id}`} className="btn btn-sm btn-outline-light flex-grow-1">View Details</Link>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => {
                    deleteGear(item.id);
                  }}>
                    Delete
                    </button>
                </div>
              </div>
            </div>
          ))}
          {gears.length === 0 && (
            <div className="text-center text-secondary mt-5">
              <p>No gear found. Start adding your collection!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}