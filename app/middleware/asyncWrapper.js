const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper

// asyncWrapper is used to avoid try catch block in all the req in controller once we create the wrapper we can use it as middleware 