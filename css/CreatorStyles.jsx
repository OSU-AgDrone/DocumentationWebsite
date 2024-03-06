import { css } from '@emotion/react';

export const cardStyles = css`
  width: 150px;
  height: 150px;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const cardContainerStyles = css`
display: flex;
flex-wrap: wrap;
gap: 5px; 
justify-content: space-between;
`;

export const messageStyles = css`
  color: #666;
  font-size: 1.2em;
  margin-bottom: 20px;
`;