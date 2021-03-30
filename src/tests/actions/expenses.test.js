import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'1231232'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1231232'
    });
});

test('should setup edit expense action object',()=>{
    const action=editExpense(1231232,{amount:21});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:1231232,
        updates:{amount:21}
    });
});

test('should setup add expense action object',()=>{
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 100,
        note: 'testandoo'
    }

    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should setup add expense action object with default values',()=>{
    const expenseDefaultData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseDefaultData,
            id: expect.any(String)
        }
    });
});