import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm/index"



const Selected = () => {
    const fakeAPI = [

        {
            title: "Dog API",
            category: "Animals",
            description: "An API about dogs and what not.",
            url: "https://dogsapi.com",
            auth: "apiKey",
            https: "Yes",
            cors: "No",
        },
    ]

    const fakeComments = [
        {
            username: "user A", rating: 4, comment: "It worked great for my team."
        },
        {
            username: "user B", rating: 1, comment: "where are the docs."
        },
        {
            username: "user C", rating: 3, comment: "i loved it ."
        },
    ]
    return (
        <main className="flex-row justify-center  mb-4">
            <div className="col-12 col-lg-10">
                <h1>SELECTED API PAGE</h1>
                {/* 1 API INFO */}
                {fakeAPI.map((api) => (
                    <div className="card">
                        <h1 className="card-header bg-dark text-light p-2">{api.title}</h1>
                        <div className="card-body">
                            <h2>Team Endgame</h2><p>Rating : 5 </p>
                            <p>{api.description}
                            </p>
                        </div>
                    </div>
                ))}




                {/* Review box */}
                <ReviewForm />




                {/* Reviews list */}
                <div className="card">
                    <h1 className="card-header bg-dark text-light p-2">Reviews</h1>

                    {fakeComments.map((comment) => (
                        <div className="card-body">

                            <h2>{comment.username}</h2><p>{comment.rating}</p>
                            <p>
                                {comment.comment}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )


}

export default Selected;