import NotFound from "../erros/NotFound.js";

 
function notFoundHandler(req,res,next)
{
    const error404 = new NotFound("Not Found");
    next(error404);
}

export default notFoundHandler;