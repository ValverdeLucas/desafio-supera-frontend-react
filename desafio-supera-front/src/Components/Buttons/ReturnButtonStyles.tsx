import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';

interface AdvanceButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export const StyledReturnButton = styled(FaAngleLeft) <AdvanceButtonProps>`
  width: 5rem;
  height: 5rem;
  left: 5px;
  position: absolute;
  color: #EDE7E3;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover {
    transition: .5s;
    color: #16697A; 
}
`;