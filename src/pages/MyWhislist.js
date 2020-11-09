import React from 'react';

import '../assets/styles/profile.scss'
import Love from '../assets/icons/LOVE.svg';

const MyWhislist = (props) => {
     return (
         <>
             <div className="box">
                  <h1> MY WHISLIST</h1>
                  
                  
            </div>
            <form>
  <div className="text-center">
  <img src={Love} alt="LOVE" />
  <h4>YOUR WHISLIST IS STILL EMPTY</h4>
  <p>Let's change that right away by clicking on the heart icon to save your favorite</p>
  <p>items! This way you can always be up to date on their availability, be notified</p>
  <p>when they are about to sell out and add them directly to your Shopping Bag.</p>
<br></br>
  <button type="button" className="btn btn-dark">BACK TO SHOPPING</button>
  </div>
    


</form>
         </>
    
         )
}  
 export default MyWhislist;