const redux=require('redux')  //for using redux

const createStore=redux.createStore

const BUY_CAKE = "BUY_CAKE"; //action type

const buycake = () => {
  //action creator
  return {
    //returning action
    type: BUY_CAKE,
    info: "First redux action",
  };
};




const initialState = {
  //state
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
          ...state, //to make coppy od original state
        numOfCakes: state.numOfCakes - 1,
      };
      default:return state;
  }
};


//For creating store

const store=createStore(reducer)

console.log('Initial State',store.getState());//to get state

const unsubcribe=store.subscribe(()=>console.log('Updated state',store.getState()))//to subcribe to state changes and also to unsubcribe

store.dispatch(buycake()) //to dispatch/invoke action

store.dispatch(buycake()) 
store.dispatch(buycake()) 

unsubcribe()  //to unsubcribe