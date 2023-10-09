import { z } from 'zod'

export const CreateUserBodyDto = z.object({
  companyId: z.string().uuid(),
  name: z.string(),
})
