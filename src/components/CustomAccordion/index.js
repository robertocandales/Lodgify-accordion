import React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

//styles
import {
  StyleAccordion,
  IconWrapper,
  FlexLayout,
  StyleAccordionSummary,
  Text,
  TextTransformation,
} from './styles';
import CustomCheckBox from '../CustomCheckBox';

const CustomAccordion = ({ tasksData = [], setTasksData }) => {
  const [expanded, setExpanded] = React.useState('panel1');
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {(tasksData || []).map((taskItem, i) => (
        <StyleAccordion
          key={i}
          expanded={expanded === `panel${i + 1}`}
          onChange={handleChange(`panel${i + 1}`)}>
          <StyleAccordionSummary
            expandIcon={
              <>
                {expanded === `panel${i + 1}` ? (
                  <FlexLayout align='center'>
                    <ExpandMoreIcon /> <TextTransformation>Hiden</TextTransformation>
                  </FlexLayout>
                ) : (
                  <FlexLayout align='center'>
                    Show <ExpandMoreIcon />
                  </FlexLayout>
                )}
              </>
            }
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
