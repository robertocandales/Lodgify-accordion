import React, { useState, useEffect } from 'react';
import CustomAccordion from '../../components/CustomAccordion';
import ProgressBar from '../../components/ProgressBar';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';

//styles
import { Container, PaperWrapper, Title } from './styles';
import { url } from '../../api';

const Tasks = () => {
  const [tasksData, setTasksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const tasksRequest = async () => {
      const { data } = await axios.get(url);
      setTasksData(data);

      setIsLoading(false);
    };
    tasksRequest();
  }, []);

  return (
    <>
      <Container>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <PaperWrapper>
              <Title>Lodgify Grouped Tasks</Title>
              <ProgressBar tasksData={tasksData} />
              <CustomAccordion tasksData={tasksData} setTasksData={setTasksData} />
            </PaperWrapper>
          </>
        )}
      </Container>
    </>
  );
};

export default Tasks;
