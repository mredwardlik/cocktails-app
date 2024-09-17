export function getEnvVariable<T = unknown>(key: string): T {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable "${key}" is required`)
  }

  return import.meta.env[key] as T
}
