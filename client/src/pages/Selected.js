import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm/index"
import ReviewList from "../components/ReviewList/index";


const Selected = () => {

    return (
        <main className="flex-row justify-center  mb-4">
            <div className="col-12 col-lg-10">
                <h1>SELECTED API PAGE</h1>
                {/* 1 API INFO */}
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


                {/* Review box */}
                <ReviewForm />




                {/* Reviews list */}
                <div className="card">
                    <h1 className="card-header bg-dark text-light p-2">Reviews</h1>
                    {[{
                        username: "user A", rating: 3, comment: "It worked great for my team."
                    }]}
                    {/* User 1 review */}
                    <div className="card-body">
                        <h2>User A</h2><p>* * *  </p>
                        <p>
                            It worked great for my team.
                        </p>
                    </div>
                    {/* user 2 review  */}
                    <div className="card-body">
                        <h2>User B</h2><p>* * * * *</p>
                        <p>Very easy to use, check out my project at github!
                        </p>
                    </div>
                    {/* user 3 review */}
                    <div className="card-body">
                        <h2>User C</h2><p>* * * * *</p>
                        <p>Will this have long term support?
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )


}

export default Selected;