export const AppHeader = () => import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const AppInstallation = () => import('../../components/AppInstallation.vue' /* webpackChunkName: "components/app-installation" */).then(c => wrapFunctional(c.default || c))
export const CartPageCard = () => import('../../components/cartPage/card.vue' /* webpackChunkName: "components/cart-page-card" */).then(c => wrapFunctional(c.default || c))
export const CartPageListingCart = () => import('../../components/cartPage/listingCart.vue' /* webpackChunkName: "components/cart-page-listing-cart" */).then(c => wrapFunctional(c.default || c))
export const CartPageSidebar = () => import('../../components/cartPage/sidebar.vue' /* webpackChunkName: "components/cart-page-sidebar" */).then(c => wrapFunctional(c.default || c))
export const CartPageSlider = () => import('../../components/cartPage/slider.vue' /* webpackChunkName: "components/cart-page-slider" */).then(c => wrapFunctional(c.default || c))
export const NotificationsItem = () => import('../../components/notifications/notificationsItem.vue' /* webpackChunkName: "components/notifications-item" */).then(c => wrapFunctional(c.default || c))
export const NotificationsList = () => import('../../components/notifications/notificationsList.vue' /* webpackChunkName: "components/notifications-list" */).then(c => wrapFunctional(c.default || c))
export const UiAppBreadcrumbs = () => import('../../components/ui/AppBreadcrumbs.vue' /* webpackChunkName: "components/ui-app-breadcrumbs" */).then(c => wrapFunctional(c.default || c))
export const UiAppButton = () => import('../../components/ui/AppButton.vue' /* webpackChunkName: "components/ui-app-button" */).then(c => wrapFunctional(c.default || c))
export const UiIconsCartIco = () => import('../../components/ui/icons/cart-ico.vue' /* webpackChunkName: "components/ui-icons-cart-ico" */).then(c => wrapFunctional(c.default || c))
export const UiIconsInstallIco = () => import('../../components/ui/icons/install-ico.vue' /* webpackChunkName: "components/ui-icons-install-ico" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
