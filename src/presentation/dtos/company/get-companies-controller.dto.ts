import { z } from 'zod'

export const GetCompaniesControllerDto = z.object({
  page: z.coerce.number().optional(),
  sizePerPage: z.coerce.number().optional(),
})
