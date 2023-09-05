import { render } from 'preact'
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { App } from './app.tsx'
import './index.css'
import { HomeBG, updatePath } from './components/HomeBG.tsx';
//import { Photography } from './pages/Photography/photography.tsx';

function Core() {

    function getPhotography() {
        return import('./pages/Photography/photography.tsx').then(module => module.Photography);
    }

    function getGames() {
        return import('./pages/Games/games.tsx').then(module => module.Games);
    }
    
    // @ts-ignore
    const handleRoute = async e => {
        updatePath(e.url)
    }

    return (
        <>
            <HomeBG />
            <Router onChange={handleRoute}>
                <App path="/" />
                <AsyncRoute
                    path="/photography"
                    getComponent={getPhotography}
                />

                <AsyncRoute
                    path='/games'
                    getComponent={getGames}
                />
            </Router>
        </>
    )
}

render(<Core />, document.getElementById('app') as HTMLElement)
