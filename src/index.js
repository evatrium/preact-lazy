import {h} from "preact";
import {useState, useEffect, useRef} from "preact/hooks";

export default (importFn, fallback, _loaded) =>

    (props, context, [{C}, set] = useState({C: _loaded || fallback}), unmounted = useRef()) => (

        useEffect(() =>

            (!_loaded && importFn()
                    .then(({default: comp}) =>

                        (_loaded = comp, unmounted.current || set({C: comp}))),

                    () => unmounted.current = 1

            ), []),

            C ? <C {...props}/> : null
    );
