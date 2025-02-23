import { z } from 'zod'

export const selectOrganizationSchema = z.object({
  id: z.number(),
  name: z.string()
})

export type Organization = z.infer<typeof selectOrganizationSchema>

export const insertOrganizationSchema = selectOrganizationSchema.pick({
  name: true
})
export type InsertOrganization = z.infer<typeof insertOrganizationSchema>

export const updateOrganizationSchema = selectOrganizationSchema.pick({ name: true }).partial()
export type UpdateOrganization = z.infer<typeof updateOrganizationSchema>
