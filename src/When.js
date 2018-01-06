const isFunction = (obj) => (typeof obj === 'function');

const invokeOrReturn = (obj) => (isFunction(obj) ? obj() : obj);

const When = ({predicate, children, render}) => (
  (predicate)?(invokeOrReturn(render || children)):(null)
);

export default When;
