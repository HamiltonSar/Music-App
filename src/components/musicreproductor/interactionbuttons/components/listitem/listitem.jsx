import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";



function Lisitem ()  {
  return (
    <div>
        <button className= {styles.buttonicons}> <i> {iconsreproductor.list} </i> </button>
    </div>
  )
}

export default Lisitem;

