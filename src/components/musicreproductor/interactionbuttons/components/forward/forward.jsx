import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";


function Forward ()  {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.forward} </i> </button>
    </div>
  )
}

export default Forward;

