import {port} from "../config";
import {PostsClient} from "../../generated/message_grpc_pb";
import {credentials} from "@grpc/grpc-js";

const google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb');

const sererURL = `localhost:${port}`;

export function getPosts() {
    const Client = new PostsClient(
        sererURL,
        credentials.createInsecure(),
        {}
    )

    return new Promise((resolve, reject) => {
        Client.getPosts(new google_protobuf_empty_pb.Empty(), (error, response) => {
            if (error) {
                console.error(error);
                reject({
                    code: error?.code || 500,
                    message: error?.message || "something went wrong",
                });
            }

            return resolve(response?.toObject());
        })
    });
}
