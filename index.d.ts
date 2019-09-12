/**
    A simple and morden deep clone tool with history api.
    @param target - The target to be cloned.
    @returns a deep copy target.
    @example
    ```js
    import clone from 'h-clone';

    clone(anything);
    ```
*/
declare function clone<T>(target: T): T;
export default clone;