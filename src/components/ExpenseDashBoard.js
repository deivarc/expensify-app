import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';
import ExpenseListItem from './ExpenseListItem';

const ExpenseDashBoardPage = () => (
    <div>
    <ExpenseListFilters />
        <ExpenseList/ >        
    </div>
);

export default ExpenseDashBoardPage;