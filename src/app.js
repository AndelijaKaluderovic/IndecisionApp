// babel cli:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react (+ '--watch')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life into hands of a computer',
    options: ['one', 'two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options:' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)
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
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);