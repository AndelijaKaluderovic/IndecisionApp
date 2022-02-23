// Behind the scenes (React without components)

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const resetCount = () => {
    count = 0
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={addOne}>+1</button>
        </div>
    )

    ReactDOM.render(template, appRoot);
}
renderCounterApp();