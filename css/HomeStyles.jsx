import { css } from '@emotion/react';

export const imageContainerStyles = css`
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const droneImageStyles = css`
  width: 100%; // Adjust the width based on your layout
`;

export const overlayTextStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff; // White text color
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black background
  padding: 20px; // Adjust padding as needed
`;

export const subHeadingStyles = css`
  font-size: 1.5em;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const buttonStyles = css`
  background-color: #3498db; // Adjust the button color
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9; // Adjust the hover color
  }
`;

export const headingStyles = css`
  color: #fff;
  font-size: 2em;
  margin-bottom: 20px;
`;