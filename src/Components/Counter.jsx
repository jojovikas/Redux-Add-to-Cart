import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseby1, decreaseby1, increaseby10, decreaseby10 } from '../redux/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increaseby1())}>Increase 1</button>
            <button onClick={() => dispatch(decreaseby1())}>Decrease 1</button>
            <button onClick={() => dispatch(increaseby10())}>Increase 10</button>
            <button onClick={() => dispatch(decreaseby10())}>Dcrease 10</button>

        </div>
    )
}

export default Counter
