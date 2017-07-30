const isFunction = (obj) => (typeof obj === 'function');

const invokeOrReturn = (obj) => (isFunction(obj) ? obj() : obj);

const When = ({predicate, children}) => {
  return (predicate)?(invokeOrReturn(children)):(null)
};

export default When;
