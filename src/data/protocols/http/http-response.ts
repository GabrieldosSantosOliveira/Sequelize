/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse<T = any> {
  body: T
  statusCode: number
}
