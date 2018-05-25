<template>
  <div>
    <div class="row no-gutters" style="background: #161616">
      <div class="col-sm-12 content-wrap">
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <div class=" dev-dash-wrap">
              <div class="  no-gutters">
                <div class="collection_wrapper">
                  <fulfilling-bouncing-circle-spinner v-if="request_progress"
                                     style="margin: auto;margin-top: 30%;"
                                     :animation-duration="2000"
                                     :size="100"
                                     :color="'#ff5638'"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        request_progress: true,
      }
    },
    beforeCreate() {

    },
    beforeMount() {
    },
    async mounted() {
      await this.$nextTick(() => {
        this.$nuxt.$loading.start()
      });
    },
    methods: {

    }
  }
</script>

<style scoped>
  .collection_wrapper {
    min-height: 100vh !important;
  }

  .load_text{
    color: white;
  }
</style>
