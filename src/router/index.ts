import { createRouter, createWebHistory } from 'vue-router'
import { UserRoutes } from './UserRoutes'
import { CourseRoutes } from './CourseRoutes'
import { BaseRoutes } from './BaseRoutes'
import { InfoRoutes } from './InfoRoutes'
import { initCustomFormatter } from 'vue'
const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      ...BaseRoutes,
      ...UserRoutes,
      ...CourseRoutes,
      ...InfoRoutes,
    ]
  }
)
export default router