import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink}  from 'react-router-dom';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import ExpenseDashBoardPage from '../components/ExpenseDashBoard';
import Header from '../components/Header';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage}  exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;