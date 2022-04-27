<template>
  <v-row class="shelf">
    <v-col
      v-for="(book, index) in stock"
      class="d-flex child-flex"
      :key="index"
      sm="12"
      md="3"
    >
      <Book :information="book"></Book>
    </v-col>
  </v-row>
</template>

<script>
import Book from "./Book.vue";
export default {
  name: "Shelf",
  components: { Book },
  data() {
    return {
      stock: [
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example.jpg?token=GHSAT0AAAAAABQ7JU4IIXJQYZIOIFINHCFWYR2V4XQ",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example_2.jpg?token=GHSAT0AAAAAABQ7JU4I5T476CDMSYY6WWVGYR2V43Q",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example.jpg?token=GHSAT0AAAAAABQ7JU4IIXJQYZIOIFINHCFWYR2V4XQ",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example_2.jpg?token=GHSAT0AAAAAABQ7JU4I5T476CDMSYY6WWVGYR2V43Q",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example.jpg?token=GHSAT0AAAAAABQ7JU4IIXJQYZIOIFINHCFWYR2V4XQ",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example_2.jpg?token=GHSAT0AAAAAABQ7JU4I5T476CDMSYY6WWVGYR2V43Q",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example.jpg?token=GHSAT0AAAAAABQ7JU4IIXJQYZIOIFINHCFWYR2V4XQ",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example_2.jpg?token=GHSAT0AAAAAABQ7JU4I5T476CDMSYY6WWVGYR2V43Q",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example.jpg?token=GHSAT0AAAAAABQ7JU4IIXJQYZIOIFINHCFWYR2V4XQ",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example_2.jpg?token=GHSAT0AAAAAABQ7JU4I5T476CDMSYY6WWVGYR2V43Q",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
        {
          rating: 4.5,
          votes: "450",
          title: "El príncipe",
          author: "Nicolás Maquiavelo",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example.jpg?token=GHSAT0AAAAAABQ7JU4IIXJQYZIOIFINHCFWYR2V4XQ",
          summary:
            "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
        },
        {
          rating: 5,
          votes: "5078",
          title: "El Maravilloso Mago de Oz",
          author: "L. Frank Baum",
          asset:
            "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/example_2.jpg?token=GHSAT0AAAAAABQ7JU4I5T476CDMSYY6WWVGYR2V43Q",
          summary:
            "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.shelf {
  margin: 0% auto;
  width: 98%;
}
</style>
