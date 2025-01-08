// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<div>Search Page (à implémenter)</div>} />
        <Route path="/plus" element={<div>Plus Page (à implémenter)</div>} />
        <Route path="/details/:id" element={<div>Détails Produit (à implémenter)</div>} />
      </Routes>
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
