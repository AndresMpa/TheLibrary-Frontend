<template>
  <v-footer dark padless>
    <v-card flat tile class="alter lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="ref in references"
          class="mx-4 white--text"
          :key="ref"
          icon
        >
          <a :href="ref.link">
            <v-icon size="24px">
              {{ ref.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Todos los derechos del material contenido es propiedad de los autores,
        la Universidad Tecnologica de Pereira no tiene relación con este
        proyecto más allá de ser la entiedad que ha impartido la materia a la
        cual ha sido presentada este software, toda relación ha sido tratada de
        manera discreta por los estudiantes y el docente que ha solicitado esta
        u otras entregas
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>
          <a href="https://github.com/Dreamland-Code"> Dreamland Code </a>
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    references: [
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/utpereira/",
      },
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/utpereira",
      },

      {
        icon: "mdi-web-plus",
        link: "https://www.utp.edu.co/",
      },
    ],
  }),
};
</script>
