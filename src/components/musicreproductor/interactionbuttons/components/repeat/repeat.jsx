import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";

function Repeat () {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.repeat}  </i> </button>      
    </div>
  )
}

export default Repeat
