// creating own Custom Error class

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

// creating a customerror function which can be use the CustomAPIError class

const createCustomeError = (msg, statuscode) => {
  return new CustomAPIError(msg, statuscode)
}

module.exports = { CustomAPIError, createCustomeError }


/* 
const error = new Error("Task id not found")
error.statusCode = 404
return next(error)
return res.status(error.statusCode).json({ msg: error.message })

*/