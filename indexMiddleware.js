const redux=require('redux')  //for using redux
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware

const logger=reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"; //action type

const BUY_ICECREAM="BUY_ICECREAM";

const buycake = () => {
  //action creator
  return {
    //returning action
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const buyIcecream = () => {
  //action creator
  return {
    //returning action
    type: BUY_ICECREAM,
    info: "First redux action of icecream",
  };
};

//intila state
const InitialStateCake={numOfCakes: 10}
const IntialStateIcecream={numOfIcecreams:50}


//Cake reducer
const Cakereducer = (state = InitialStateCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
          ...state, //to make coppy od original state
        numOfCakes: state.numOfCakes - 1,
      };

      
      default:return state;
  }
};
 //Icecream reducer

 const IceCreamReducer = (state = IntialStateIcecream, action) => {
  switch (action.type) {
    

      case BUY_ICECREAM:
      return {
          ...state, //to make coppy od original state
          numOfIcecreams: state.numOfIcecreams - 1,
      };
      default:return state;
  }
};


const rootreducer=combineReducers({
  cake:Cakereducer,
  icecream:IceCreamReducer
})


//For creating store

const store=createStore(rootreducer,applyMiddleware(logger))

console.log('Initial State',store.getState());//to get state

const unsubcribe=store.subscribe(()=>{})//to subcribe to state changes and also to unsubcribe

store.dispatch(buycake()) //to dispatch/invoke action

store.dispatch(buycake()) 
store.dispatch(buycake()) 

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubcribe()  //to unsubcribe