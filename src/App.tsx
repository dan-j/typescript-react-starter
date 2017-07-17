import React from 'react';
import CSSModules from 'react-css-modules';
const styles = require('./_App.scss');

interface AppProps extends CSSModules.InjectedCSSModuleProps {
    name?: String;
}

const App: React.StatelessComponent<AppProps> = ({ name }) => (
    <div>
        <p styleName="greeting">Hello, {name}</p>
    </div>
);

App.defaultProps = {
    name: 'World',
};

export default CSSModules(App, styles);
