import Link from 'next/link';

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center animate-fade-in py-5">
      <div className="p-5 mb-4 rounded-3 shadow-lg" 
           style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #0f0f0f 100%)', border: '1px solid #333' }}>
        <h1 className="display-3 fw-bold mb-3">
          Welcome to <span style={{ color: '#6200ea' }}>GearVault</span>
        </h1>
        <p className="lead text-secondary mb-4">
          The ultimate sanctuary for your musical instruments. <br/>
          Track, manage, and explore your gear collection.
        </p>
        
        <div className="d-flex gap-3 justify-content-center">
          <Link href="/gear" className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm" style={{ backgroundColor: '#6200ea', border: 'none' }}>
            Manage Gear
          </Link>
          <Link href="/explore" className="btn btn-outline-light btn-lg px-5 rounded-pill">
            Explore Music
          </Link>
        </div>
      </div>

      <div className="row mt-5 animate-slide-up stagger-2 w-100">
        <div className="col-md-4 mx-auto">
          <div className="custom-card p-4 h-100 text-start border-start border-4 border-info">
            <h5 className="text-white">Student Profile</h5>
            <p className="text-secondary mb-1">Name: <span className="text-white">Grevano Geraldo</span></p>
            <p className="text-secondary mb-1">NIM: <span className="text-white">535240030</span></p>
            <p className="text-secondary">Topic: <span className="text-accent">Guitar Inventory System</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}