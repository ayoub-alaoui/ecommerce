const intialState={
    cartItems:[], 
    hidden: true
  };
const CartReducer=(state=intialState,action)=>{
    console.log(state)
    switch (action.type) {
    case "ADD":{
        let item=state.cartItems.find(item=>item.id === action.data.id); 
        let itemsFiltered = state.cartItems.filter(item=>item.id !== action.data.id); 

        if(item){
            item.quantite += 1;
        }else{
             item ={...action.data, quantite:1}
        }
        return {
            ...state, 
            cartItems: [...itemsFiltered,item]
        }
     
  }
   case "TOGGLE_CART" : {
       return {
           ...state, 
           hidden: !state.hidden
       }
   }
      default:
        return state
       
    }
 
  }


  export default CartReducer;