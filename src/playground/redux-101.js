import {createStore} from 'redux';


//action generator

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy=1}={}) => ({
    type: 'DECREMENT',
    decrementBy 
});

const setCount = ({counter=state.count}={}) => ({
    type:"SET",
    counter
});

const resetCount = () => ({
    type:"RESET"
});

//Reducers
const countReducer = (state = { count:0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count:state.count-action.decrementBy
            };
        case 'RESET' :
            return {
                count:0
            };
        case 'SET' :
            return {
                count: action.counter
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);


const unsubscribe=store.subscribe(
    ()=>{
        console.log(store.getState());
    }
);

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 23}));


store.dispatch(resetCount());

store.dispatch(setCount({counter : 12}));

unsubscribe();


