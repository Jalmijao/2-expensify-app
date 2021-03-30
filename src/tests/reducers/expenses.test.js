import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state= expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id is not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense',()=>{
    const expense={
        id:'109',
        description:'aa',
        note:'',
        amount:0,
        createdAt:0     
    }
    const action={
        type:'ADD_EXPENSE',
        expense
        
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});


test('should edit an expense',()=>{
    const updates={
        id:'109',
        description:'aa',
        note:'',
        amount:0,
        createdAt:0     
    }
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates     
    };
    const state=expensesReducer(expenses,action);
    expect(state[0]).toEqual(updates);
});

test('should not edit an expense if not found',()=>{
    const updates={
        id:'109',
        description:'aa',
        note:'',
        amount:0,
        createdAt:0     
    }
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates     
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});


// store.dispatch(editExpense(expenseOne.expense.id,{ amount:500 }))

//const expenseTwo = store.dispatch(
    //addExpense({description:'cafe',amount:1,createdAt:-1000}));

// store.dispatch(removeExpense({id:expenseTwo.expense.id}));

// export default (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//       case 'ADD_EXPENSE':
//         return [
//           ...state,
//           action.expense
//         ];
//       case 'REMOVE_EXPENSE':
//         return state.filter(({ id }) => id !== action.id);
//       case 'EDIT_EXPENSE':
//         return state.map((expense) => {
//           if (expense.id === action.id) {
//             return {
//               ...expense,
//               ...action.updates
//             };
//           } else {
//             return expense;
//           };
//         });
//       default:
//         return state;
//     }
//   };
  