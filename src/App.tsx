import React from 'react';

interface AppProps {
    name?: String;
}

const App: React.StatelessComponent<AppProps> = ({ name }) => {
    return (
        <div>
            <p>Hello, {name}</p>
        </div>
    );
};

App.defaultProps = {
    name: 'World',
};

export default App;
