import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckBox = ({ changeCheckValue, checked, taskItem, index }) => {
  const handleChange = (event) => {
    changeCheckValue(taskItem, index);
  };
  return (
    <>
      <Checkbox
        color='warning'
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  );
};

export default CustomCheckBox;
