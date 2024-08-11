class BaseError extends Error {
  constructor(mesagge = "Internal Server Error", status = 500) {
    super();
    this.message = mesagge;
    this.status = status;
  }

  sendResponse(res) {
    res.status(this.status).send({ message: this.message, status: this.status });
  }
}

export default BaseError;
