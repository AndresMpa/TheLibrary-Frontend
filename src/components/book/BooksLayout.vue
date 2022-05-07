<template>
  <article>
    <ShoppingBagLayout />
    <LastBook />
    <MostSold />
    <Shelf :stock="stock" />
    <Footer />
  </article>
</template>

<script>
import ShoppingBagLayout from "../util/ShoppingBagLayout.vue";
import Footer from "../util/Footer.vue";
import LastBook from "./LastBook.vue";
import MostSold from "./MostSold.vue";
import Shelf from "./Shelf.vue";
export default {
  name: "BooksLayout",
  components: { Shelf, LastBook, MostSold, ShoppingBagLayout, Footer },
  data() {
    return {
      stock: [
        [
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
        ],
        [
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
          {
            rating: 5,
            votes: "5078",
            title: "El Maravilloso Mago de Oz",
            author: "L. Frank Baum",
            asset: "https://picsum.photos/id/10/500/300",
            summary:
              "El maravilloso mago de Oz es un libro de literatura infantil escrito por Lyman Frank Baum e ilustrado por W. W. Denslow. Fue publicado inicialmente por la George M. Hill Company de Chicago en 1900. Desde entonces, El mago de Oz ha sido uno de los libros más editados tanto en Estados Unidos como en Europa",
          },
        ],
      ],
    };
  },
};
</script>

<style lang="css" scoped></style>
