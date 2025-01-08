import React from 'react';
import Header from '../pages/Header';
import ProduitsVedette from '../pages/ProduitsVedette';
import Footer from '../pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css';


const Accueil = () => {
  return (
    <div className="container mt-5">
      <Header />
      <ProduitsVedette />
      <Footer />
    </div>
  );
};

export default Accueil;
