import { GenerateUUID } from '@/app/gateways/uuid/generate-uuid'
import { randomUUID } from 'node:crypto'
export class GenerateUUIDImpl implements GenerateUUID {
  randomUUID(): string {
    return randomUUID()
  }
}
