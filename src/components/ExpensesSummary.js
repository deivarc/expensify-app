import total from '../selectors/expenses-total';
import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expenses from '../selectors/expenses';

export const ExpensesSummary = (props) => (
    <div> Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal).format('$0,0[.]00')}</div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: total(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);