// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center error-page-bg rounded-3 animate-fade-in mt-4">
      <h1 className="text-neon-error mb-0">404</h1>
      <h2 className="fw-bold text-white mb-3">Signal Lost...</h2>
      <p className="lead text-secondary mb-5 px-3" style={{ maxWidth: '500px' }}>
        Oops! The gear or page you are looking for seems to be unplugged, 
        missing, or out of tune.
      </p>
      <div className="d-flex gap-3">
        <Link href="/" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-lg" 
              style={{ backgroundColor: '#6200ea', borderColor: '#6200ea' }}>
          Back to Stage (Home)
        </Link>
      </div>
      
    </div>
  );
}