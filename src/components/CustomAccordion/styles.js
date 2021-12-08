import styled from '@emotion/styled';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

export const StyleAccordion = styled(Accordion)`
  border: 1px solid lightgray;
  border-radius: 8px;
  margin: 10px 0 10px 0;
`;
export const StyleAccordionSummary = styled(AccordionSummary)`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0;
`;

export const IconWrapper = styled('div')`
  padding-right: 10px;
`;

export const FlexLayout = styled('div')`
  display: flex;
  padding-left: 10px;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
  align-items: ${({ align }) => (align ? align : 'flex-start')};
`;

export const Text = styled('div')`
  font-size: ${({ size }) => (size ? size : '20px')};
  font-weight: ${({ weight }) => (weight ? weight : '400')}; ;
`;

export const TextTransformation = styled('div')`
  transform: rotate(180deg);
`;
