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
      return store
    }
    else{
      store.loggedIn = false;
      return store
    }

    case 'STORE_USER_INF0':
    if(action.payload){
      var data = action.payload;
      var user = store.userInfo;
      user._id = data._id;
      user.name = data.name;
      user.wishlist = data.wishlist;
      user.cart = data.cart;
      return store
    }
    break;

    case 'UPDATE_PRODUCT_ID':
      var newId = {productId: action.payload}
      return store = Object.assign({}, store, newId)

    case 'ADD_TO_GUEST_CART':
      return store = Object.assign({}, store, {guestCart: store.guestCart.concat(action.payload)})

    case 'REMOVE_FROM_GUEST_CART':
    var updatedCart = store.guestCart.filter((num) => {
      return num !== action.payload
    })
    return store = Object.assign({}, store, {guestCart: updatedCart})
    default:
      return store
  }
}
export default manageStore
