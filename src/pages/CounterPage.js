import Button from "../components/Button";
import {useReducer} from "react";
import {Panel} from "../components/Panel";
import {produce} from "immer";

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const CHANGE_VALUE = 'change-value'
const ADD_VALUE_TO_COUNT = 'add-to-count'
const reducer = (state, action) => {
    // whatever gets returned will be new state. no requests/async await
    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // }
    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1
    //     }
    // }
    // if (action.type === CHANGE_VALUE) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload,
    //         count: state.count + action.payload
    //     }
    // }
    // return state

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count+ 1;
            return;

        case DECREMENT_COUNT:
            state.count = state.count - 1
            return;

        case CHANGE_VALUE:
            state.valueToAdd = action.payload;
            return;

        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return;
        default:
            throw new Error('unexpected action type: '+ action.type);

    }
}

export default function CounterPage({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        // setCount(count + 1);
        dispatch({type: 'increment'});
    }
    const decrement = () => {
        // setCount(count - 1);
        dispatch({type: 'decrement'});
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: 'change-value',
            payload: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd)
        // setValueToAdd(0)
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
    }

    return (<Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || ""} onChange={handleChange} type="number"
                   className="p-1 m-3 bg-gray-50 border border-gray-300"/>
            <Button>Add it!</Button>
        </form>
    </Panel>)

}