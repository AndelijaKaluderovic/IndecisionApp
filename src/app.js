// babel cli:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react (+ '--watch')

// Conditional rendering
// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life into hands of a computer',
//     options: ['one', 'two']
// }
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//     </div>
// )


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