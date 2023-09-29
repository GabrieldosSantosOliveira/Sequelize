import { HttpRequest } from '@/data/protocols/http/http-request'
import {
  GetCompaniesController,
  GetCompaniesControllerRequestQuery,
} from '@/presentation/controller/company/get-companies-controller'
import { HttpStatusCode } from '@/presentation/helpers'
import { CompanyViewModel } from '@/presentation/view-models/company-view-model'
import {
  makeGetCompaniesUseCaseMock,
  makeGetCompaniesUseCaseMockWithError,
  makeGetCompaniesUseCaseMockWithException,
} from '@/test/data/mocks/use-cases/get-companies-use-case-mock'
import { makeLoggerMock } from '@/test/infra/mocks/logger/logger'

const makeSut = () => {
  const { getCompaniesUseCaseMock } = makeGetCompaniesUseCaseMock()
  const { loggerMock } = makeLoggerMock()
  const sut = new GetCompaniesController(getCompaniesUseCaseMock, loggerMock)
  return { sut, loggerMock, getCompaniesUseCaseMock }
}
const makeSutWithError = () => {
  const { getCompaniesUseCaseMockWithError } =
    makeGetCompaniesUseCaseMockWithError()
  const { loggerMock } = makeLoggerMock()
  const sut = new GetCompaniesController(
    getCompaniesUseCaseMockWithError,
    loggerMock,
  )
  return { sut, loggerMock, getCompaniesUseCaseMockWithError }
}
const makeSutWithException = () => {
  const { getCompaniesUseCaseMockWithException } =
    makeGetCompaniesUseCaseMockWithException()
  const { loggerMock } = makeLoggerMock()
  const sut = new GetCompaniesController(
    getCompaniesUseCaseMockWithException,
    loggerMock,
  )
  return { sut, loggerMock, getCompaniesUseCaseMockWithException }
}
const makeRequest = (
  query: Partial<GetCompaniesControllerRequestQuery> = {},
): HttpRequest<unknown, GetCompaniesControllerRequestQuery, unknown> => {
  return {
    body: {},
    params: {},
    query: {
      sizePerPage: 10,
      page: 1,
      ...query,
    },
  }
}
describe('GetCompaniesController', () => {
  it('should return companies if success', async () => {
    const { sut, getCompaniesUseCaseMock } = makeSut()
    const companies = await sut.handle(makeRequest())
    expect(companies.statusCode).toBe(HttpStatusCode.OK)
    expect(companies.body).toHaveProperty('info')
    expect(companies.body).toHaveProperty('data')
    expect(companies.body?.data).toEqual(
      getCompaniesUseCaseMock.data.map(CompanyViewModel.toHTTP),
    )
    expect(companies.body.info).toBe(getCompaniesUseCaseMock.info)
  })
  it('should return 500 if GetCompaniesUseCase throw', async () => {
    const { sut } = makeSutWithError()
    const companies = await sut.handle(makeRequest())

    expect(companies.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
  it('should return 409 if GetCompaniesUseCase return exception', async () => {
    const { sut } = makeSutWithException()
    const companies = await sut.handle(makeRequest())
    expect(companies.statusCode).toBe(HttpStatusCode.NO_CONTENT)
  })
})
