# Notes

Tutorial: https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest

## Enzyme

### Shallow 

* https://airbnb.io/enzyme/docs/api/ShallowWrapper/debug.html
* https://airbnb.io/enzyme/docs/api/shallow.html


```
console.log(wrapper.debug());
```

This will output

```
console.log src/components/__tests__/List.test.js:12
    <ul className="list-items">
      <ListItem item="one" />
      <ListItem item="two" />
      <ListItem item="three" />
    </ul>
```

When using `shallow` testing, the children will not be rendered in the test
e.g. `ListItem` component `<li>` elements 
So therefore cannot check for `<li>` elements in the test

### Mount

If we want to test the entire tree of a component

### Static Rendering

https://airbnb.io/enzyme/docs/api/render.html

Static HTML is returned instead of an instance of what is rendered