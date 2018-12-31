import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../action/types'
import { deleteTodoItemById } from '../util/selectors'
const initialState = {
    todos: []
}

const todo = (state = initialState, action) => {
    const { type, payload } = action
    const { todos } = state
    
    switch(type) {
        case ADD_TODO:
            console.log('ADD_TODO')
            return({
                todos: [...todos, payload]
            })
        case TOGGLE_TODO:
            console.log('TOOGLE_TODO')
            return state
        case DELETE_TODO:
            console.log('DELETE_TODO', payload.id)
            return({
                todos: deleteTodoItemById(state, payload.id)
            })
        default:
            return state
    }
}

export default todo