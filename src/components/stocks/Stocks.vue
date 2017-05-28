<template>
  <div>
    <app-stock
      v-for="stock in stocks"
      :key="stock.key"
      :stock="stock">
    </app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    name: 'Stocks',
    components: {
      appStock: Stock,
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    },
  };
</script>
