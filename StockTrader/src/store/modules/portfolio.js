const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, price}) {
    const record = state.stocks.find(element => element.id == stockId);
    if(record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    console.log(price);
    console.log(quantity);
    state.funds -= price * quantity;
  },
  'SELL_STOCK'(state, {stockId, quantity, price}) {
    const record = state.stocks.find(element => element.id == stockId);
    if(record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += price * quantity;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
}

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order);
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        name: stock.name,
        quantity: stock.quantity,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
