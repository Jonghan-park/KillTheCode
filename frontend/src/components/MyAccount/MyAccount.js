import React from "react";
import "./MyAccount.css";


function MyAccount(){
    return(

        <div className="myAccountContainer" >
                <div className="title">My Account</div>

                <div className="myAccountPhoto">
                    <div className="myAccountPhotoDisplay">
                    <input className="myAccountPhotoAdd" type="file" accept="image/png, image/jpg"></input>
                    </div>  
                </div>

                <form className="myAccountForm">
                    <div className="myAccountInfo">
                        <div className="myAccountInfoGroup">                       
                        <label>First Name</label>
                        <input type="text" className="myAcountFistname"  placeholder="First Name"></input>
                        <br></br>

                        <label>Last Name</label>
                        <input type="text"  className="myAcountLastname"  placeholder="Last Name"></input>
                        <br></br>

                        <label>Password</label>
                        <input type="password" className="myAcountPassword"  placeholder="Password"></input>
                        <br></br>

                        <label>Email</label>
                        <input type="email" className="myAcountEmail"  placeholder="Email"></input>
                        <br></br>

                        <button>SAVE</button>
                  
                    </div>
                  </div>
                <div className="clear"></div>
                </form>

        </div>
    
    )

}

export default MyAccount;