import React from "react";
import "./MyAccount.css";


function MyAccount(){
    return(

        <div className="myAccountContainer" >
                <div className="title">My Account</div>

                <div className="myAccountPhoto">
                    <div className="myAccountPhotoDisplay">
                        <div className="myAccountPhotoAdd">
                            <p className="myAccountPh">Photo  </p>
                    <input  className="myAccountImage" type="file" accept="image/png, image/jpg"></input>
                        </div>
                    </div>  
                </div>

                <form className="myAccountForm">
                    <div className="myAccountInfo">
                        <div className="myAccountInfoGroup">                       
                        <label className="myAccountLabel">First Name</label>
                        <input type="text" className="myAcountFistname mt-3"  placeholder="First Name"></input>
                        <br></br>

                        <label className="myAccountLabel">Last Name</label>
                        <input type="text"  className="myAcountLastname  mt-3"  placeholder="Last Name"></input>
                        <br></br>

                        <label className="myAccountLabel">Password</label>
                        <input type="password" className="myAcountPassword  mt-3"  placeholder="Password"></input>
                        <br></br>

                        <label className="myAccountLabel">Email</label>
                        <input type="email" className="myAcountEmail  mt-3"  placeholder="Email"></input>
                        <br></br>

                        <button className="button mt-5">SAVE</button>
                  
                    </div>
                  </div>
                <div className="clear"></div>
                </form>

        </div>
    
    )

}

export default MyAccount;