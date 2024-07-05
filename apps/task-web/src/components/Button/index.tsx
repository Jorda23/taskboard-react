import React from 'react';
import styled, { css } from 'styled-components';
import Button from '@mui/material/Button';

type ButtonType = 'success' | 'danger' | 'default' | 'newType';

const getButtonStyles = (type: ButtonType) => {
  switch (type) {
    case 'success':
      return css`
        color: white;

        background-color: green;
        &:hover {
          background-color: darkGreen;
        }
      `;
    case 'danger':
      return css`
        color: white;
        background-color: #941a10;
        &:hover {
          background-color: darkRed;
        }
      `;
    case 'newType':
      return css`
           color: white;

        background-color:  #005dab;
        padding: 10px 30px;
        border-radius: 30px;
        &:hover {
          background-color: darkGrey;
        }
        `;
    default:
      return css`
        color: white;

        background-color:  #002683;
        padding: 10px 30px;
        border-radius: 30px;
        &:hover {
          background-color: darkGrey;
        }
      `;
  }
};

const StyledButton = styled(Button) <{ type: ButtonType }>`
  && {
    ${({ type }) => getButtonStyles(type)}
  }

  /* Common styles for all button types */
  &:hover {
    color: white;
    cursor: pointer;
  }

  /* Disabled styles */
  &&[disabled] {
    color: grey;
    background-color: lightGrey;
    cursor: not-allowed;
    pointer-events: auto;
  }
`;

interface Props {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  label: string;
  dataTestid?: string;
}

export const CustomButton: React.FC<Props> = ({
  type = 'default',
  disabled = false,
  onClick,
  label,
  dataTestid,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      data-testid={dataTestid}
      onClick={onClick}
      type={type}
    >
      {label}
    </StyledButton>
  );
};
