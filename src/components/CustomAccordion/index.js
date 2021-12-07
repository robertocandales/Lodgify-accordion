import React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

//styles
import { StyleAccordion, IconWrapper, FlexLayout, StyleAccordionSummary, Text } from './styles';
import CustomCheckBox from '../CustomCheckBox';

const CustomAccordion = ({ tasksData = [], setTasksData }) => {
  const changeCheckValue = (info, indexToChange) => {
    const arrayChanged = tasksData.map((item) => {
      if (info.name === item.name) {
        const newObject = {
          name: item.name,
          tasks: item.tasks.map((value, i) => {
            if (i === indexToChange) {
              const t = { ...value, checked: !value.checked };
              return t;
            }
            return value;
          }),
        };
        return newObject;
      }
      return item;
    });
    setTasksData(arrayChanged);
  };

  return (
    <>
      {(tasksData || []).map((taskItem, i) => (
        <StyleAccordion key={i}>
          <StyleAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <IconWrapper>
              <AssignmentOutlinedIcon />
            </IconWrapper>
            <Text weight='500'>{taskItem.name}</Text>
          </StyleAccordionSummary>
          <FlexLayout flexDirection={'column'}>
            {(taskItem.tasks || []).map((task, index) => (
              <FlexLayout key={index} align='center'>
                <CustomCheckBox
                  changeCheckValue={changeCheckValue}
                  checked={task.checked}
                  taskItem={taskItem}
                  index={index}
                />
                <Typography>{task.description ? task.description : task.name}</Typography>
              </FlexLayout>
            ))}
          </FlexLayout>
        </StyleAccordion>
      ))}
    </>
  );
};

export default CustomAccordion;
