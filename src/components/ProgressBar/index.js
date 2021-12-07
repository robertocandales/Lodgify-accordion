import React, { useState, useEffect } from 'react';

//styles
import { StyledDiv, StyledBar, TextValue } from './styles';

const ProgressBar = ({ tasksData }) => {
  const [progressStatus, setprogressStatus] = useState(0);

  useEffect(() => {
    const vtSum = tasksData
      .map((item) => item.tasks.reduce((a, b) => a + b.value, 0))
      .reduce((a, b) => a + b, 0);

    const vtTrues = tasksData
      .map((item) =>
        item.tasks.reduce((a, b) => {
          if (b.checked) {
            return a + b.value;
          }
          return a;
        }, 0),
      )
      .reduce((a, b) => a + b, 0);

    const progress = ((vtTrues * 100) / vtSum).toFixed(2);
    setprogressStatus(progress);
  }, [tasksData]);

  return (
    <>
      <StyledDiv>
        <StyledBar completed={progressStatus}>
          <TextValue>{progressStatus}%</TextValue>
        </StyledBar>
      </StyledDiv>
    </>
  );
};

export default ProgressBar;
