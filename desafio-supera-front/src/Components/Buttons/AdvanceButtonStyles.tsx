import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';

interface AdvanceButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export const StyledAdvanceButton = styled(FaAngleRight) <AdvanceButtonProps>`
  width: 5rem;
  height: 5rem;
  right: 5px;
  position: absolute;
  color: #fff;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover {
    transition: .5s;
    color: red;
}
`;