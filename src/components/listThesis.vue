<template>
  <!-- Text -->
  <div style="display: flex; flex-wrap: wrap; margin-top:10px">
    <h1 style="text-align: left; margin-left: 20px; margin-right: 940px">
      List of Thesis
    </h1>
    <v-text-field
        v-model="search"
        label="Search by  ThesisID,  AuthorID,  Department,  Category, Title"
        single-line
        hide-details
        style="margin-left: 54%; width:600px; margin-bottom: 20px; position: absolute"
  >
  <v-img style="right:15px; width: 20px;position: absolute; height:20; top: 20px; cursor: pointer"  src="@/assets/search2.png"></v-img>
  </v-text-field>
  </div>
  <div class="file_wrappers" style="position: relative" >
    <table class="table table-hover" style="margin:auto">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
          >
            N
          </th>
          <th
            scope="col"
          >
            Thesis ID
          </th>
          <th
            scope="col"
          >
            Author ID
          </th>
          <th
            scope="col"
          >
            Department
          </th>
          <th
            scope="col"
          >
            Category
          </th>
          <th
            scope="col"
          >
            Title
          </th>
          <th
            scope="col"
          ></th>
        </tr>
      </thead>
      <tbody v-for="(thesis, i) in getThesis" v-bind:key="i" id="getForm">
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-top: 5px;
          "
        >
          {{ i+1 }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 4rem;
            padding-right: 3rem;
          "
        >
          {{ thesis.thesis_id }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 3rem;
            padding-right: 4rem;
          "
        >
          {{ thesis.student_id }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 4rem;
            padding-right: 4rem;
          "
        >
          {{ thesis.department }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            adding-bottom: 10px;
            padding-top: 5px;
            padding-left: 4rem;
            padding-right: 4rem;
          "
        >
          {{ thesis.category }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 4rem;
            padding-right: 4rem;
          "
        >
          {{ thesis.title }}
        </td>
        <td>
          <v-btn
            class="float-right"
            style="margin-left: 10px; font-size: 12px; border-radius: 20px; padding:7px"
            depressed
            color="red darken-1"
            @click = "delete2(thesis)"
          >
            Delete
          </v-btn>
          <v-btn
            class="float-right"
            style="margin: auto; font-size: 12px; border-radius: 20px; padding:7px"
            depressed
            color="teal lighten-1"
            @click = "viewDetail(thesis)"
          >
            Detail
          </v-btn>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "listThesis",
    data() {
      return {
        dialog: false,
        thesis_id: null,
        department: null,
        category: null,
        title: null,
        getThesis: null,
        searchTxt:null,
        search: null,
    }
  },
  watch:{
    search: function (){
      this.searchThesis(this.search)
    }
  },
  mounted() {
    this.getAllThesis(); 
  },
  methods: {
    async getAllThesis() {
      const url = "http://localhost:3000/admin/getAllThesis";
      const response = await axios.get(url, { withCredentials: true });
      this.getThesis = response.data;
      this.total = response.data.length;
    },
    async viewDetail(thesis){
      localStorage.setItem("thesis_id", thesis.thesis_id);
      this.$router.push("/detailPage")
    },
    async delete2(thesis) {
      axios
          .delete(
            "http://localhost:3000/admin/deleteThesis/"+thesis.thesis_id,
            { withCredentials: true }
          )
      alert ("Are you sure you want to delete this Thesis?")
      window.location.reload();
    },
    async searchThesis(thesis) {
      const url = "http://localhost:3000/admin/searchThesis/"+thesis;
      if (this.search != null) {
        const response = await axios.get(
          url,
          { withCredentials: true }
        );
        this.getThesis = response.data;
        this.total = response.data.length;
      }
    },
  },
}
</script>

<style scoped>
.header {
  background-color: #b0bec5;
}
.file_wrappers {
  margin-top: 30px;
  margin-left: 20px;
  padding: 20px;
  font-size: 18px;
  font-family: serif;
  box-shadow: 1px 1px 1px 1px gray;
  margin-bottom: 50px;
  margin-right: 20px;
  background-color: rgba(211, 211, 211, 0.1);
}
#getForm:hover {
  cursor: pointer;
  transition: margin-top 0.5s;
}
</style>
