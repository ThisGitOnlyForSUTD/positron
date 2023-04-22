import axios from 'axios'

export const state = () => ({
  cartData: {
    items: [
      {
        id: 1,
        title: 'Вытяжное устройство G2H',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065',
        price: 12644,
        photoId: 1,
        count: 1,
      },
      {
        id: 2,
        title: 'Вытяжное устройство BXC',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065',
        price: 12644,
        photoId: 2,
        count: 2,
      },
      {
        id: 3,
        title: 'Вытяжное устройство GHN',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065',
        price: 12644,
        photoId: 3,
        count: 1,
      },
    ],
    isInstallRequired: false,
    currency: '₽',
  }, 
  notification: []
})

export const getters = {
  cartTotalPrice(state) {
    let totalPrice = 0;

    state.cartData.items.forEach(el => {
      totalPrice += el.price * el.count;
    });

    return totalPrice;
  },
  cartItemTotalCount(state) {
    let totalCount = 0;

    state.cartData.items.forEach(el => {
      totalCount += el.count;
    });

    return totalCount;
  }
}

export const mutations = {
  increaseCartItemCount (state, itemId) {
    const cartItem = findItemById(state, itemId);
    if (cartItem == null) return;
    cartItem.count++;
  },
  decreaseCartItemCount (state, itemId) {
    const cartItem = findItemById(state, itemId);
    if (cartItem == null || cartItem.count <= 1) return;
    cartItem.count--;
  },
  deleteItemCart (state, itemId) {
    const cartItemIndex = findItemByIndex(state, itemId);
    if (cartItemIndex == null) return;
    state.cartData.items.splice(cartItemIndex, 1);
  },
  clearCart (state) {
    state.cartData.items = [];
    state.cartData.isInstallRequired = false;
  },
  cartTotalPrice(state) {
    let totalPrice = 0;

    state.cartData.items.forEach(el => {
      totalPrice += el.price;
    });

    return totalPrice;
  },
  cartItemTotalCount(state) {
    let totalCount = 0;

    state.cartData.items.forEach(el => {
      totalCount += el.count;
    });

    return totalCount;
  },
  setInstall (state) {
    state.cartData.isInstallRequired = !state.cartData.isInstallRequired;
  },
  pushNotification (state, notification) {
    state.notification.push({
      ...notification,
      id: (1)
    })
  },
  removeNotification (state, notificationToRemove) {
    state.notification = state.notification.filter(notification => {
      return notification.id == notificationToRemove
    })
  }
}

export const actions = {
  async sendDataToServer ({state, dispatch}) {
    try {
      const response = await axios.post('/posts', state.cartData, {
        params: {},
        headers: { 'Content-Type': 'application/json' },
        baseURL: 'https://jsonplaceholder.typicode.com',
      })
      console.log(JSON.stringify(response))
      dispatch('addNotification')
    } 
    catch (err) {
      console.log(err)
    }
  },
  addNotification ({commit}, notification) {
    commit('pushNotification', notification)
  },
  closeNotification ({commit}, notification) {
    commit('removeNotification', notification)
  }
}


function findItemById(state, itemId) {
  return state.cartData.items.find(item => item.id == itemId);
}
function findItemByIndex(state, itemId) {
  return state.cartData.items.findIndex(item => item.id == itemId);
}
