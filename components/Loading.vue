<template>
    <div class="loading-page" v-if="loading">
        <fulfilling-bouncing-circle-spinner class="center_loading"
                           :animation-duration="2000"
                           :size="100"
                           :color="'#ff5638'"
        />
      <br/>
      <p class="lead">Loggin in</p>
    </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start() {
                this.loading = true
            },
            finish() {
                this.loading = false
            }
        }
    }
</script>

<style scoped>

    .center_loading {
        margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
    }
    .loading-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(255, 255, 255);
        text-align: center;
        padding-top: 20%;
        font-size: 30px;
        font-family: sans-serif;
        z-index:100000;
    }
</style>
