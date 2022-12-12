import React from 'react';
import iconsreproductor from '../../props/reproductor__icons';
import styles from "./../../styles/interactionbuttons.module.css";



function AddFavoriteSong () {
  return (
    <div>
        <button className= {styles.buttonicons} > <i> {iconsreproductor.plus}  </i> </button>
    </div>
  )
}

export default AddFavoriteSong
