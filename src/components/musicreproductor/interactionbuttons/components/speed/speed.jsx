import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";

function Speed  ()  {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.speed}  </i> </button>
      
    </div>
  )
}

export default Speed
