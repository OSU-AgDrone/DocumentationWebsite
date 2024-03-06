/** @jsxImportSource @emotion/react */
import React from 'react';

import {  containerStyles } from './css/Styles';
import { headingStyles, buttonStyles, imageContainerStyles, subHeadingStyles, droneImageStyles, overlayTextStyles } from './css/HomeStyles';
import droneImage from "./teamPics/droneImage.jpg";


const HomePage = () => {
  return (
    <div css={containerStyles}>
      <div css={imageContainerStyles}>
        <img
          src={droneImage}
          alt="OSU Ag. Drone"
          css={droneImageStyles}
        />
        <div css={overlayTextStyles}>
          <h1 css={headingStyles}>OSU Ag. Drone</h1>
          <p css={subHeadingStyles}>A Student Designed Agricultural Alternative</p>
          <button css={buttonStyles} onClick={() => alert('Video Popup')}>Watch Video</button>
        </div>
      </div>


      {/* <h1 css={headingStyles}>Welcome to OSU Ag. Drone</h1>

      <p css={paragraphStyles}>
        The Agricultural Drone Capstone Team at Oregon State University is working towards making farming more accessible
        (trying to make agricultural drones cheaper and easier to get in different countries), efficient (quick drones
        flying over uneven terrain), and environmentally friendly (the drone uses battery power, and it promotes less
        intrusive farm vehicles).
        The subteams, Electrical, Mechanical, and Computer Science, are working together to produce an affordable product
        that can be replicated in different countries with different levels of accessibility.
        The drone will be quick to set up (after it has been built) and easy to control.
        The 2023-2024 Agricultural Drone Project is a continuation of the work done for sponsor Raitong Organics Farm,
        represented by Bryan Hugill.
        This verification proof will focus on the electrical, mechanical, software, and documentation improvements and the
        respective Engineering Specifications that have been made in order to fulfill the customer requirements provided by
        Bryan Hugill.

        It was determined early in the project that, as part of the efforts to extend the battery life of the drone, the
        electrical systems should be revised and improvements made.
        The core of the electrical system is the battery; as such, it was the most important part of the electrical system
        to be improved.
        It was determined that a change to Lithium Ion batteries from the previous Lithium Polymer in combination with a 12s
        configuration would be better in terms of energy capacity and current output.
        This change led not only to a change in certain electrical subsystems, like the power distribution board, but also
        required the motors and speed controllers to be changed to allow the higher voltages of the 12s configuration.
        This eventually led us to choose a more efficient motor and propeller size in terms of thrust versus current drawn.
        Additionally, the implementation of an ARK sensor is key to improving flight stability and accuracy of travel, while
        the LIDAR sensor will be used for the collision prevention system.

      </p>

      <p css={paragraphStyles}>
        The 2023-2024 Agricultural Drone Project is a continuation of the work done for sponsor Raitong Organics Farm,
        represented by Bryan Hugill.
        This verification proof will focus on the electrical, mechanical, software, and documentation improvements and the
        respective Engineering Specifications that have been made in order to fulfill the customer requirements provided by
        Bryan Hugill.
      </p>

      <p css={paragraphStyles}>
        It was determined early in the project that, as part of the efforts to extend the battery life of the drone, the
        electrical systems should be revised and improvements made.
        The core of the electrical system is the battery; as such, it was the most important part of the electrical system
        to be improved.
        It was determined that a change to Lithium Ion batteries from the previous Lithium Polymer in combination with a 12s
        configuration would be better in terms of energy capacity and current output.
        This change led not only to a change in certain electrical subsystems, like the power distribution board, but also
        required the motors and speed controllers to be changed to allow the higher voltages of the 12s configuration.
        This eventually led us to choose a more efficient motor and propeller size in terms of thrust versus current drawn.
        Additionally, the implementation of an ARK sensor is key to improving flight stability and accuracy of travel, while
        the LIDAR sensor will be used for the collision prevention system.
      </p>

      <p css={paragraphStyles}>
        Explore the creators behind this innovative project, discover the components used in its build, and even learn how
        you can assemble your own agricultural drone for customized applications. Join us in shaping the future of farming
        technology!
      </p> */}



    </div>
  );
}
export default HomePage;