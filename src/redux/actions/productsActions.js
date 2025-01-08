export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const produits = [
        { id: 1, title: 'Boquette Éclat', image: '/images/flower1.jpeg' },
        { id: 2, title: 'Boquette Douceur', image: '/images/flower2.jpg' },
        { id: 3, title: 'Boquette Soleil', image: '/images/flower4.jpeg' },
        { id: 4, title: 'Boquette Soleil', image: '/images/flower5.jpeg' },
        { id: 5, title: 'Boquette Soleil', image: '/images/flower6.jpeg' },
        { id: 6, title: 'Boquette Soleil', image: '/images/flower2.jpg' },
        { id: 7, title: 'Boquette Soleil', image: '/images/flower1.jpeg' },
        { id: 8, title: 'Boquette Soleil', image: '/images/flower2.jpg' },

      ];
      dispatch({
        type: GET_PRODUCTS,
        payload: produits,
      });
    } catch (error) {
      console.error('Erreur de récupération des produits:', error);
    }
  };
};
