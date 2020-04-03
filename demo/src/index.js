import {h, Component, render} from 'preact';
import {useState, useCallback} from "preact/hooks";
import './styles.css'
import lazy from "../../src";

const LazyComponent = lazy(() => import('./lazyLoaded'), () => <h2>fallback!!!</h2>);

const App = () => {

    const [show, set] = useState(false);

    return (
        <div>
            <h1>hello</h1>
            <button onClick={()=>set(!show)}>
                show
            </button>
            <LazyComponent/>
            <LazyComponent/>
            <LazyComponent/>
            <LazyComponent/>
            <LazyComponent/>
            <LazyComponent/>
            <LazyComponent>
                oh hai
                {show &&
                <LazyComponent>
                    oh hai
                    <LazyComponent>
                        oh hai
                        <LazyComponent>
                            oh hai
                        </LazyComponent>
                    </LazyComponent>
                </LazyComponent>
                }
            </LazyComponent>
        </div>
    )
};

render(<App/>, document.body);
