import styled from '@emotion/styled';

export const StyledDiv = styled('div')`
  background-color: lightgray;
  margin: 2vh 0 4vh 0;
  border-radius: 50px;
`;

export const StyledBar = styled('div')`
  background-color: green;
  height: 30px;
  width: ${({ completed }) => completed}%;
  border-radius: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TextValue = styled('div')`
  border-radius: 50px;
  padding-right: 10px;
  color: white;
  font-weight: bold;
`;
