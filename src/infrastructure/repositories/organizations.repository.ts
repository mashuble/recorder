import type { IOrganizationsRepository } from '~~/src/application/repositories/organizations.repository.interface'
import type { Organization } from '~~/types/organization'

export class OrganizationsRepository implements IOrganizationsRepository {
  constructor(private readonly prisma: unknwon) {}

  async getOrganizations(): Promise<Organization[]> {
    return this.prisma.organization.findMany()
  }

  async getOrganization(id: number): Promise<Organization> {
    return this.prisma.organization.findUnique({ where: { id } })
  }

  async createOrganization(organization: Organization): Promise<Organization> {
    return this.prisma.organization.create({ data: organization })
  }

  async updateOrganization(organization: Organization): Promise<Organization> {
    return this.prisma.organization.update({ where: { id: organization.id }, data: organization })
  }

  async deleteOrganization(id: number): Promise<void> {
    await this.prisma.organization.delete({ where: { id } })
  }
}
