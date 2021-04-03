import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: ToDo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}


export class _App extends React.Component<AppProps>{
    onButtonClick = ():void =>{
        this.props.fetchTodos();
    };

    onTodoClick = (id: number): void =>{
        this.props.deleteTodo(id);
    };

    renderList():JSX.Element[] {
        return this.props.todos.map((todo: ToDo)=>{
            return <div key={todo.id} onClick={()=> this.onTodoClick(todo.id)}>{todo.title}</div>
        })
    };

    render(){
        console.log(this.props.todos)
        return(
            <div>
                <button onClick={this.onButtonClick} >Fetch</button>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = ({todos}: StoreState): { todos: ToDo[]}=>{
    return { todos };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(_App);