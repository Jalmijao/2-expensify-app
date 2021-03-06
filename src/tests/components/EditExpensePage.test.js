import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense,history,wrapper,removeExpense;
beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history}
        expense={expenses[2]}  
        />);
   
});

test('should render EditExpense page',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render EditExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);

});

test('should render RemoveExpense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    });

});



