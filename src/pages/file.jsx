import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const File = () => {
  return (
    <>
      Hero Section
      <div className="hero-section text-black text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-3 mb-4 animate__animated animate__fadeIn">
            Bienvenue dans notre Jardin Floral
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Découvrez notre collection unique de fleurs qui apportent couleur et vie 
            à vos moments les plus précieux.
          </p>
          <button className="btn btn-outline-light btn-lg animate__animated animate__fadeIn animate__delay-2s">
            Découvrir nos Fleurs
          </button>
        </div>
      </div>

       Features Section 
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 feature-card">
              <div className="card-body text-center">
                <i className="bi bi-truck mb-3 fs-1 text-primary"></i>
                <h3>Livraison Rapide</h3>
                <p>Livraison le jour même pour garder vos fleurs fraîches</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 feature-card">
              <div className="card-body text-center">
                <i className="bi bi-star mb-3 fs-1 text-primary"></i>
                <h3>Qualité Premium</h3>
                <p>Sélection des meilleures fleurs pour votre plaisir</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 feature-card">
              <div className="card-body text-center">
                <i className="bi bi-heart mb-3 fs-1 text-primary"></i>
                <h3>Service Personnalisé</h3>
                <p>Conseils d'experts pour le choix parfait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
)};
export default File;