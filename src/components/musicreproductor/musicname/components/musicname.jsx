import React from 'react';
import styles from "./../styles/musicname.module.css";



function MusicName ()  {

  return (
    <div className= {styles.musicdatacontainer} >
        <div className= {styles.titleartistcontainer} >
            <h2 className= {styles.titleartist} > Alan Walker </h2>
        </div>
        <div className= {styles.titlemusiccontainer} >
            <h2 className= {styles.titlemusic} > Faded </h2>
        </div>
      
    </div>
  )
}

export default MusicName;


