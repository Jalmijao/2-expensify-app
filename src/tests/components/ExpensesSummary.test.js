import {ExpensesSummary} from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';

test('Should render Expenses summary correctly with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={333}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render Expenses summary correctly with more than 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expensesCount={7} expensesTotal={3232322}/>);
    expect(wrapper).toMatchSnapshot();
});