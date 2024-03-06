import { css } from '@emotion/react';

export const navStyles = css`
  background-color: #FFA500; /* Orange */
  padding: 20px 0;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
  li {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #000; /* Black */
    }
  }
`;

export const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const headingStyles = css`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
`;

export const paragraphStyles = css`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 20px;
`;
