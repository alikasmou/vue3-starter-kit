import { defineStore, acceptHMRUpdate } from 'pinia'
import { UserSection } from './layoutVariants/sideMenuSections/UserSection'
import { CourseSection } from './layoutVariants/sideMenuSections/CourseSection'
import { InfoSection } from './layoutVariants/sideMenuSections/InfoSection'
export const useLayoutStore = defineStore({
    id: 'layoutStore',
    state: () => ({
        theme: {
            light: {
                colors: {
                    primary: '',
                    light: '',
                    dark: '',
                    text: {
                        primary: '',
                        light: '',
                        dark: '',
                        danger: '',
                        success: '',
                        muted: '',
                        warning: ''
                    }
                }
            },
            dark: {
                colors: {
                    primary: '',
                    light: '',
                    dark: '',
                    text: {
                        primary: '',
                        light: '',
                        dark: '',
                        danger: '',
                        success: '',
                        muted: '',
                        warning: ''
                    }
                }
            },
            colorfull: {
                colors: {
                    primary: '',
                    light: '',
                    dark: '',
                    text: {
                        primary: '',
                        light: '',
                        dark: '',
                        danger: '',
                        success: '',
                        muted: '',
                        warning: ''
                    }
                }
            },
        },
        sideMenu: {
            rail: false,
            drawer: true,
            sections: [
                ...UserSection,
                ...CourseSection,
                ...InfoSection,
            ]
        },
        profileMenu: {
            show: false
        }
    }),
    getters: {
        getSideMenuRail: (state) => state.sideMenu.rail,
        getSideMenuDrawer: (state) => state.sideMenu.drawer,
        getSideMenuSections: (state) => state.sideMenu.sections,
        getProfileMenuStatus: (state) => state.profileMenu.show,
        getThemeLight: (state) => state.theme.light,
        getThemeDark: (state) => state.theme.dark,
        getThemeColorfull: (state) => state.theme.colorfull,
    },
    actions: {
        closeSideMenuRail() {
            this.sideMenu.rail = false
        },
        toggleSideMenuRail() {
            this.sideMenu.rail = !this.sideMenu.rail
        },
        toggleSideMenuDrawer() {
            this.sideMenu.drawer = !this.sideMenu.drawer
        },
        toggleProfileMenu() {
            this.profileMenu.show = !this.profileMenu.show
        },
        closeProfileMenu() {
            this.profileMenu.show = false
        },
        openProfileMenu() {
            this.profileMenu.show = true
        }
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}