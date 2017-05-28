<template>
  <div>
    <app-stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id">
    </app-stock>
  </div>
</template>
<script>
  import Stock from './Stock.vue';
  import { mapGetters } from 'vuex';


  export default {
    name: 'portfolio',
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio',
      })
    },
    components: {
      appStock: Stock,
    },
  };
</script>
