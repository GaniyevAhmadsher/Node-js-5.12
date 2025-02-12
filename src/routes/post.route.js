import { Router } from "express";
import PostController from "../controller/post.controller.js";

const postRouter = Router();
const controller = new PostController();

postRouter.post("/posts/create", (req, res, next) =>
  controller.addPostController(req, res, next)
);

postRouter.get("/posts/category/:category", (req, res, next) =>
  controller.getPostByCategoryController(req, res, next)
);

postRouter.get("/posts/top", (req, res, next) =>
  controller.getTopPostController(req, res, next)
);

postRouter.put("/posts/:id", (req, res, next) =>
  controller.putPostByIdController(req, res, next)
);

postRouter.get("/user/posts", (req, res, next) =>
  controller.getUserPostsController(req, res, next)
);

postRouter.delete("/posts/:id", (req, res, next) =>
  controller.deletePostByIdController(req, res, next)
);

postRouter.get("/posts/search", (req, res, next) =>
  controller.searchPostController(req, res, next)
);

export default postRouter;
