// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Register from './pages/register';
import Panier from './pages/Panier';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
     
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panier" element={<Panier />} />

        <Route path="/search" element={<div>Search Page (à implémenter)</div>} />
        <Route path="/plus" element={<div>Plus Page (à implémenter)</div>} />
        <Route path="/details/:id" element={<div>Détails Produit (à implémenter)</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './pages/register';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
