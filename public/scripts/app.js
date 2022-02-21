'use strict';

// babel cli:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react (+ '--watch')

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life into hands of a computer',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
// const user = {
//     name: 'Angie Kal',
//     age: 28
// }
// const getLocation = (location) => {
//     if (location) {
//         return location
//     } else {
//         return 'Unknown'
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>Location: {getLocation()}</p>
//     </div>
// )
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
