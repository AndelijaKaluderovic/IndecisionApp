console.log("App.js by React");

//JSX JavaScript XML 
// const template = <p>This is JSX from app.js</p>;
const template = React.createElement("h1", null, "Something new");
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);