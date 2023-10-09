import { HttpRequest } from '@/data/protocols/http/http-request'
import {
  RemoveCompanyController,
  RemoveCompanyControllerParams,
} from '@/presentation/controller/company/remove-company-controller'
import { HttpStatusCode } from '@/presentation/helpers'
import {
  makeRemoveCompanyUseCaseMock,
  makeRemoveCompanyUseCaseMockWithError,
  makeRemoveCompanyUseCaseMockWithException,
} from '@/test/data/mocks/use-cases/remove-company-use-case-mock'
import { faker } from '@faker-js/faker'

const makeSut = () => {
  const { removeCompanyUseCaseMock } = makeRemoveCompanyUseCaseMock()
  const sut = new RemoveCompanyController(removeCompanyUseCaseMock)
  return { sut, removeCompanyUseCaseMock }
}
const makeSutWithError = () => {
  const { removeCompanyUseCaseMockWithError } =
    makeRemoveCompanyUseCaseMockWithError()
  const sut = new RemoveCompanyController(removeCompanyUseCaseMockWithError)
  return { sut, removeCompanyUseCaseMockWithError }
}
const makeSutWithException = () => {
  const { removeCompanyUseCaseMockWithException } =
    makeRemoveCompanyUseCaseMockWithException()
  const sut = new RemoveCompanyController(removeCompanyUseCaseMockWithException)
  return { sut, removeCompanyUseCaseMockWithException }
}
const makeRequest = (
  params: Partial<RemoveCompanyControllerParams> = {},
): HttpRequest<unknown, unknown, RemoveCompanyControllerParams> => {
  return {
    body: {},
    params: { id: faker.string.uuid(), ...params },
    query: {},
  }
}
describe('RemoveCompanyController', () => {
  it('should return not content 204 if success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeRequest())
    expect(response.statusCode).toBe(HttpStatusCode.NO_CONTENT)
  })
  it('should return badRequest 400 if param id is not provided', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeRequest({ id: undefined }))
    expect(response.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    expect(response.body).toBeTruthy()
  })
  it('should return serverError 500 if RemoveCompanyUseCase throw error', async () => {
    const { sut } = makeSutWithError()
    const response = await sut.handle(makeRequest())
    expect(response.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
    expect(response.body).toBeTruthy()
  })
  it('should return not found 404 if RemoveCompanyUseCase throw exception CompanyNotFoundException', async () => {
    const { sut } = makeSutWithException()
    const response = await sut.handle(makeRequest())
    expect(response.statusCode).toBe(HttpStatusCode.NOT_FOUND)
    expect(response.body).toBeTruthy()
  })
  it('should call RemoveCompanyUseCase with correct param', async () => {
    const { sut, removeCompanyUseCaseMock } = makeSut()
    const ID = faker.string.uuid()
    const removeCompanyUseCaseSpyOn = jest.spyOn(
      removeCompanyUseCaseMock,
      'handle',
    )
    await sut.handle(makeRequest({ id: ID }))
    expect(removeCompanyUseCaseSpyOn).toHaveBeenCalledWith(ID)
  })
})
