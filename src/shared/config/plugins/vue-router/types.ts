import { RouteRecordRaw } from 'vue-router'
import routes from '#app/routes'

export interface VueInitalOptions {
  readonly routes: RouteRecordRaw[]
}

/*
 * Выводит все значения ключа "name" из массива маршрутов "routes". В
 * результате получается набор строк.
 *
 * Например:
 * type RouteNames = "dashboard" | "home" | ...
 *
 * TODO: Можно записать лаконичнее (RouteNames, ChildrenRouteNames).
 */
export type RouteNames = BaseRouteNames<Routes>

type BaseRouteNames<T extends RouteRecordRaw[]> =
  | T[number]['name']
  | ChildrenRouteNames<T[number]['children']>

type ChildrenRouteNames<T> = T extends RouteRecordRaw[]
  ? BaseRouteNames<T>
  : null

type Routes = typeof routes
