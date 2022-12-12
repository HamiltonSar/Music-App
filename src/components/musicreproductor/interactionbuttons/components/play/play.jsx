import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";

function Play () {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.play}  </i> </button>
    </div>
  )
}

export default Play;
