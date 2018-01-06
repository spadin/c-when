# `<When/>`

[![Greenkeeper badge](https://badges.greenkeeper.io/spadin/c-when.svg)](https://greenkeeper.io/)

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

you can also pass a function as the child of `<When/>`. The function should not
need any parameters and should return the children you'd like rendered when
`predicate` is `true`. Passing in a function is useful when the `children` need
to access objects that are only available if the `predicate` is `true`.

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

If you'd rather pass in a render prop, you can do that instead.

```js
import When from 'c-when';

const App = ({user}) => (
  <div>
    <When
      predicate={user}
      render={() => (
        <div>Welcome back {user.name}!</div>
      )}
    />
  </div>
);
```

[build-badge]: https://img.shields.io/travis/spadin/c-when/master.png?style=flat-square
[build]: https://travis-ci.org/spadin/c-when

[npm-badge]: https://img.shields.io/npm/v/c-when.png?style=flat-square
[npm]: https://www.npmjs.org/package/c-when

[coveralls-badge]: https://img.shields.io/coveralls/spadin/c-when/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/spadin/c-when
