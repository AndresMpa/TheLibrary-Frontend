<template>
  <div>
    <v-row>
      <v-col>
        <v-combobox
          :label="preferenceLabel"
          :items="preferences"
          v-model="genders"
          multiple
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :disabled="data.disabled"
              :input-value="data.selected"
              :key="JSON.stringify(data.item)"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                left
                class="accent white--text"
                v-text="data.item.slice(0, 1).toUpperCase()"
              ></v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Nombre de usuario"
          v-model="userName"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Dirección de envios"
          v-model="address"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Telefono de contacto"
          v-model="phone"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Correo electronico"
          v-model="mail"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="Foto de perfil"
          v-model="profile"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-switch color="primary" v-model="news">
          <template v-slot:label> Suscribirse al sistema de noticias </template>
        </v-switch>
      </v-col>
    </v-row>
    <div class="d-block mx-auto">
      <v-btn color="main" @click="updateUserInformation()" dark>
        Actualizar
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Preferences",
  data() {
    return {
      userName: "",
      address: "",
      phone: "",
      mail: "",
      news: false,
      genders: "",
      profile: "",
      genders: [],
      preferences: [
        "Programación",
        "Diseño",
        "Novelas",
        "Terror",
        "Ciencia ficción",
        "Romatico",
        "Cocina",
        "Historia",
      ],
    };
  },
  computed: {
    preferenceLabel() {
      return this.$route.name === "Profile"
        ? "Generos favoritos"
        : "Escoga algunos generos";
    },
  },
  methods: {
    updateUserInformation() {
      axios
        .post("/user/update", {
          name: this.name,
          lastName: this.lastName,
          userName: this.userName,
          password: this.password,
          address: this.address,
          phone: this.phone,
          mail: this.mail,
          news: this.news,
          preferences: this.genders,
          profile: this.profile,
        })
        .then((response) => response.data)
        .then((data) => {
          if (data.message === "La cuenta ha sido actualizada") {
            Swal.fire({
              title: "Cuenta actualizada",
              text: "Se ha actualizado la información de la tu cuenta",
              icon: "success",
              confirmButtonText: "Entendido",
            });
          }
        });
    },
    getUserInformation() {
      axios
        .post("/user/user-info", {
          username: this.$store.state.user.information.username,
        })
        .then((responde) => responde.data)
        .then((data) => {
          this.name = data.name;
          this.lastName = data.lastName;
          this.userName = data.userName;
          this.password = data.password;
          this.address = data.address;
          this.phone = data.phone;
          this.mail = data.mail;
          this.news = data.news;
          this.genders = data.preferences;
          this.profile = data.profile;
        });
    },
  },
  created() {
    this.getUserInformation();
  },
};
</script>

<style lang="css" scoped></style>
