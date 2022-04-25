<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, index) in items"
      :color="item.status"
      :key="index"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${item.status}--text`"
          v-text="item.date"
        ></span>
      </template>
      <div class="py-4">
        <p :class="`${item.status}--text`">
          {{ item.title }}
        </p>
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
  name: "Scroller",
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
