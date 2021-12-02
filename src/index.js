// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>Hi There!</div>
}

// take component and show it on scren
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)