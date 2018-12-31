import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './types'
import uuid from 'uuid/v1'

let idCounter = 0;

export const addTodo = todo => {
    console.log('addTodo')
    return({
        type: ADD_TODO,
        payload: {
            id: uuid(),
            content: todo,
            completed: false
        }
    })
}

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const deleteTodo = id => {
    console.log('deleteTodo')
    return ({
        type: DELETE_TODO,
        payload: { id }
    })
}