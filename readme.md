# h-clone

a simple and morden deep clone tool.

because h-clone use `history api` to make a structure date copy, so it only support modern brower env. ie10+ maybe?

⚠️：only for the brower env with history api.

## usage

```js
import clone from 'h-clone'

const target = {
    name: 'tom',
    age: 12,
    boy: true,
    info: {
        add: 'xxx'
    }
};

const copy = clone(target);
```

## support type

- All primitive types, however, not symbols
- Boolean object
- String object
- Date
- RegExp
- Blob
- File
- FileList
- ArrayBuffer
- ArrayBufferView
- ImageBitmap
- ImageData
- Array
- Object
- Map
- Set

tips:

1. The lastIndex field of RegExp objects is not preserved.
2. Property descriptors, setters, and getters (as well as similar metadata-like features) are not duplicated. For example, if an object is marked read-only using a property descriptor, it will be read-write in the duplicate, since that's the default condition.
3. The prototype chain does not get walked and duplicated.
4. Error and Function objects cannot be duplicated by the structured clone algorithm; attempting to do so will throw a DATA_CLONE_ERR exception.
5. Attempting to clone DOM nodes will likewise throw a DATA_CLONE_ERR exception.

but, most of our use case, it's enough!

# lisence

MIT