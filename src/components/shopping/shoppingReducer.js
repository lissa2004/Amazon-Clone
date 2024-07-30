export const shoppingReducer= (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.payload]
        };

        case"REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload.id);
            let newBasket = state.basket.filter(basketItem => basketItem.id !== action.payload.id);
           if(index >= 0) {
            newBasket.splice(index, 1)
           }else{
            console.warn(`Cannot remove item with id ${action.payload.id} as it is not in the basket`);
           };
           return{
            ...state,
            basket: newBasket,
           };
           case"EMPTY_BASKET":
        return{
            ...state,
            basket: [],
        }
  
        case"SET_USER":
        return{
            ...state,
            user: action.payload,
        }
        default:
            return state;
    }
};