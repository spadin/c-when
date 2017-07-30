# `<When/>`

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

### Use case

Instead of using inline JavaScript to check a condition

```js
const App = ({isLoggedIn}) => (
  <div>
    {(isLoggedIn)?(
      <div>Some secret content here</div>
    ):(null)}
  </div>
);
```

you can use `<When/>` to conditionally render some React

```js
import When from 'c-when';

const App = ({isLoggedIn}) => (
  <div>
    <When predicate={isLoggedIn}>
      <div>Some secret content</div>
    </When>
  </div>
);
```

you can also pass a function as the child of `<When/>`, this way, the child will be invoke only if the predicate is `true`.

```js
import When from 'c-when';

const App = ({user}) => (
  <div>
    <When predicate={user}>
    {() => (
      <div>Welcome back {user.name}!</div>
    )}
    </When>
  </div>
);
```

[build-badge]: https://img.shields.io/travis/spadin/c-when/master.png?style=flat-square
[build]: https://travis-ci.org/spadin/c-when

[npm-badge]: https://img.shields.io/npm/v/c-when.png?style=flat-square
[npm]: https://www.npmjs.org/package/c-when

[coveralls-badge]: https://img.shields.io/coveralls/spadin/c-when/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/spadin/c-when
