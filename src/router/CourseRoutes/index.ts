import CourseIndex from '@/views/courses/Index.vue'
import CourseListing from '@/views/courses/Listing.vue'
import CourseFilter from '@/views/courses/Filter.vue'
import CourseWizard from '@/views/courses/advanced/Wizard.vue'
import CourseStatistics from '@/views/courses/advanced/Statistics.vue'
import CourseTargeting from '@/views/courses/advanced/Trageting.vue'
import CourseCreate from '@/views/courses/actions/Create.vue'
import courseTrash from '@/views/courses/actions/Trash.vue'
import courseShow from '@/views/courses/actions/Show.vue'
import courseEdit from '@/views/courses/actions/Show.vue'
export const CourseRoutes = [
    {
        path: '/courses',
        name: 'courses',
        component: CourseIndex
    },
    {
        path: '/courses/listing',
        name: 'courses-listing',
        component: CourseListing
    },
    {
        path: '/courses/filter',
        name: 'courses-filter',
        component: CourseFilter
    },
    {
        path: '/courses/wizard',
        name: 'courses-wizard',
        component: CourseWizard
    },
    {
        path: '/courses/create',
        name: 'courses-create',
        component: CourseCreate
    },
    {
        path: '/courses/statistics',
        name: 'courses-statistics',
        component: CourseStatistics
        
    },
    {
        path: '/courses/trageting',
        name: 'courses-targeting',
        component: CourseTargeting
    },
    {
        path: '/courses/:courseId/edit',
        name: 'course-edit',
        component: courseEdit
    },
    {
        path: '/courses/:courseId/show',
        name: 'course-show',
        component: courseShow
    },
    {
        path: '/courses/trash',
        name: 'courses-trash',
        component: courseTrash
    },
]