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
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            :rules="errors"
                            v-model="name"
                            label="Nombre"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="lastName"
                            label="Apellido"
                            :rules="errors"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Nombre de usuario"
                            v-model="userName"
                            :rules="errors"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Dirección de envios"
                            v-model="address"
                            :rules="errors"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Telefono de contacto"
                            v-model="phone"
                            :rules="errors"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Correo electronico"
                            v-model="email"
                            :rules="errors"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            counter
                            v-model="password"
                            label="Ingrese su contraseña"
                            :rules="[rules.required, rules.min]"
                            hint="Debe tener al menos 8 caracteres"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            counter
                            v-model="rePassword"
                            label="Repita su contraseña"
                            :rules="[rules.required, rules.min]"
                            hint="Debe tener al menos 8 caracteres"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>

                    <v-switch color="primary" v-model="news">
                      <template v-slot:label>
                        Suscribirse al sistema de noticias
                      </template>
                    </v-switch>
                  </v-card-text>

                  <v-card-actions class="mt-5">
                    <v-btn small @click="createAccount()">
                      <v-icon> mdi-account-plus </v-icon>
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
export default {
  name: "CreateAccount",
  data: () => ({
    name: "",
    lastName: "",
    userName: "",
    address: "",
    phone: "",
    email: "",
    news: false,
    password: "",
    rePassword: "",
    showPassword: false,
    errors: [(value) => !!value || "Este campo es necesario"],
    rules: {
      required: (value) => !!value || "Este campo es necesario",
      min: (v) =>
        v.length >= 8 || "La contraseña debe tener al menos 8 caracteres",
      passwordMatch: () => {
        if (this.password !== this.rePassword) {
          return `Las contraseña no coinciden`;
        }
      },
    },
  }),
  methods: {
    sendLog() {
      this.$router.push({ name: "Login" }).catch(() => {
        console.log("Login");
      });
    },
    sendMain() {
      this.$router.push({ name: "Main" }).catch(() => {
        console.log("Client");
      });
    },
    createAccount() {
      data = {
        name: this.name,
        lastName: this.lastName,
        userName: this.userName,
        address: this.address,
        phone: this.phone,
        email: this.email,
        news: this.news,
        password: this.password,
      };
    },
  },
};
</script>

<style lang="css"></style>
