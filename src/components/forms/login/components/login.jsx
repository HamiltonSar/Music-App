import React from 'react';
import stackicons from '../../../../fontawesomeicons/iconsapp';
import { Link } from 'react-router-dom';
import styles from "./../styles/login.module.css";




const NoValidateData = () =>  <h2>Complete all fields</h2>
const NoSignals = () => <h2>Create </h2>

function Login () {
  return (
    <div className= {styles.loginwindow} >

        <div className= {styles.formcontainer} >

            <div className= {styles.titlecontainer} >
              <h2 className= {styles.titlelogin} >Log in</h2>
            </div>

            <div className= {styles.formcontainer}>

              <form className= {styles.formcontent}>

                <div className= {styles.inputscontainer}>
                  <label className= {styles.label}>Email</label>
                  <input className= {styles.inputfield} type="email" />
                </div>

                <div className= {styles.inputscontainer}>
                  <label className= {styles.label}>Password</label>
                  <input className= {styles.inputfield} type="password" />
                </div>

                <div className= {styles.buttoncontainer}>
                  <button className= {styles.buttondatasend}> Log in </button>
                </div>
                
              </form>

            </div>

            <div className= {styles.forgotcontainer}>
              <h2 className= {styles.forgotcontainertext}> <Link className= {styles.forgotcontainerlink} to={"/"}>Forgot Password?</Link></h2>
            </div>

        </div>

    </div>
  )
}

export default Login;
