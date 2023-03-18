'use strict'

exports.success = ({
  req,
  res,
  statusCode = 200,
  message = '',
  results = []
}) => {
  res.status(statusCode).json({
    statusCode,
    results,
    message
  })
}
