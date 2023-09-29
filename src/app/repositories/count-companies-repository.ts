export interface CountCompaniesRepository {
  count(): Promise<number>
}
