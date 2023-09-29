import { GenerateUUID } from '@/app/gateways/uuid/generate-uuid'
import { faker } from '@faker-js/faker'
export class GenerateUUIDMock implements GenerateUUID {
  randomUUID(): string {
    return faker.string.uuid()
  }
}
export const makeGenerateUUIDMock = () => {
  const generateUUIDMock = new GenerateUUIDMock()
  return { generateUUIDMock }
}
