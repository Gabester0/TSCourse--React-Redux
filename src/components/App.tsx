import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchTodos} from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: ToDo[];
    fetchTodos(): any;
}


export class _App extends React.Component<AppProps>{
    render(){
        return <div>Hi there!</div>;
    }
}

const mapStateToProps = ({todos}: StoreState): { todos: ToDo[]}=>{
    return { todos };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);