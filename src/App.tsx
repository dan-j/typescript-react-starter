import React from 'react';
import CSSModules from 'react-css-modules';
const styles = require('./_App.scss');

interface AppProps extends CSSModules.InjectedCSSModuleProps {
    name?: String;
}

const App: React.StatelessComponent<AppProps> = ({ name }) => {

    let greg;
    if (name === 'Greg') {
        greg = <h3>Your name is Greg!</h3>;
    }

    return (
        <div>
            <p styleName="greeting">Hello, {name}</p>
            {greg}
        </div>
    );
};

App.defaultProps = {
    name: 'World',
};

export default CSSModules(App, styles);
