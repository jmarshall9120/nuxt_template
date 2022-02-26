<template>
  <!-- <v-app id="inspire">
    <v-content> -->
  <v-container fluid fill-height justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="mx-auto my-12" max-width="400" tile light>
        <v-flex class="pa-2">
          <v-img
            src="/vuetify-logo.svg"
            contain
            max-height="150"
            class=""
          ></v-img>
        </v-flex>
        <v-card-title class="text-center">Please Log in</v-card-title>
        <v-list dense>
          <v-hover v-slot="{ hover }">
            <v-list-item
              darken-4
              :class="{ 'on-hover': hover }"
              @click="signInWith365"
            >
              <v-img
                src="/redMS365Logo.jpg"
                height="100px"
                aspect-ratio="2"
                class="elevation-9"
              ></v-img>
            </v-list-item>
          </v-hover>
          <v-btn
            v-if="!showManualLogin"
            text
            small
            plain
            class="text-lowercase"
            @click="showManualLogin = true"
            >admin</v-btn
          >
          <v-form v-if="showManualLogin">
            <v-list>
              <v-list-item>
                <v-text-field
                  v-model="login.username"
                  label="Username"
                ></v-text-field>
              </v-list-item>
              <v-list-item>
                <v-text-field
                  v-model="login.password"
                  :rules="[rules.required]"
                  :append-icon="showManualPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showManualPassword ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  @click:append="showManualPassword = !showManualPassword"
                >
                  <!-- <template #append>
                    <v-icon color="green">mdi-eye</v-icon>
                  </template> -->
                </v-text-field>
              </v-list-item>
              <v-list-item>
                <v-btn @click="signInWithManual">login</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="showManualLogin = false">close</v-btn>
              </v-list-item>
            </v-list>
          </v-form>
        </v-list>
      </v-card>
    </v-flex>
  </v-container>
  <!-- </v-content>
  </v-app> -->
</template>
<script>
export default {
  components: {},
  layout: 'no-nav',
  data: () => ({
    showManualLogin: true,
    showManualPassword: false,
    login: {
      password: '',
      username: '',
    },
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match",
    },
  }),
  computed: {},
  methods: {
    signInWith365() {
      console.log('365 login not implimented')
    },
    async signInWithManual() {
      // try {
      //   const response = await this.$store.dispatch(
      //     'amplifySignIn_WithCredentials',
      //     this.login
      //   )
      //   console.log(response)
      // } catch (err) {
      //   console.log(err)
      // }
      // return
      try {
        const response = await this.$auth.loginWith('amplifyManual', {
          data: this.login,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
