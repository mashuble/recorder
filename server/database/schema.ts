import { pgTable, varchar, text, integer, timestamp } from 'drizzle-orm/pg-core'

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
}

const advanvcedTimestamps = {
  createdAt: timestamp('created_at').defaultNow().notNull(),
  createdBy: integer('created_by').references(() => users.id).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  updatedBy: integer('updated_by').references(() => users.id).notNull()
}

export const users = pgTable('users', {
  id: integer('id').primaryKey(),
  email: varchar('email').notNull(),
  password: varchar('password').notNull(),
  verifiedAt: timestamp('verified_at'),
  firstName: varchar('first_name').notNull(),
  lastName: varchar('last_name').notNull(),
  avatar: varchar('avatar').notNull(),
  ...timestamps
})

export const oauthProviders = pgTable('oauth_providers', {
  id: integer('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  provider: text('provider').notNull(),
  token: text('token').notNull(),
  ...advanvcedTimestamps
})

export const organizations = pgTable('organizations', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  ...advanvcedTimestamps
})

export const roles = pgTable('roles', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  ...timestamps
})

export const permissions = pgTable('permissions', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  ...timestamps
})

export const permissionRole = pgTable('permission_role', {
  permissionId: integer('permission_id').notNull(),
  roleId: integer('role_id').notNull()
})

export const organizationUser = pgTable('organization_user', {
  organizationId: integer('organization_id').notNull().references(() => organizations.id),
  userId: integer('user_id').notNull().references(() => users.id),
  roleId: integer('role_id').notNull().references(() => roles.id),
  ...advanvcedTimestamps
})

export const projects = pgTable('projects', {
  id: integer('id').primaryKey(),
  organizationId: integer('organization_id').notNull().references(() => organizations.id),
  title: text('title').notNull(),
  ...advanvcedTimestamps
})

export const sessions = pgTable('sessions', {
  id: integer('id').primaryKey(),
  projectId: integer('project_id').notNull(),
  title: text('title').notNull(),
  ...advanvcedTimestamps
})

export const testRuns = pgTable('test_runs', {
  id: integer('id').primaryKey(),
  sessionId: integer('session_id').notNull(),
  status: text('status').notNull(),
  ...advanvcedTimestamps
})

export const projectSettings = pgTable('project_settings', {
  id: integer('id').primaryKey(),
  projectId: integer('project_id').notNull(),
  name: text('name').notNull(),
  value: text('value').notNull(),
  ...timestamps
})
