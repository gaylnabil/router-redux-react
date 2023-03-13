import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, multiple, divide } from './../redux/slices/CounterSlice.js'

const Counter = () => {
    const count = useSelector((state) => state.counterStore.count);
    const [ value, setValue ] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="redux">
                <h1>Using React Redux</h1>


                <div className="row px-4">
                    <h2>Counter: {count}</h2>
                    <div className="col-6 mb-2">
                        <button
                            className="btn btn-primary form-control"
                            onClick={() => dispatch(increment())}
                        >
                            Plus
                        </button>

                    </div>
                    <div className="col-6">
                        <button
                            className="btn btn-warning form-control"
                            onClick={() => dispatch(decrement())}
                        >
                            Minus
                        </button>
                    </div>
                </div>
                <div className="row px-4">
                    <div className="col-6">
                        <input
                            className="form-control"
                            type="text"
                            name="numbers"
                            placeholder="multiplier.."
                            id="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="col-3">
                        <button
                            className="btn btn-primary form-control"
                            onClick={() => dispatch(multiple(value))}
                        >
                            Multiple
                        </button>

                    </div>
                    <div className="col-3">
                        <button
                            className="btn btn-warning form-control"
                            onClick={() => dispatch(divide(value))}
                        >
                            Divide
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Counter
