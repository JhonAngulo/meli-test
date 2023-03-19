'use strict'

exports.success = ({ req, res, statusCode = 200, message = '', data = [] }) => {
  res.status(statusCode).json({
    statusCode,
    data: {
      author: {
        name: 'Jhon',
        lastname: 'Angulo'
      },
      ...data
    },
    message
  })
}
