import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center mt-5 py-3 bg-light">
      <p>&copy; {new Date().getFullYear()} Fleuriste. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
