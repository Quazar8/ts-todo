import React, {Dispatch, 
       useState, ChangeEvent, KeyboardEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { addTodoAction, IActions } from '../store/actions'

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
    return {
        addToDo: (todo: string): void => {
            dispatch(addTodoAction(todo))
        }
    }
}

const connector = connect(null, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const InputView = ({ addToDo }: Props): JSX.Element => {
    const defaultState = ""
    const [inputVal, setInputVal] = useState(defaultState)

    const handleChange = 
        (e: ChangeEvent<HTMLInputElement>): void => {
        setInputVal(e.target.value)
    }

    const handleClick = (): void => {
        addToDo(inputVal)
        setInputVal(defaultState)
    }

    const handleKeyUp = (e: KeyboardEvent): void => {
        if(e.key === 'Enter') handleClick()
    }
    return (
        <section className="input-container">
            <input type="text"
                 onChange={handleChange}
                 value={inputVal}
                 onKeyUp={handleKeyUp}
            />
            <input onClick={handleClick} type="submit" value="Add" />
        </section>
    )
}



const Input = connector(InputView)

export default Input