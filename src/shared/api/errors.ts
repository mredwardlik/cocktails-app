import type { AxiosError } from 'axios'

export type ApiError = AxiosError<{
  code: number
  data: object | null
  error: string
  message: string
}>
