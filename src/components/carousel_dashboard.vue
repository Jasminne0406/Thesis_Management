<template>
    <div>
      <v-carousel :show-arrows="true"
         cycle
      >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      class="pic"
    >
    </v-carousel-item>
  </v-carousel>
    </div>
</template>
<script>
import GEE from "../assets/b1.jpg";
import GGG from "../assets/b2.jpg";
import GIC from "../assets/b3.jpg";
import GIM from "../assets/book2.jpg";
  export default {
    data () {
      return {
        items: [
          {
            src: GEE
          },
          {
            src: GIC
          },
          {
            src: GIM
          }, {
            src: GGG
          },
        ],
      }
    },
  }
</script>
<style>
.pic{
  width: 100%; 
  height:100px; 
  background:url(https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg);
  background-repeat: no-repeat;
  background-size:100% 90%;
}
</style>