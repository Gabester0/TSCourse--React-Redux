import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

//Random comment to delete soon

interface FetchTodosAction {
    type: ActionTypes.FETCH_TODOS;
    payload: ToDo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () =>{
    return async(dispatch: Dispatch)=>{
        const response = await axios.get<ToDo[]>(url);

        dispatch<FetchTodosAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: response.data
        })
    };
};