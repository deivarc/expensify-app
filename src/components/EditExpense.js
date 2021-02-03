import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import expenses from '../selectors/expenses';
import ExpenseForm from './ExpenseForm'
const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm 
            expense = {props.expense}
            onSubmit={(expense)=> {
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
                console.log('updated', expense);
            }
        }
         />
         <button onClick ={()=>{
             props.dispatch(removeExpense(props.expense.id));
             props.history.push('/');
             console.log("deleted", props.expense)
         }}>Remove</button>
        </div>
    )
};



const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id===props.match.params.id
        })
    }
};

export default connect(mapStateToProps)(EditExpensePage);