import React from 'react';
import { Button } from '@mui/material';
import styled, { css } from 'styled-components';
import { styled as MUIStyled } from '@mui/material/styles';
import { HamburgerButtonProps } from '../../models';

const HamburgerButtonWrapper = MUIStyled(Button)<HamburgerButtonProps>(() => ({
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'right'
}));

const Line = styled.span<HamburgerButtonProps>`
  height: 4px;
  border-radius: 5px;
  background: ${({ open }) => open ? 'white' : 'black' };
  margin-top: 8px;
  transition: all 0.5s ease;
  

  ${({ lineSize }) => {
    switch(lineSize) {
      case 's':
        return css`
          width: 20px;
        `;
      case 'm':
        return css`
          width: 25px;
        `;
      case 'l':
        return css`
          width: 30px;
        `;
      default:
    }
  }}
`;

export const HamburgerButton = (props: HamburgerButtonProps) => {
  return (
    <HamburgerButtonWrapper {...props}>
      <Line lineSize='s' open={props.open} />
      <Line lineSize='m' open={props.open} />
      <Line lineSize='l' open={props.open} />
    </HamburgerButtonWrapper>
  )
}

export default HamburgerButton;