import { GenerateUUIDImpl } from '@/infra/gateways/uuid/generate-uuid'

export const makeGenerateUUID = () => new GenerateUUIDImpl()
