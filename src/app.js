// import './utils.js';
// import { square,add } from './utils.js';
// import isSenior,{canDrink,isAdult} from './person.js';
// console.log(canDrink(13));
// console.log(isSenior(50));
// console.log(isAdult(13));
// console.log('hi new asp.js');
// console.log(square(4));
// console.log(add(1,3));
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense,removeExpense,editExpense} from './actions/expenses';
import {setTextFilter,setEndDate,setStartDate,sortByAmount,sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import {Provider} from 'react-redux';

const store = configureStore();

store.getState();

store.subscribe(()=>{
    console.log(store.getState());
});

const waterBill=store.dispatch(addExpense({description:'Water Bill',amount:500}));
const gasBill=store.dispatch(addExpense({description:'Gas Bill',amount:200}));
store.dispatch(addExpense({description:'Rent',amount:1950}));
//store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));
const showExpenses = getVisibleExpenses(store.getState().expenses,store.getState().filters);
console.log (showExpenses);

const jsx= (<Provider store={store}>
    <AppRouter />
    </Provider>);
ReactDOM.render(jsx, document.getElementById('here'))