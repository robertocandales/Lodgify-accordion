import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckBox = ({ changeCheckValue, checked, setChecked, taskItem, index }) => {
  //  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    //setChecked(event.target.checked);
    changeCheckValue(taskItem, index);
  };
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  );
};

export default CustomCheckBox;
