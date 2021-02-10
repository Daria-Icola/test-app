import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './components/redux/redux-store';

import reportWebVitals from './reportWebVitals';


// let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )


// rerenderTree(store.getState());
// store.subsctibe(() => {
//     let state = store.getState()
//     rerenderTree(state)
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
