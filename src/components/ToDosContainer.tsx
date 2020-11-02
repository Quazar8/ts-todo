import React from 'react'
import { connect } from 'react-redux'
import { IState } from '../store/store'

import ToDoRow from './ToDoRow'

interface IToDosContainerState {
    todos: string[]
}

const ToDosContainerView = 
    ({ todos }): JSX.Element => {

    const renderTodos = (todo: string): JSX.Element => {
        return (
            <ToDoRow todo={todo} />
        )
    }
    return (
        <section>
            {todos.length > 0
             ? todos.map(renderTodos)
             : <h1>No todos yet.</h1>
            }
        </section>
    )
}

const mapStateToProps = 
    (state: IState): IToDosContainerState => {
    return {
        todos: state.todos
    }
}

const ToDosContainer = connect(mapStateToProps)(ToDosContainerView)

export default ToDosContainer