export interface RemoveCompanyRepository {
  remove(id: string): Promise<void>
}
