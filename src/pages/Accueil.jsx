import React from 'react';
import ProduitsVedette from '../pages/ProduitsVedette';
import 'bootstrap/dist/css/bootstrap.min.css';

const Accueil = () => {
  return (
    <>
     
      <div className="container mt-5">
        <ProduitsVedette />
      </div>
    </>
  );
};

export default Accueil;