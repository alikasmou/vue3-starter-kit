import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSettings = defineStore({
    id: 'settingsStore',
    state: () => ({
        datatable: {
            filters: {
                orderBy: '',
                order: '',
                trashed: '',
                start_date: '',
                end_date: '',
                per_page: '6',
            }
        }
    }),
    getters: {
        getDatatableFilters: (state) => state.datatable.filters
    },
    actions: {
        setDatatableFilters(orderBy: string, order: string, trashed: string, start_date: string, end_date: string, per_page: string) {
            this.datatable.filters.orderBy = orderBy || 'id'
            this.datatable.filters.order = order || 'desc'
            this.datatable.filters.trashed = trashed || 'active'
            this.datatable.filters.start_date = start_date || ''
            this.datatable.filters.end_date = end_date || ''
            this.datatable.filters.per_page = per_page || '5'
        }
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSettings, import.meta.hot))
}