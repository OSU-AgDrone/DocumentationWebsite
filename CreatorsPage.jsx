/** @jsxImportSource @emotion/react */
import React from 'react';

import {  headingStyles } from './css/Styles';
import { cardStyles, cardContainerStyles, messageStyles } from "./css/CreatorStyles";

const CreatorsPage = ({ creators }) => {
  return (
    <div>
      <h2 css={headingStyles}>Creators</h2>
      <p css={messageStyles}>
        Over the years, our creative team has evolved and flourished, bringing together individuals from various academic backgrounds and majors. 
        This collaborative effort has not only resulted in a diverse range of backgrounds but also showcased the unique talents and perspectives that each team member contributes. 
      </p>
      <div css={cardContainerStyles}>
        {creators.map((creator, index) => (
          <div key={index} css={cardStyles}>
            {/* <img
              src={creator.image}
              alt={creator.name}
              css={creatorImageStyles}
            /> */}
            <div>
              <h3>{creator.name}</h3>
              <p>Year: {creator.year}</p>
              <p>Major: {creator.major}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorsPage;
