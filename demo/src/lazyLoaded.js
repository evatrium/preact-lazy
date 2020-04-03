import {h} from 'preact';


export default ({children}) => {

    return (
        <div>

            <h1>LAZY LOADED!!!!</h1>
            {children}
        </div>
    )
}