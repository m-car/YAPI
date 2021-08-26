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
    if (!fakeComments.length) {
        return <h3>No Reviews Yet</h3>;
    }

    return (
        <main className="flex-row justify-center  mb-4">
            <div className="col-12 col-lg-10">
                <h1>SELECTED API PAGE</h1>
                {/* 1 API INFO */}

                {fakeAPI.map((api) => (
                    <div className="card">
                        <h1 className="card-header bg-dark text-light p-2">{api.title}</h1>
                        <div className="card-body">
                            <h2>Category: {api.category}</h2><p>Rating : 5 </p>
                            <a href={api.url}>Link to Site</a>
                            <p>Https: {api.https}</p>
                            <p>Auth Type: {api.auth}</p>
                            <p>Cors: {api.cors}</p>
                            <p>{api.description}
                            </p>
                        </div>
                    </div>
                ))}




                {/* Review box add context if user is not logged in cant leave review*/}
                <ReviewForm />




                {/* Reviews list */}
                <br></br>
                <div className="card">
                    <h1 className="card-header bg-dark text-light p-2">Reviews</h1>

                    {fakeComments.map((comment) => (
                        <div className="card-body">
                            <h2>{comment.username}</h2>
                            <p>{comment.rating}</p>
                            <p>{comment.comment}</p>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )


}

export default Selected;