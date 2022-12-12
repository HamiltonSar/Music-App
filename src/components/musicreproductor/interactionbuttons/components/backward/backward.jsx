import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";



function Backward ()  {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.backward} </i> </button>
      
    </div>
  )
}

export default Backward
