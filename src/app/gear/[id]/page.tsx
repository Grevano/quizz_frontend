import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export default async function GearDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const gear = await prisma.gear.findUnique({
    where: { id: Number(id) }, 
  });

  if (!gear) {
    notFound();
  }

  return (
  <div className="d-flex justify-content-center align-items-center animate-slide-up" style={{ minHeight: '60vh' }}>
    <div className="custom-card p-5 w-100 shadow-lg position-relative" style={{ maxWidth: '800px' }}>
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-4 border-bottom border-secondary pb-3">
        <div>
           <h6 className="text-accent text-uppercase letter-spacing-2 mb-1">{gear.category} • {gear.brand}</h6>
           <h1 className="display-5 fw-bold text-white">{gear.name}</h1>
        </div>
        <div className="bg-dark rounded-circle p-3 border border-secondary">
           <span className="h4 m-0">🎸</span>
        </div>
      </div>

      {/* Body */}
      <div className="mb-5">
        <h5 className="text-secondary mb-3">Description</h5>
        <p className="lead text-light" style={{ lineHeight: '1.8' }}>
          {gear.description || "No description provided for this item."}
        </p>
      </div>

      {/* Footer / Meta */}
      <div className="d-flex justify-content-between align-items-center mt-auto">
        <small className="text-secondary">
          Added to Vault: {new Date(gear.createdAt).toLocaleDateString()}
        </small>
        <Link href="/gear" className="btn btn-outline-light px-4 rounded-pill">
          ← Back to Collection
        </Link>
      </div>
      
    </div>
  </div>
);
}