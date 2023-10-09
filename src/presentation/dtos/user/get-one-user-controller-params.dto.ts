import { z } from 'zod'

export const GetOneUserControllerParamsDto = z.object({
  id: z.string().uuid(),
})
