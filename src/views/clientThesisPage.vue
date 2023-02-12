<template>
  <header_Client>
  </header_Client>
  <clientListThesis></clientListThesis>
</template>
<script>
import axios from "axios";
import header_Client from "@/components/header_Client.vue";
import clientListThesis from "@/components/clientListThesis.vue";
export default {
  name: "thesisClientPage",
  components: {
    header_Client,
    clientListThesis
  },
  data() {
    return {
      student_id: null,
      student_name: null,
      student_email: null,
      department: null,
      thesis_id: null,
      title: null,
      category: null,
      status: null,
      intern_year: null,
      uploadAt: null,
      }
   },
  methods: {
    upload() {
      const fileSelector = document.getElementById("addDocument");
      const checkbox = document.getElementById("checkbox");
      if(checkbox.checked){
        this.status = "recommend"
      }else{
        this.status = null
      }
      axios
        .post(
          "http://localhost:3000/admin/uploadThesis",
          {
            student_id: this.student_id,
            student_name: this.student_name,
            student_email: this.student_email,
            department: this.department,
            thesis_id: this.thesis_id,
            title: this.title,
            category: this.category,
            status: this.status,
            intern_year: this.intern_year,
            uploadAt: new Date().toUTCString(),
            contentType: fileSelector.files[0].type,
            name: fileSelector.files[0].name,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
        });
      this.toggleModal();
      alert("Upload successfully!");
      window.location.reload();
    },
  },
};
</script>

