import type { Organization } from '~~/types/organization'

export interface IOrganizationsRepository {
  getOrganizations(): Promise<Organization[]>
  getOrganization(id: number): Promise<Organization>
  createOrganization(organization: Organization): Promise<Organization>
  updateOrganization(organization: Organization): Promise<Organization>
  deleteOrganization(id: number): Promise<void>
}
