import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const query = await zh.useSafeValidatedQuery(event, z.object({
    required: z.string()
  }))

  const body = await zh.useSafeValidatedBody(event, z.object({
    optional: z.string().optional(),
    required: z.boolean()
  }))

  const params = await zh.useSafeValidatedParams(event, {
    id: z.number()
  })

  if (!params.success) {
    // params.error
  }
})
