import React from 'react';

const CustomSelect = ({values, valueSelector, ...rest}) => {
  const actualValueSelector = valueSelector || (v => v);

  <div className="form-group">
    <select className="form-control custom-select" {...rest}>
      {defaultValue && <option>{defaultValue}</option>}
      {values && values.map(v => {
        const value = actualValueSelector(v);
        return <option key={value}>{value}</option>
      })}
    </select>
  </div>
};
export default CustomSelect;