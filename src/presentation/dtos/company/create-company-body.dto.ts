import { z } from 'zod'

export const CreateCompanyBodyDto = z.object({
  name: z.string().min(3).max(255),
})
