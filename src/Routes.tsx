import Header from 'components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MySkills from './pages/MySkills';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/myskills">
                    <MySkills />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;