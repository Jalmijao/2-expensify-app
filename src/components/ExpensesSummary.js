import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
 
    <p>
        {
            `Vendo ${props.expenses.length} expenses totalizando 
            ${numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}
            reais
            `     
        }
     </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
