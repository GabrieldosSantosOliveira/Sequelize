import { z } from 'zod'

export const GetAllUsersOfCompanyParamsDto = z.object({
  id: z.string().uuid(),
})
