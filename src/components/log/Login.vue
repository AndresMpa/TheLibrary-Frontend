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
                    <v-btn small @click="logUser()">
                      <v-icon> mdi-account </v-icon>
                      Ingresar
                    </v-btn>

                    <v-btn small @click="sendRegister()">
                      <v-icon> mdi-account-multiple-plus </v-icon>
                      Crear cuenta
                    </v-btn>

                    <v-btn small color="red" @click="sendMain()">
                      <v-icon> mdi-close </v-icon>
                      Cancelar
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
import axios from "axios";
export default {
  name: "Login",
  data: () => ({
    name: "",
    password: "",
    errors: [(value) => !!value || "Este campo es necesario"],
  }),
  methods: {
    sendRegister() {
      this.$router.push({ name: "Register" }).catch(() => {
        console.log("Register");
      });
    },
    sendMain() {
      this.$router.push({ name: "Main" }).catch(() => {
        console.log("Client");
      });
    },
    logUser() {
      let logData = {
        name: this.name,
        password: this.password,
      };
      axios
        .post("/user/signin", logData)
        .then((response) => response.data)
        .then((data) => {
          this.$store.dispatch("setUser", data);
        });
    },
  },
};
</script>

<style lang="css"></style>
