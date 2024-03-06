/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { headingStyles,  } from "./css/Styles";
import { buildItemStyles, collapsibleStyles } from "./css/BuildStyles";
import ownersmanual from "./buildInfo/ownersmanual";
import genwarnings from "./buildInfo/genwarnings";
import batteryImage from "./teamPics/batteryimage.png";

const BuildPage = () => {


const [isOpen, setIsOpen] = useState(Array(5).fill(false)); //array length based on the number of items

const toggleItem = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
};

return (
    <div>
        <h2 css={headingStyles}>Build Information</h2>
        <ul>
            <li css={buildItemStyles}>
                <div css={collapsibleStyles} onClick={() => toggleItem(0)}>
                    <h3>Owners Manual</h3>
                </div>
                {isOpen[0] && (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: ownersmanual }} />
                </div>
            )}
            </li>
            <li css={buildItemStyles}>
                <div css={collapsibleStyles} onClick={() => toggleItem(1)}>
                    <h3>General Warnings</h3>
                </div>
                {isOpen[1] && (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: genwarnings }} />
                </div>
            )}
            </li>
            <li css={buildItemStyles}>
                <div css={collapsibleStyles} onClick={()=> toggleItem(2)}>
                    <h3>Battery Setup</h3>
                </div>
                {isOpen[2] && (
                <div>
                    <p>
                        The current battery set up that the ECE team has devised. 
                        This battery gives an increase in capacity compared to store bought at the same price.
                    </p>
                    <img src={batteryImage} alt="Battery Setup" />
                </div>
                )}
            </li>
        </ul>
    </div>
);
};

export default BuildPage;