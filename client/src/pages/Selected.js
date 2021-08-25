import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";



const Selected = () => {
    return (
       <main className ="flex-row justify-center  mb-4">
           <div className="col-12 col-lg-10">
               <h1>SELECTED API PAGE</h1>
               <div className="card">
                   <h1 className="card-header bg-dark text-light p-2">yapi api</h1>
                   <div className="card-body">
                       <h2>Team Endgame</h2><p>(average star rating)</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       </p>
                   </div>
               </div>
               {/* review list */}
               <div className="card">
                   <h1 className="card-header bg-dark text-light p-2">Reviews</h1>
                   {/* user 1 review */}
                   <div className="card-body">
                       <h2>My Mom</h2><p>* * * * * * * </p>
                       <p>
                            very nice sweetey
                       </p>
                   </div>
                   {/* user 2 review  */}
                   <div className="card-body">
                       <h2>Jun Park</h2><p>* * * 0 0</p>
                       <p>YO THIS APP IS THE BEEEEZ KNEEEEZZ 
                            
                       </p>
                   </div>
                   {/* user 3 review */}
                   <div className="card-body">
                       <h2>John</h2><p>* * * * *</p>
                       <p>No Help for You!
                            
                       </p>
                   </div>
               </div>
           </div>
       </main>
    )

};

export default Selected;