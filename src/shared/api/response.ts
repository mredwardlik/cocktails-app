export type ApiResponse<T = unknown> = {
  code: number
  data: T
  error: string | null
  message: string
}
