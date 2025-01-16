// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Register from './pages/register';
import Panier from './pages/Panier';
import Header from './pages/Header';
import Footer from './pages/Footer';
import DetailleProduct from './pages/DetailleProduct';
import ProduitsVedette from './pages/ProduitsVedette';
import About from './pages/about';
import './App.css';
function App() {
  return (
     <div className='all'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/plus" element={<ProduitsVedette />} />
        <Route path="/details/:id" element={<DetailleProduct />} />
      </Routes>
      <Footer />
    </Router>
    </div>
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
