<template>
  <div id="app">
    <div class="row">
      <div class="container">
        <input
          placeholder="Name"
          @keyup.enter="onEnter"
          type="text"
          v-model="search"
          id="input"
        />
        <ul class="container-1">
          <li v-for="person in getPrsn" :key="person.id" class="item">
            {{ person.title }}
            <div class="card-image">
              <img v-bind:src="person.image" />
            </div>
            <div class="card-content">
              <span class="card-title title">{{ person.name }}</span>
            </div>
          </li>
        </ul>
        <div class="btn-wrap">
          <button @click="click"  class="btn">More</button>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      search: '',
    };
  },

  methods: {
    onEnter() {
      this.$store.dispatch('getPerson', this.search);
    },
    click() {
       this.$store.dispatch('getPerson2')
    }
  },

  computed: {
    getPrsn() {
      return this.$store.state.person;
    },
  },
  async mounted() {
    await this.$store.dispatch('getPerson');
    
  },
};
</script>



<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
.container-1 {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.item {
  width: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background: rgb(118, 185, 147);
}
.title {
  color: #fff !important;
  font-size: 30px !important;
  font-weight: bold !important;
}
.btn-wrap {
  display: flex;
  justify-content: center;
}
</style>