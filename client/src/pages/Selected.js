import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm/index"
import { useParams } from "react-router-dom";
import { QUERY_API } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Selected = () => {
    const { apiId } = useParams();
    console.log(apiId)
    const { data } = useQuery(QUERY_API, {
        variables: {
            id: apiId
        }
    });
    console.log(data?.getApi.reviews)
    const reviews = data?.getApi.reviews

    const selectedAPI = [

        {
            title: data?.getApi.title,
            category: data?.getApi.category,
            description: data?.getApi.description,
            url: data?.getApi.url,
            auth: data?.getApi.auth,
            https: data?.getApi.https,
            cors: data?.getApi.cors,
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

                {/* 1 API INFO */}

                {selectedAPI.map((api) => (
                    <div key={api.url} className="card" >
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

                    {reviews?.map((comment) => (
                        <div key={comment.username} className="card-body">
                            <h2>{comment.username}</h2>
                            <p>{comment.rating}</p>
                            <p>{comment.comment}</p>
                        </div>
                    ))}

                </div>
            </div>
        </main >
    )


}

export default Selected;