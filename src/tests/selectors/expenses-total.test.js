import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';



test('should return 0 if no expeses',()=>{
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
})
 
test('should return right value for a single expense',()=>{
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(198);
})

test('should return right value for mutiple expense',()=>{
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
})