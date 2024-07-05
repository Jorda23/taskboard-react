import React from 'react';
import styled, { css } from 'styled-components';
import { IconButton, SvgIcon } from '@mui/material';
import { IconsTypes, types } from '../../shared/iconsTypes/icons';

export type IconButtonType = 'success' | 'danger' | 'default'; 

const getIconButtonStyles = (type: IconButtonType) => {
  switch (type) {
    case 'success':
      return css`
        color: white;
        background-color: blue;
        &:hover {
          background-color: darkBlue;
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
    default:
      return css`
        color: white;

        background-color: grey;
        &:hover {
          background-color: darkGrey;
        }
      `;
  }
};

const StyledButton = styled(IconButton)<{ type: IconButtonType }>`
  /* Base styles */
  && {
    ${({ type }) => getIconButtonStyles(type)}
  }


  /* Disabled styles */
  &.css-78trlr-MuiButtonBase-root-MuiIconButton-root.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background-color: lightGrey;
    cursor: not-allowed;
    pointer-events: auto;
  }
`;

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  icon: types;
  type: IconButtonType;
  ariaLabel: string;
}

export const CustomIcoButton: React.FC<Props> = ({
  disabled,
  onClick,
  icon,
  type,
  ariaLabel
}) => {
  const iconSelected = IconsTypes.find((x) => x.type === icon);

  return (
    <StyledButton aria-label={ariaLabel} type={type} disabled={disabled} onClick={onClick}>
      {iconSelected && iconSelected.icon && (
        <SvgIcon component={iconSelected.icon} />
      )}
    </StyledButton>
  );
};
