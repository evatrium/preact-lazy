# preact-lazy

> Asynchronously load preact components with optional fallback content (simple alternative to suspense + lazy).


### Installation
```
npm install preact-lazy
```
### Usage

```js
// ToBeLazyLoaded.js
import {h} from 'preact';
// export must be default
export default () => <h1>LAZY LOADED!!!</h1>;
```

```js
import {h, render} from 'preact';
import lazy from 'preact-lazy'
import {FallbackComponent} from './components'; 
const ToBeLazyLoaded = lazy(() => import('./ToBeLazyLoaded'), /*optional*/ FallbackComponent);

const App = () => (

    <div>
        <h1>hello</h1>
        <ToBeLazyLoaded/>
    </div>

);
```