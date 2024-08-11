import BaseError from "./BaseError.js";

class NotFound extends BaseError {
  constructor(mesagge) {
    super(mesagge, 404);
  }
}

export default NotFound;
