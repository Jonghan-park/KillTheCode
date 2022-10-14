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
                        <input type="text" className="myAcountFistname mt-3"  onChange={handleChange}  placeholder={userInfo[0].firstName}></input>
                        <br></br>


                        <label className="myAccountLabel">Last Name</label>
                        <input type="text"  className="myAcountLastname  mt-3"  placeholder={userInfo[0].lastName}></input>
                        <br></br>

                        <label className="myAccountLabel">Password</label>
                        <input type="password" className="myAcountPassword  mt-3"  placeholder={userInfo[0].password}></input>
                        <br></br>

                        <label className="myAccountLabel">Email</label>
                        <input type="email" className="myAcountEmail  mt-3" placeholder={userInfo[0].email}></input>
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