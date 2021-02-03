import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({ //objs or arrays
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should edit Expense',() => {
    const expense = {
        description: 'expnses for days',
        amount: 100,
        note:'dollars'
    };
    const action = editExpense ('123abc', expense);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'expnses for days',
        amount : 100,
        note: 'dollars'
        }
    });

test('should setup add expense action obj with provided values' , ()=> {
    const expenseData = {
        description: 'Rent',
        amount: 10000,
        createdAt:1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action obj with provided values' , ()=> {
    const expenseData = {};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note:'',
            amount:0,
            createdAt:0
        }
    })
})

});