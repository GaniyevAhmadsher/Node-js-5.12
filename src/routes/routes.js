import postRouter from "./post.route.js";
import authRouter from "./user.auth.route.js";

const ApiRoutes = () => [authRouter, postRouter];
export default ApiRoutes;
