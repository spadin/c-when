const When = ({predicate, children}) => (
  (predicate)?(children):(null)
);

export default When;
