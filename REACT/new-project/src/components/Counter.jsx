import {useState, useEffect} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClickAdd = () => {
        setCounter((_counter) => _counter + 1)
    }

    const handleClickReduce = () => {
        setCounter((_counter) => _counter -1 )
    }

    const resetCounter = () => {
        setCounter(0)
    }

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    }, [counter])

   return (
    <>
    <div>Counter: {counter}</div>
    <button onClick={handleClickAdd}>ADD</button>
    <button onClick={handleClickReduce}>REDUCE</button>
    <button onClick={resetCounter}>RESET</button>
    </>
   )
}

export default Counter;