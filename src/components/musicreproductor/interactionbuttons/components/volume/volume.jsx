import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";


function Volume  ()  {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.volumeHight}  </i> </button>
      
    </div>
  )
}

export default Volume
