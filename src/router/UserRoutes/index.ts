//=====> User Model
import UserIndex from '@/views/users/Index.vue'
import UserListing from '@/views/users/Listing.vue'
import UserCreate from '@/views/users/actions/Create.vue'
import UserWizard from '@/views/users/advanced/Wizard.vue'
import UserFilter from '@/views/users/Filter.vue'
import UserTrash from '@/views/users/Trash.vue'
import UserStatistics from '@/views/users/advanced/Statistics.vue'
import UserTargeting from '@/views/users/advanced/Targeting.vue'
//===> User :id
import UserProfile from '@/views/users/account-management/Profile.vue'
import UserEdit from '@/views/users/Show.vue'
import UserShow from '@/views/users/Show.vue'

export const UserRoutes = [
    {
        path: '/users',
        name: 'users',
        component: UserIndex
    },
    {
        path: '/users/listing',
        name: 'users-listing',
        component: UserListing
    },
    {
        path: '/users/create',
        name: 'users-create',
        component: UserCreate
    },
    {
        path: '/users/wizard',
        name: 'users-wizard',
        component: UserWizard
    },
    {
        path: '/users/filter',
        name: 'users-filter',
        component: UserFilter
    },
    {
        path: '/users/statistics',
        name: 'users-statistics',
        component: UserStatistics
    },
    {
        path: '/users/trageting',
        name: 'users-targeting',
        component: UserTargeting
    },
    {
        path: '/users/profile',
        name: 'user-profile',
        component: UserProfile
    },
    {
        path: '/users/:userId/edit',
        name: 'user-edit',
        component: UserEdit
    },
    {
        path: '/users/:userId/show',
        name: 'user-show',
        component: UserShow
    },
    {
        path: '/users/trash',
        name: 'users-trash',
        component: UserTrash
    },
]