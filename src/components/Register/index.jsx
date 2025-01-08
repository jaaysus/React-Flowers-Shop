//src/components/Register/index.jsx
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/actions/authActions';

const Register = ({ registerUser, loading, error, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.username) {
      setValidationError('Tous les champs sont requis');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setValidationError('Les mots de passe ne correspondent pas');
      return false;
    }
    if (formData.password.length < 6) {
      setValidationError('Le mot de passe doit contenir au moins 6 caractères');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');
    
    if (validateForm()) {
      registerUser({
        email: formData.email,
        username: formData.username,
        password: formData.password 
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mx-auto max-w-md mt-10 p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>
        
        {validationError && (
            <div className="text-red-500 text-sm mb-4">{validationError}</div>
        )}
        
        {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom d'utilisateur</label>
            <input type="text" name="username" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1"> Mot de passe </label>
            <input type="password" name="password" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirmer le mot de passe</label>
            <input type="password" name="confirmPassword" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Chargement...' : 'S\'inscrire'}
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated 
});

export default connect(mapStateToProps, { registerUser })(Register);
