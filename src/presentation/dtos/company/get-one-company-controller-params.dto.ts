import { z } from 'zod'

export const GetOneCompanyControllerParamsDto = z.object({
  id: z.string().uuid(),
})
