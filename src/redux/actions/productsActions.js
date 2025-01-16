export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const produits = [
        { id: 1, title: 'Boquette Éclat', image: '/images/flower1.jpeg' , category:'ssimsim' , description: 'belle bouquet' , price:100},
        { id: 2, title: 'Boquette Douceur', image: '/images/flower2.jpg' , category:'ssimsim' , description: 'belle bouquet' , price:120},
        { id: 3, title: 'Boquette Soleil', image: '/images/flower4.jpeg' , category:'ssimsim' , description: 'belle bouquet' ,price:150 },
        { id: 4, title: 'Boquette Soleil', image: '/images/flower5.jpeg' , category:'ssimsim' , description: 'belle bouquet' , price:90},
        { id: 5, title: 'Boquette Soleil', image: '/images/flower6.jpeg' , category:'ssimsim' , description: 'belle bouquet' , price:100},
        { id: 6, title: 'Boquette Soleil', image: '/images/flower2.jpg' , category:'ssimsim' , description: 'belle bouquet' , price:200},
        { id: 7, title: 'Boquette Soleil', image: '/images/flower1.jpeg' , category:'ssimsim' , description: 'belle bouquet', price:80 },
        { id: 8, title: 'Boquette Soleil', image: '/images/flower2.jpg'  , category:'ssimsim' , description: 'belle bouquet', price:70},

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
