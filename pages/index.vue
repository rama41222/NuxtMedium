<template>
  <section class="container">
    <div>
      <b-form data-vv-scope="loginFrm">
        <b-form-group  description="Let us know your Email." label="Enter your Email" label-for="email">
          <b-form-input id="email"   v-validate="'required|email'" name="email" v-model="loginForm.email" type="email"></b-form-input>
          <span class="alert_danger" v-show="errors.has('loginFrm.email')">{{ errors.first('loginFrm.email') }}</span>

        </b-form-group>
        <b-form-group   description="Let us know your Password." label="Enter your Password" label-for="pw">
          <b-form-input id="pw" name="pw"  data-vv-as="Password" v-model="loginForm.password"  v-validate="{ required: true, min: 6 }"  type="password"> </b-form-input>
          <span class="alert_danger" v-show="errors.has('loginFrm.pw')">{{ errors.first('loginFrm.pw') }}</span>
        </b-form-group>
        <b-button-group size="sm">
            <b-button @click="facebook" variant="outline-success">Facebook</b-button>
            <b-button @click="login" variant="outline-success">Login</b-button>
            <b-button @click="google" variant="outline-success">Google</b-button>
            <b-button @click="logout" variant="outline-success">Logout</b-button>
            <b-button @click="check" variant="outline-success">Check</b-button>
          </b-button-group>
      </b-form>
    </div>

    <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>
  </section>
</template>

<script>

export default {
  data(){
    return {
      loginForm: {
        email:'',
        password:''
      }

    }
  },
  component: {
  },
  watch: {
    $route() {
      this.showLoginModal();
    }
  },
  methods: {
    showLoginModal(){
      if (typeof this.$route.query.login !== 'undefined' && this.$route.query.login === "1") {
        this.$toast.error('Please Login ', {icon: "fingerprint"});
        this.$refs.myModalRef.show()
        this.$router.push('/')
      }
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    async google(){

      await this.$auth.loginWith('google').catch(e => {
        this.$toast.show('Error', {icon: "fingerprint"});
      })
    },
    async facebook(){

       await this.$auth.loginWith('facebook').catch(e => {
        this.$toast.show('Error', {icon: "fingerprint"});
      })
    },
    async login() {
      try {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        });
        await this.$auth.loginWith('local', {
          data: {
            "email": this.loginForm.email,
            "password": this.loginForm.password
          }
        })

        if (this.$auth.loggedIn) {
          this.$toast.success('Successfully Logged In', {icon: "done"});
        }
      } catch (e) {
        this.$toast.error('Username or Password wrong', {icon: "error"});
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
    check(){
      console.log(this.$auth.loggedIn)
    },
    logout() {
      this.$toast.show('Logging out...', {icon: "fingerprint"});
      this.$auth.logout()
    },
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.alert_danger {
  color: white;
  font-weight: lighter;
  font-size: 0.8em;
  padding: 3px;
  padding-left: 8px;
  padding-right: 8px;
  vertical-align: center;
  background-color: #18a800;
  border-radius: 10px;
}
</style>
