import { z } from 'zod'

export const RemoveUserParamsDto = z.object({
  id: z.string().uuid(),
})
