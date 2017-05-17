var defaultStore = {
  loggedIn: false,
  userInfo: {},
  productId: null,
  guestCart: []
}

function manageStore(store=defaultStore, action){
  switch(action.type){

    case 'UPDATE_LOGGED_IN':
    if(action.payload === 'success'){
      store.loggedIn = true;
    }
    else{
      store.loggedIn = false;
    }
    console.log(store.loggedIn)
    break;

    case 'STORE_USER_INF0':
    if(action.payload){
      var data = action.payload;
      var user = store.userInfo;
      user._id = data._id;
      user.name = data.name;
      user.wishlist = data.wishlist;
      user.cart = data.cart;
    }
    console.log(store.userInfo)
    break;

    case 'UPDATE_PRODUCT_ID':
    if(action.payload){
      store.productId = action.payload;
    }
    console.log(store.productId)
    break;

    case 'ADD_TO_GUEST_CART':
    if(action.payload){
      store.guestCart.push(action.payload)
    }
    console.log(store.guestCart)
    break;

    case 'REMOVE_FROM_GUEST_CART':
    if(action.payload){
      for(var i = 0; i < store.guestCart.length; i++){
        if(store.guestCart[i] === action.payload){
          store.guestCart.splice(i, 1);
        }
      }
    }
    console.log(store.guestCart)
    break;
  }
}
export default manageStore
