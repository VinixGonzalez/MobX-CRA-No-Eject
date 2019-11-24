import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'mobx-react';
import RootStore from '../src/mobx/RootStore';

const Root = (
    <Provider RootStore={RootStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));

