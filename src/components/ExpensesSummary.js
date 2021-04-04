import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount,expensesTotal}) => {
    const expensesWord=expensesCount === 1 ? 'expense':'expenses'
    return(
        <div>
            {`Vendo ${expensesCount} ${expensesWord} com um total de ${expensesTotal}`}
        </div>
    );
}


const mapStateToProps = (state) => {
  return {
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters)) ,
    expensesCount:state.expenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
