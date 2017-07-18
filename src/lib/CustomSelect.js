import React from 'react';

const CustomSelect = ({values, valueSelector, defaultValue, ...rest}) => {
  const actualValueSelector = valueSelector || (v => v);

  return (
    <select className="form-control custom-select" defaultValue={defaultValue} {...rest}>
      {defaultValue && <option>{defaultValue}</option>}
      {values && values.map(v => {
        const value = actualValueSelector(v);
        return <option key={value}>{value}</option>
      })}
    </select>
  );
};
export default CustomSelect;