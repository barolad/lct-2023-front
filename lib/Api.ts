/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios"

export interface AnalysisIdWithBool {
  /** @format int32 */
  analysisId?: number
  isMandatory?: boolean
}

export interface AnalysisWithBool {
  analysisName?: string | null
  isMandatory?: boolean
}

export interface ChapterWMkb10Read {
  /** @format int32 */
  chapterId?: number
  chapter?: string | null
  name?: string | null
  mkb10s?: Mkb10WoChapter[] | null
}

export interface ClinicCreation {
  name?: string | null
  adress?: string | null
  filial?: string | null
  diffName?: string | null
  /** @format float */
  rateGeneral?: number
  /** @format float */
  rateProfes?: number
  /** @format float */
  rateKind?: number
  /** @format float */
  rateTeam?: number
  /** @format float */
  rateTrust?: number
  /** @format float */
  ratePatient?: number
  /** @format float */
  rateRespect?: number
}

export interface ClininicReadShort {
  /** @format int32 */
  id?: number
  name?: string | null
  address?: string | null
  filial?: string | null
  diffName?: string | null
}

export interface DateOnly {
  /** @format int32 */
  year?: number
  /** @format int32 */
  month?: number
  /** @format int32 */
  day?: number
  dayOfWeek?: DayOfWeek
  /** @format int32 */
  dayOfYear?: number
  /** @format int32 */
  dayNumber?: number
}

/** @format int32 */
export enum DayOfWeek {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export interface DiagnosisStatistics {
  mkbCode?: string | null
  diagnosis?: string | null
  /** @format int32 */
  totalPatients?: number
  /** @format int32 */
  averageAge?: number
  /** @format int32 */
  correctRecommendationRatio?: number
}

export interface DoctorDepartmentStatisticsOutput {
  /** @format int32 */
  totalDoctors?: number
  doctorStatistics?: DoctorStatistics[] | null
}

export interface DoctorStatistics {
  doctorPost?: string | null
  /** @format int32 */
  totalRecommendations?: number
  /** @format double */
  correctRecommendationRatio?: number
  /** @format int32 */
  totalPatients?: number
}

export interface InputErrorRead {
  /** @format uuid */
  id?: string
  diagnosisName?: string | null
}

export interface Mkb10 {
  /** @format int32 */
  id?: number
  chapter?: string | null
  litera?: string
  /** @format int32 */
  number?: number
  /** @format int32 */
  subnumber?: number | null
  name?: string | null
}

export interface Mkb10Chapter {
  /** @format int32 */
  id?: number
  chapter?: string | null
  sub?: string | null
  name?: string | null
}

export interface Mkb10GroupRead {
  /** @format int32 */
  id?: number
  chapterName?: string | null
  name?: string | null
  sub?: string | null
}

export interface Mkb10StandartCreation {
  analysesWBools?: AnalysisIdWithBool[] | null
  mkb10Codes?: string[] | null
}

export interface Mkb10StandartRead {
  mkb10Code?: string | null
  mkb10EsiliWithBools?: AnalysisWithBool[] | null
}

export interface Mkb10WCode {
  /** @format int32 */
  id?: number
  name?: string | null
  code?: string | null
}

export interface Mkb10WoChapter {
  /** @format int32 */
  id?: number
  litera?: string
  /** @format int32 */
  number?: number
  /** @format int32 */
  subnumber?: number | null
  name?: string | null
}

export interface MskAnalysisAnalogCreation {
  /** @format int32 */
  analysisId?: number
  /** @format uuid */
  analogGuid?: string
}

export interface MskAnalysisCategoryCreation {
  name?: string | null
}

export interface MskAnalysisCategoryGet {
  /** @format int32 */
  id?: number
  name?: string | null
  analyses?: MskAnalysisGet[] | null
}

export interface MskAnalysisClassCreation {
  /** @format int32 */
  analysisTypeId?: number
  name?: string | null
}

export interface MskAnalysisClassGet {
  /** @format int32 */
  id?: number
  name?: string | null
  categories?: MskAnalysisCategoryGet[] | null
}

export interface MskAnalysisCreation {
  type?: string | null
  class?: string | null
  category?: string | null
  name?: string | null
}

export interface MskAnalysisGet {
  /** @format int32 */
  id?: number
  /** @minLength 1 */
  name: string
  analogs?: string[] | null
}

export interface MskAnalysisTypeGet {
  /** @format int32 */
  id?: number
  name?: string | null
  classes?: MskAnalysisClassGet[] | null
}

export interface PatientStatisticsOutput {
  /** @format int32 */
  totalPatients?: number
  patientStatistics?: DiagnosisStatistics[] | null
}

export interface RecommendationGroup {
  /** @format int32 */
  groupStatus?: number
  groupStatusName?: string | null
  groupRecommendations?: string[] | null
}

export interface RecommendationStatisticsOutput {
  recommendationTypeStatistics?: RecommendationTypeStatistics[] | null
}

export interface RecommendationTypeStatistics {
  recommendationType?: string | null
  /** @format int32 */
  totalRecommendations?: number
}

export interface RusEsiliCreation {
  code?: string | null
  name?: string | null
}

export interface UserCreation {
  email?: string | null
  password?: string | null
  name?: string | null
  surname?: string | null
}

export interface UserDiadnosticOutput {
  /** @format int32 */
  id?: number
  sex?: string | null
  birthDate?: DateOnly
  /** @format int32 */
  patientId?: number | null
  mkbCode?: string | null
  diagnosis?: string | null
  date?: DateOnly
  doctorPost?: string | null
  standartExists?: boolean
  /** @format double */
  accuracy?: number | null
  recommendationsGrouped?: RecommendationGroup[] | null
}

export interface UserDiagnosticInputGet {
  /** @format uuid */
  id?: string
  name?: string | null
  /** @format date-time */
  creationDate?: string
  inputDatas?: UserDiagnosticInputRead[] | null
}

export interface UserDiagnosticInputRead {
  /** @format int32 */
  id?: number
  sex?: string | null
  birthDate?: DateOnly
  /** @format int32 */
  patientId?: number | null
  mkbCode?: string | null
  diagnosis?: string | null
  date?: DateOnly
  doctorPost?: string | null
  recommendations?: string[] | null
}

export interface UserGet {
  login?: string | null
  role?: string | null
  name?: string | null
  surname?: string | null
}

export interface UserInputRelationRead {
  /** @format uuid */
  userId?: string
  /** @format uuid */
  inputId?: string
  inputName?: string | null
  missingNames?: InputErrorRead[] | null
}

export interface UserLogin {
  email?: string | null
  password?: string | null
}

export interface UserOutputRead {
  /** @format uuid */
  id?: string
  name?: string | null
  /** @format date-time */
  creationDate?: string
  /** @format double */
  totalAccuracy?: number
  outputDatas?: UserDiadnosticOutput[] | null
}

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title MediWingWebAPI
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  account = {
    /**
     * No description
     *
     * @tags Account
     * @name SignIn
     * @request POST:/Account/SignIn
     */
    signIn: (data: UserLogin, params: RequestParams = {}) =>
      this.request<UserGet, string>({
        path: `/Account/SignIn`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name SignUp
     * @request POST:/Account/SignUp
     */
    signUp: (data: UserCreation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Account/SignUp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name SignOut
     * @request POST:/Account/SignOut
     */
    signOut: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/Account/SignOut`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name GetUser
     * @request GET:/Account/User
     */
    getUser: (params: RequestParams = {}) =>
      this.request<UserGet, string>({
        path: `/Account/User`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  analysis = {
    /**
     * No description
     *
     * @tags Analysis
     * @name AddRusEsilis
     * @request POST:/Analysis/Rus
     */
    addRusEsilis: (data: RusEsiliCreation[], params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Analysis/Rus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analysis
     * @name AddAnalysis
     * @request POST:/Analysis
     */
    addAnalysis: (data: MskAnalysisCreation[], params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Analysis`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analysis
     * @name GetAllAnalysesByType
     * @request GET:/Analysis
     */
    getAllAnalysesByType: (
      query?: {
        type?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<MskAnalysisTypeGet[], string>({
        path: `/Analysis`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analysis
     * @name AddClasses
     * @request POST:/Analysis/Classes
     */
    addClasses: (data: MskAnalysisClassCreation[], params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Analysis/Classes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analysis
     * @name AddCategories
     * @request POST:/Analysis/Categories
     */
    addCategories: (data: MskAnalysisCategoryCreation[], params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Analysis/Categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analysis
     * @name SearchAnalyses
     * @request GET:/Analysis/Search
     */
    searchAnalyses: (
      query?: {
        search?: string
        /** @format int32 */
        id?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<MskAnalysisGet[], string>({
        path: `/Analysis/Search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analysis
     * @name AddAnalog
     * @request POST:/Analysis/Analog
     */
    addAnalog: (data: MskAnalysisAnalogCreation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Analysis/Analog`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  }
  clinic = {
    /**
     * No description
     *
     * @tags Clinic
     * @name AddClinics
     * @request POST:/Clinic
     */
    addClinics: (data: ClinicCreation[], params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Clinic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clinic
     * @name GetClinicsShort
     * @request GET:/Clinic
     */
    getClinicsShort: (
      query?: {
        /**
         * @format int32
         * @default 30
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ClininicReadShort[], string>({
        path: `/Clinic`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clinic
     * @name SearchClinicsByName
     * @request GET:/Clinic/Search
     */
    searchClinicsByName: (
      query?: {
        name?: string
        /**
         * @format int32
         * @default 10
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ClininicReadShort[], string>({
        path: `/Clinic/Search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
  import = {
    /**
     * No description
     *
     * @tags Import
     * @name ImportXlsx
     * @request POST:/Import
     */
    importXlsx: (
      data: {
        /** @format binary */
        file?: File
      },
      query?: {
        /** @format int32 */
        name?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<UserInputRelationRead, string>({
        path: `/Import`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name SearchInput
     * @request GET:/Import/{guid}
     */
    searchInput: (
      guid: string,
      query?: {
        /** @default "" */
        filter?: string
        /**
         * @format int32
         * @default 0
         */
        startElement?: number
        /**
         * @format int32
         * @default 0
         */
        count?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<UserDiagnosticInputGet, string>({
        path: `/Import/${guid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name DeleteInput
     * @request DELETE:/Import/{guid}
     */
    deleteInput: (guid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/Import/${guid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name LastRequestsList
     * @request GET:/Import/LastRequests
     */
    lastRequestsList: (
      query?: {
        /**
         * @format int32
         * @default 10
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<Record<string, string>[], string>({
        path: `/Import/LastRequests`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name DeleteData
     * @request DELETE:/Import/Data/{id}
     */
    deleteData: (id: number, params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Import/Data/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name GetResultByGuid
     * @request GET:/Import/Result/{guid}
     */
    getResultByGuid: (guid: string, params: RequestParams = {}) =>
      this.request<UserOutputRead, string>({
        path: `/Import/Result/${guid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name StatisticsDoctorDetail
     * @request GET:/Import/Statistics/Doctor/{guid}
     */
    statisticsDoctorDetail: (guid: string, params: RequestParams = {}) =>
      this.request<DoctorDepartmentStatisticsOutput, any>({
        path: `/Import/Statistics/Doctor/${guid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name StatisticsPatientDetail
     * @request GET:/Import/Statistics/Patient/{guid}
     */
    statisticsPatientDetail: (guid: string, params: RequestParams = {}) =>
      this.request<PatientStatisticsOutput, any>({
        path: `/Import/Statistics/Patient/${guid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Import
     * @name StatisticsRecommendationDetail
     * @request GET:/Import/Statistics/Recommendation/{guid}
     */
    statisticsRecommendationDetail: (guid: string, params: RequestParams = {}) =>
      this.request<RecommendationStatisticsOutput, any>({
        path: `/Import/Statistics/Recommendation/${guid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  }
  mkb10 = {
    /**
     * No description
     *
     * @tags Mkb10
     * @name ChapterList
     * @request GET:/Mkb10/Chapters
     */
    chapterList: (params: RequestParams = {}) =>
      this.request<Mkb10Chapter[], string>({
        path: `/Mkb10/Chapters`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name GetMkb10SByChapter
     * @request GET:/Mkb10/Chapter
     */
    getMkb10SByChapter: (
      query?: {
        /** @format int32 */
        chapterId?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<ChapterWMkb10Read, string>({
        path: `/Mkb10/Chapter`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name GroupList
     * @request GET:/Mkb10/Groups
     */
    groupList: (params: RequestParams = {}) =>
      this.request<Mkb10GroupRead[], string>({
        path: `/Mkb10/Groups`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name AddStandarts
     * @request POST:/Mkb10/Standart
     */
    addStandarts: (data: Mkb10StandartCreation, params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Mkb10/Standart`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name GetStandartsByMkb10Code
     * @request GET:/Mkb10/Standart
     */
    getStandartsByMkb10Code: (
      query?: {
        mkb10Code?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<Mkb10StandartRead, string>({
        path: `/Mkb10/Standart`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name AllStandarts
     * @request GET:/Mkb10/Standarts
     */
    allStandarts: (params: RequestParams = {}) =>
      this.request<Mkb10StandartRead[], string>({
        path: `/Mkb10/Standarts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name GetInfoByFullMkb10Code
     * @request GET:/Mkb10
     */
    getInfoByFullMkb10Code: (
      query?: {
        code?: string
        /**
         * @format int32
         * @default 10
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<Mkb10, string>({
        path: `/Mkb10`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mkb10
     * @name SearchInMkb10
     * @request GET:/Mkb10/Search
     */
    searchInMkb10: (
      query?: {
        search?: string
        /**
         * @format int32
         * @default 10
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<Mkb10WCode[], string>({
        path: `/Mkb10/Search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  }
}
