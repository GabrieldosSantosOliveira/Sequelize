import { z } from 'zod'

export const RemoveCompanyParamDto = z.object({
  id: z.string().uuid(),
})
