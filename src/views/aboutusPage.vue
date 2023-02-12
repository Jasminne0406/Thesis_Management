<template>
  <header_navbar></header_navbar>
  <v-content>
    <div class="img">
    </div>
    <div class="about">
      <h1 class="pt-10 mt-2 text-teal">About Us</h1>
      <p class="mt-2 justify-space-between text-grey">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non at dolorum libero, voluptatum illum molestiae possimus ab praesentium accusamus ipsa eligendi neque natus ea, dolorem laboriosam. Temporibus, natus sed?
        Tempora nesciunt nemo commodi vero, dolores natus facilis corrupti ad eum cumque aspernatur saepe, debitis assumenda perferendis error eos, et earum quasi veritatis mollitia incidunt harum consectetur! Dolores, perferendis at!
        Rerum odio minima rem error, libero optio est molestiae? Molestiae et quibusdam ipsa officia fugit ipsam, quam officiis distinctio vel doloribus fuga maxime. Libero eligendi earum molestiae beatae natus. Ea?
      </p>
    </div>
  </v-content>
</template>

<script>
import header_navbar from "@/components/header_navbar.vue";
export default {
  name: "aboutusPage",
  components: {
    header_navbar
  },
};
</script>
<style>
.img {
  width: 100%;
  height: 400px;
  margin-top:-10px;
  background: url(https://images.unsplash.com/photo-1543248939-4296e1fea89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80);
  background-repeat: no-repeat;
  background-size: auto;
}
.about {
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>