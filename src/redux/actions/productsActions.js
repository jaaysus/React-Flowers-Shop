export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const produits = [
        { id: 1, title: 'Boquette Éclat', image: '/images/flower1.jpeg' , price:100},
        { id: 2, title: 'Boquette Douceur', image: '/images/flower2.jpg' , price:120},
        { id: 3, title: 'Boquette Soleil', image: '/images/flower4.jpeg' ,price:150 },
        { id: 4, title: 'Boquette Soleil', image: '/images/flower5.jpeg' , price:90},
        { id: 5, title: 'Boquette Soleil', image: '/images/flower6.jpeg' , price:100},
        { id: 6, title: 'Boquette Soleil', image: '/images/flower2.jpg' , price:200},
        { id: 7, title: 'Boquette Soleil', image: '/images/flower1.jpeg', price:80 },
        { id: 8, title: 'Boquette Soleil', image: '/images/flower2.jpg' , price:70},

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
