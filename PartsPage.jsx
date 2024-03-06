// PartsPage.jsx
/** @jsxImportSource @emotion/react */
import React from 'react';
import { containerStyles } from './css/Styles';
import { tableStyles, tableHeaderStyles, thStyles, tdStyles, oddRowStyles, evenRowStyles } from "./css/PartStyles";

const Parts = ({ parts }) => {
  return (
    <div css={containerStyles}>
      <h2 css={{ color: '#333' }}>Parts List</h2>
      <table css={tableStyles}>
        <thead css={tableHeaderStyles}>
          <tr>
            <th css={thStyles}>Name</th>
            <th css={thStyles}>Quantity</th>
            <th css={thStyles}>Sourcing</th>
            <th css={thStyles}>Unit Cost</th>
            <th css={thStyles}>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part, index) => (
            <tr key={index} css={index % 2 === 0 ? evenRowStyles : oddRowStyles}>
              <td css={tdStyles}>{part.name}</td>
              <td css={tdStyles}>{part.quantity}</td>
              <td css={tdStyles}>{part.sourcing}</td>
              <td css={tdStyles}>{part.unitCost}</td>
              <td css={tdStyles}>${parseFloat(part.subTotal).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parts;
