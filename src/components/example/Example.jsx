import { useState } from 'react';

export default function Example () {
    let [count, setCount] = useState(0);
    console.log(count);

    return (
        <>
        <div className="container">
            <p>You clicket {count}</p>
            <button className='btn btn-secondary btn-sm ms-1' onClick= {() => setCount(++count)}>Click me</button>
        </div>
        </>
    )
}