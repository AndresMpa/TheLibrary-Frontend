<template>
  <v-timeline align-top dense>
    <v-timeline-item
      v-for="(item, index) in items"
      :color="item.status"
      :key="index"
      small
    >
      <div>
        <span :class="`headline ${item.status}--text`">
          {{ item.title }}
        </span>
        <p
          :class="`font-weight-bold ${item.status}--text`"
          v-text="item.date"
        ></p>
      </div>
      <div class="py-4">
        <p class="headline font-weight-light mb-4">
          {{ item.author }}
        </p>
        <p class="subtitle-1 font-weight-light">
          Pagado mediante: {{ item.method }}
        </p>
        <p class="subtitle-2 font-weight-light">Entrega: {{ item.delivery }}</p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "HistoryLine",
  data: () => ({
    items: [
      {
        date: "27/Mar/2002",
        status: "green",
        title: "El colonel no tiene quien le escriba",
        author: "Gabriel Garcia Marquez",
        method: "Master Card",
        delivery: "Completa",
      },
      {
        date: "8/Octubre/2008",
        status: "red",
        title: "Como torturar estudiantes",
        author: "Andrés Felipe Gamboa",
        method: "Visa",
        delivery: "Regresado",
      },
      {
        date: "2/Abril/2012",
        status: "blue",
        title: "100 años de soledad",
        author: "Gabriel Garcia Marquez",
        method: "Master Card",
        delivery: "En reparto",
      },
      {
        date: "27/Mar/2013",
        status: "green",
        title: "El colonel no tiene quien le escriba, edición premium",
        author: "Gabriel Garcia Marquez",
        method: "Master Card",
        delivery: "Completa",
      },
    ],
  }),
};
</script>

<style lang="css" scope></style>
