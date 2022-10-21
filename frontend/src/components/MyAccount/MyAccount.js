import React, { useState } from "react";
import "./MyAccount.css";

const usersInfo=[
    {
        firstName: "S",
        lastName: "Lauren",
        password: "********",
        email:"test@test.com",
    },
];


const MyAccount=() => {
    const [userInfo, setUserInfo] = useState(usersInfo);

    const handleChange = event => {
        setUserInfo(event.target.value);
    
        console.log('value is:', event.target.value);
      };


    return(
<>
        <div className="title">My Account</div>

        <div className="myAccountContainer" >
                <div className="myAccountPhoto">
                    
                        <div className="myAccountPhotoAdd">
                            
                        </div>
                    <input  className="myAccountImage" type="file" accept="image/png, image/jpg"/>
                      
                </div>

                <form className="myAccountForm">
                    <div className="myAccountInfo">
                        <div className="myAccountInfoGroup">                       
                        <label className="myAccountLabel">First Name</label>
                        <input type="text" className="myAcountFistname"  onChange={handleChange}  placeholder={userInfo[0].firstName}></input>
                        <br></br>


                        <label className="myAccountLabel mt-3">Last Name</label>
                        <input type="text"  className="myAcountLastname"  placeholder={userInfo[0].lastName}></input>
                        <br></br>

                        <label className="myAccountLabel  mt-3">Password</label>
                        <input type="password" className="myAcountPassword"  placeholder={userInfo[0].password}></input>
                        <br></br>

                        <label className="myAccountLabel  mt-3">Email</label>
                        <input type="email" className="myAcountEmail" placeholder={userInfo[0].email}></input>
                        <br></br>

                  
                    </div>
                        <button className="myAccountbutton">SAVE</button>
                  </div>
                <div className="clear"></div>
                </form>

        </div>
        </>
    
    )

}

export default MyAccount;