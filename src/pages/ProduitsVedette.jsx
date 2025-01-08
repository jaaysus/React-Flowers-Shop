import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productsActions';
import { Link } from 'react-router-dom';

const ProduitsVedette = ({ produits, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <h2 className="text-center mb-4">Produits Vedettes</h2>
      <div className="row">
        {produits.map((produit) => (
          <div className="col-md-4" key={produit.id}>
            <div className="card">
              <img src={produit.image} className="card-img-top" alt={produit.title} />
              <div className="card-body">
                <h5 className="card-title">{produit.title}</h5>
                <Link to={`/details/${produit.id}`} className="btn btn-primary">Voir Détails</Link>
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

export default connect(mapStateToProps, { getProducts })(ProduitsVedette);
