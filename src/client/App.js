import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo } from '../redux/action/creators'
import { getTodoList } from '../redux/util/selectors'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            ids: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.addTodo(this.state.input)
        this.setState({ 
            input: ''
        })
    }
    handleDelete(e) {
        console.log(e.target)
        
        e.target.parentNode.parentNode.childNodes.forEach(
            (item, index) => {
                if(item == e.target.parentNode) {
                    this.props.deleteTodo(this.state.ids[index])
                    const ids = this.state.ids
                    ids.splice(index,1)
                    this.setState({ ids })
                }
        })
    }

    componentWillMount() {
        const ids = this.props.todoList.map( todo => todo.id)

        this.setState({ ids }, () => console.log(ids))
    }

    render() {
        return(
            <div>
                <h1>Todo List</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder='What to do?'
                    />
                    <input
                        type='submit'
                        value='Add Me'
                    />
                </form>
                <hr/>
                <ul>
                    {this.props.todoList.map(todo => (
                        <li 
                            key={todo.id}
                            
                        >
                        {todo.content} - {todo.completed ? 
                            '(completed)':
                            '(not completed)'
                        }
                        <span onClick={this.handleDelete}> X</span>
                        </li>))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todoList: getTodoList(state)
})

export default connect(
    mapStateToProps,
    { 
        addTodo,
        deleteTodo
    }
)(App)

// export default App