
// src/server/index.ts
import {
    sendUnaryData,
    Server,
    ServerCredentials,
    ServerUnaryCall,
} from "@grpc/grpc-js";
import { PostsService } from "../../generated/message_grpc_pb";
import { AddPostResponse, AddPostRequest, Post, GetPostsResponse } from "../../generated/message_pb";
import { port } from "../config";
// import google from 'google-protobuf/google/protobuf/empty_pb';


// function addPost(
//     call: ServerUnaryCall<AddPostRequest, AddPostResponse>,
//     callback: sendUnaryData<AddPostResponse>
// ) {
//     const addPostResponse = new AddPostResponse();
//     const post = call.request.getPost()
//
//     post.setId(1);
//     post.setTitle('にたわき');
//     post.setContent('よろしくおねがいします');
//
//     addPostResponse.setPost(post);
//
//     callback(null, addPostResponse);
// }
function getPosts(
    call: ServerUnaryCall<null, GetPostsResponse>,
    callback: sendUnaryData<GetPostsResponse>
) {
    const post = new Post();
    post.setId(1);
    post.setTitle('にたわき');
    post.setContent('よろしくおねがいします');

    const post2 = new Post();
    post2.setId(2);
    post2.setTitle('犬');
    post2.setContent('犬をよろしくおねがいします');

    const response = new GetPostsResponse()
    response.addPosts(post)
    response.addPosts(post2)

    callback(null, response);
}


function startServer() {
    const server = new Server();
    server.addService(PostsService, { getPosts });
    server.bindAsync(
        `0.0.0.0:${port}`,
        ServerCredentials.createInsecure(),
        (error, port) => {
            if (error) {
                console.error(error);
            }

            server.start();
            console.log(`server start listing on port ${port}`);
        }
    );
}

startServer();
