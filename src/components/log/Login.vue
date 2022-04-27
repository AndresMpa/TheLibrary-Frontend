<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <div class="d-flex flex-column justify-space-between align-center">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          width="1020"
        >
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <v-card class="ma-5 pa-5" color="main" dark>
                  <v-text-field
                    label="Nombre de usuario"
                    :rules="errors"
                    v-model="name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    :rules="errors"
                    required
                  ></v-text-field>

                  <v-card-actions class="mt-5">
                    <v-btn small @click="validateAccount()">
                      <v-icon> mdi-account </v-icon>
                      Ingresar
                    </v-btn>

                    <v-btn small>
                      <v-icon> mdi-account-multiple-plus </v-icon>
                      Crear cuenta
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    name: "",
    password: "",
    errors: [(value) => !!value || "Este campo es necesario"],
  }),
  methods: {
    validateAccount() {
      if (this.name === "Admin" && this.password === "123") {
        this.$store.dispatch("isManager", true);
        this.$router.push({ name: "Manager" }).catch(() => {
          console.log("Admin");
        });
      } else {
        this.$router.push({ name: "Main" }).catch(() => {
          console.log("Client");
        });
      }
    },
  },
};
</script>

<style lang="css"></style>
