import { ToDo, FetchTodosAction, ActionTypes } from '../actions';


export const todosReducer = (state: ToDo[] = [], action: FetchTodosAction) =>{
    switch (action.type){
        case ActionTypes.FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
};