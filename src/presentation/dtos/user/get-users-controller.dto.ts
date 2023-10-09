import { z } from 'zod'

export const GetUsersControllerDto = z.object({
  page: z.coerce.number().optional(),
  sizePerPage: z.coerce.number().optional(),
})
