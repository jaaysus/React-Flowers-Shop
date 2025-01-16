// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Accueil.css';

// const Accueil = () => {
//   return (
//     <div className="accueil-page">
     
//       {/* About Section */}
//       <div className="about-section container py-5">
//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <img
//               src="/images/flower6.jpeg"
//               alt="Flower"
//               className="img-fluid rounded-circle shadow"
//             />
//           </div>
//           <div className="col-md-6 text-md-start text-center">
//             <h2 className="fw-bold">Hey There!</h2>
//             <p className="text-muted">
//               I’m Lark. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Cupiditate nobis sapiente obcaecati, rem exercitationem voluptate 
//               architecto doloribus perferendis delectus fugit.
//             </p>
//             <button className="btn btn-outline-dark rounded-pill px-4 py-2">See All I Have To Offer</button>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="services-section bg-light py-5">
//         <div className="container text-center">
//           <h2 className="fw-bold mb-4">Let’s Work Together</h2>
//           <div className="row">
//             <div className="col-md-6 mx-auto">
//               <div className="card border-0 shadow-sm">
//                 <img
//                   src="/images/flower2.jpg"
//                   alt="Shoot Styling"
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Shoot Styling</h5>
//                   <p className="card-text text-muted">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//                     nobis sapiente obcaecati rem exercitationem.
//                   </p>
//                   <button className="btn btn-dark rounded-pill px-4 py-2">See the Portfolio</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Accueil;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css'; // Custom CSS for additional styles

const Accueil = () => {
  return (
    <div className="accueil-page">
      {/* Hero Section */}
      <div className="hero-section position-relative text-center">
        <img
          src="/images/bgf2.avif"
          alt="Wedding Flowers Background"
          className="background1"
        />
        
        <div className="hero-content  p-5 text-white shadow-lg  bg-opacity-50">
          <h1 className="mb-3 fw-bold">Wedding Flowers</h1>
          <h4 className="mb-4">For special events and occasions</h4>
          <p className="mb-4">
            Wedding flowers are something we all remember for a lifetime. Let us create beautiful
            floral designs to make your day unforgettable.
          </p>
          <button className="btn btn-outline-light px-4 py-2 rounded-pill">Learn More</button>
        </div>
      </div>
      {/* Product Showcase Section */}
      <div className="container  mt-5 text-center">
        <h2 className="display-5 fw-bold">Our Awesome Flowers</h2>
        <p className="text-muted mb-5">Shop the collection</p>

        <div className="row g-4">
          {/* Product 1 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/images/flower5.jpeg"
                alt="Sunshine Rose & Alstroemeria Bouquet"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h5 className="card-title">Sunshine Rose & Alstroemeria Bouquet</h5>
                <p className="card-text text-secondary">$30.00</p>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/images/flower2.jpg"
                alt="Afternoon Mimosa Bouquet"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h5 className="card-title">Afternoon Mimosa Bouquet</h5>
                <p className="card-text text-secondary">$30.00</p>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/images/flower1.jpeg"
                alt="GlobalRose 50 Fresh Cut Pink Roses"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h5 className="card-title">GlobalRose 50 Fresh Cut Pink Roses</h5>
                <p className="card-text text-secondary">$40.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center py-5 bg-light mt-5">
        <h3 className="fw-bold">Let’s Work Together</h3>
        <p className="text-muted">Explore our services and see how we can make your events special.</p>
        <button className="btn btn-dark px-5 py-2 rounded-pill">See All Services</button>
      </div>

    </div>
  );
};

export default Accueil;





















