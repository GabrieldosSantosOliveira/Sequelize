import { HttpRequest } from '@/data/protocols/http/http-request'
import {
  CreateCompanyController,
  CreateCompanyControllerRequestBody,
} from '@/presentation/controller/company/create-company-controller'
import { HttpStatusCode } from '@/presentation/helpers'
import {
  makeCreateCompanyUseCaseMock,
  makeCreateCompanyUseCaseMockWithError,
  makeCreateCompanyUseCaseMockWithException,
} from '@/test/data/mocks/use-cases/create-company-use-case-mock'
import { faker } from '@faker-js/faker'

const makeSut = () => {
  const { createCompanyUseCaseMock } = makeCreateCompanyUseCaseMock()
  const sut = new CreateCompanyController(createCompanyUseCaseMock)
  return { sut, createCompanyUseCaseMock }
}
const makeSutWithError = () => {
  const { createCompanyUseCaseMockWithError } =
    makeCreateCompanyUseCaseMockWithError()
  const sut = new CreateCompanyController(createCompanyUseCaseMockWithError)
  return { sut, createCompanyUseCaseMockWithError }
}
const makeSutWithException = () => {
  const { createCompanyUseCaseMockWithException } =
    makeCreateCompanyUseCaseMockWithException()
  const sut = new CreateCompanyController(createCompanyUseCaseMockWithException)
  return { sut, createCompanyUseCaseMockWithException }
}
const makeRequest = (
  body: Partial<CreateCompanyControllerRequestBody> = {},
): HttpRequest<CreateCompanyControllerRequestBody, unknown, unknown> => {
  return {
    body: {
      name: faker.company.name(),
      ...body,
    },
    params: {},
    query: {},
  }
}
describe('CreateCompanyController', () => {
  it('should return created if success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeRequest())
    expect(response.statusCode).toBe(HttpStatusCode.CREATED)
    expect(response.body).toBeFalsy()
  })
  it('should return badRequest 400 if name is not provided', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeRequest({ name: undefined }))
    expect(response.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    expect(response.body).toBeTruthy()
  })
  it('should return server error 500 if CreateCompanyUseCase throw error', async () => {
    const { sut } = makeSutWithError()
    const response = await sut.handle(makeRequest())
    expect(response.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
  it('should return not found 404 if CreateCompanyUseCase throw exception CompanyNotFoundException', async () => {
    const { sut } = makeSutWithException()
    const response = await sut.handle(makeRequest())
    expect(response.statusCode).toBe(HttpStatusCode.NOT_FOUND)
  })
  it('should call CreateCompanyUseCase with correct param', async () => {
    const { sut, createCompanyUseCaseMock } = makeSut()
    const NAME = faker.company.name()
    const createCompanyUseCaseSpyOn = jest.spyOn(
      createCompanyUseCaseMock,
      'handle',
    )
    await sut.handle(makeRequest({ name: NAME }))
    expect(createCompanyUseCaseSpyOn).toHaveBeenCalledWith({ name: NAME })
  })
})
