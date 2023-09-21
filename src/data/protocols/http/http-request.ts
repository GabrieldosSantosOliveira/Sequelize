export interface HttpRequest<B = unknown, Q = unknown, P = unknown> {
  body: B
  query: Q
  params: P
}
