import { Request, Response } from "express";
import { createPost, retrievePosts } from "../services/post.services";

export const createPostController = async (req:Request, res:Response) => {

    const creation = await createPost(req.params.username, req.body);

    res.status(201).json(creation);
}

export const getPostsController = async (req:Request, res:Response) => {

    const query = await retrievePosts();

    res.status(200).json(query);
}