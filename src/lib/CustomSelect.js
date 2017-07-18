import React from 'react';

const CustomSelect = ({name, defaultValue, values, valueSelector}) => {
  const actualValueSelector = valueSelector || (v => v);

  <div className="form-group">
    <select className="form-control custom-select" defaultValue={defaultValue} name={name}>
      <option>{defaultValue}</option>
      {values.map(v => {
        const value = actualValueSelector(v);
        return <option key={value}>{value}</option>
      })}
    </select>
  </div>
};
export default CustomSelect;