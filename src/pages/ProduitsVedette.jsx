// src/components/ProduitsVedette.jsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productsActions';
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const ProduitsVedette = ({ produits, getProducts, addToCart }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleAddToCart = (produit) => {
    addToCart(produit);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Produits Vedettes</h2>
      <div className="row g-4">
        {produits.map((produit) => (
          <div className="col-md-4 mb-4" key={produit.id}>
            <div className="card h-100 shadow-sm">
              <img 
                src={produit.image} 
                className="card-img-top p-3" 
                alt={produit.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{produit.title}</h5>
                <p className="card-text text-muted mb-4">{produit.price} €</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between">
                    <Link 
                      to={`/details/${produit.id}`} 
                      className="btn btn-outline-primary"
                    >
                      Voir Détails
                    </Link>
                    <button 
                      onClick={() => handleAddToCart(produit)}
                      className="btn btn-success"
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  produits: state.products.produits,
});

export default connect(mapStateToProps, { getProducts, addToCart })(ProduitsVedette);
