import React ,{ useState }from "react";

import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";



const Selected = () => {
    const [formState, setFormState] = useState({
        username: "",
        comment: "",
      
      });
      const [addComment, { error, data }] = useMutation(ADD_COMMENT);
      
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);
        
            try {
            
            } catch (e) {
              console.error(e);
            }
          };

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
                {/* =================================================================================== */}
               {/* Review box */}
               <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Enter a Review</h4>
          <div className="card-body">
           
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <h4>(add stars widget here)</h4>
                <input
                  className="form-input"
                  placeholder="Your Comment"
                  name="Comment"
                  type="text"
                  value={formState.comment}
                  onChange={handleChange}
                />
              
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
                
                {/* ============================================================================= */}
               {/* Reviews list */}
               <div className="card">
                   <h1 className="card-header bg-dark text-light p-2">Reviews</h1>
                   {/* User 1 review */}
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


}

export default Selected;