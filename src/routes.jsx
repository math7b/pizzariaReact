import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    );
}

export default Routes;