import InfoIndex from '@/views/info/Index.vue'
import InfoListing from '@/views/info/Listing.vue'
import InfoFilter from '@/views/info/Filter.vue'
import InfoWizard from '@/views/info/advanced/Wizard.vue'
import InfoStatistics from '@/views/info/advanced/Statistics.vue'
import InfoTargeting from '@/views/info/advanced/Trageting.vue'
import InfoCreate from '@/views/info/actions/Create.vue'
import InfoTrash from '@/views/info/actions/Trash.vue'
import InfoShow from '@/views/info/actions/Show.vue'
import InfoEdit from '@/views/info/actions/Show.vue'
export const InfoRoutes = [
    {
        path: '/info',
        name: 'info',
        component: InfoIndex
    },
    {
        path: '/info/listing',
        name: 'info-listing',
        component: InfoListing
    },
    {
        path: '/info/filter',
        name: 'info-filter',
        component: InfoFilter
    },
    {
        path: '/info/wizard',
        name: 'info-wizard',
        component: InfoWizard
    },
    {
        path: '/info/create',
        name: 'info-create',
        component: InfoCreate
    },
    {
        path: '/info/statistics',
        name: 'info-statistics',
        component: InfoStatistics

    },
    {
        path: '/info/trageting',
        name: 'info-targeting',
        component: InfoTargeting
    },
    {
        path: '/info/:infoId/edit',
        name: 'info-edit',
        component: InfoEdit
    },
    {
        path: '/info/:infoId/show',
        name: 'info-show',
        component: InfoShow
    },
    {
        path: '/info/trash',
        name: 'info-trash',
        component: InfoTrash
    },
]