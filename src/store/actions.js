import Vue from 'vue';

export async function loadData({ commit }) {
  const data = await Vue.http.get('data.json').then(resp => resp.json());
  if (data) {
    const stocks = data.stocks;
    const funds = data.funds;
    const stockPortfolio = data.stockPortfolio;
    const portfolio = {
      stockPortfolio,
      funds,
    };
    commit('SET_STOCKS', stocks);
    commit('SET_PORTFOLIO', portfolio);
  }
}
