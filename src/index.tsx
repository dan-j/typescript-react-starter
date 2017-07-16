import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (Component: typeof App) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('content'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
    });
}

