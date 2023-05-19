export interface HttpResponse<T = any> {
  body: T
  statusCode: number
}
