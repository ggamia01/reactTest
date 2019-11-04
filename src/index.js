import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*브라우저상에 리액트 컴포넌트를 보여주기 위한 함수. (렌더링할 결과물, 컴포넌트를 그려줄  DOM)) */
ReactDOM.render(<App />, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
