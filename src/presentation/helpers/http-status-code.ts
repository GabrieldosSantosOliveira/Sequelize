export const enum HttpStatusCode {
  CREATED = 201,
  OK = 200,
  SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  NO_CONTENT = 204,
  NOT_FOUND = 404,
  CONFLICT = 409,
}
export const HttpStatusCodeDescription = {
  [HttpStatusCode.CREATED]: 'Created',
  [HttpStatusCode.OK]: 'OK',
  [HttpStatusCode.SERVER_ERROR]: 'Server Error',
  [HttpStatusCode.BAD_REQUEST]: 'Bad Request',
  [HttpStatusCode.NO_CONTENT]: 'No Content',
  [HttpStatusCode.NOT_FOUND]: 'Not Found',
  [HttpStatusCode.CONFLICT]: 'Conflict',
}
