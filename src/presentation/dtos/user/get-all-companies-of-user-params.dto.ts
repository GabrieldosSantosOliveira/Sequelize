import { z } from 'zod'

export const GetAllCompaniesOfUserParamsDto = z.object({
  id: z.string().uuid(),
})
