import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-top: 10vh;
`;

export const PaperWrapper = styled(Paper)`
  padding: 4vh 2vh 4vh 2vh;
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Title = styled.h2``;
