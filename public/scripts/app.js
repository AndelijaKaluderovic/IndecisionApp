'use strict';

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

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var resetCount = function resetCount() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: resetCount },
            'reset'
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        )
    );

    ReactDOM.render(template, appRoot);
};
renderCounterApp();
