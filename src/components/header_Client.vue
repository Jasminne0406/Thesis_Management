<template>
    <div class="header">
        <v-title style="font-family:cursive;color: white; margin-left: 40px ; font-size: 16px">
            <v-img style="left:44px; width: 40px;position: absolute; height:40px"  src="https://cdn-icons-png.flaticon.com/512/46/46271.png"></v-img>
             <v-subTitle style="position: absolute; top:35px; color: black">Thesis</v-subTitle>
        </v-title>
        <!-- <v-img style="right:40px; width: 20px;position: absolute; height:20; top: 20px; cursor: pointer"  src="@/assets/search2.png"></v-img> -->
        <!-- <search_bar style="position: absolute;"></search_bar> -->
        <div class="text" style="margin:auto;position:relative; color: black">
            <v-row style="top:10px; ">
                <router-link  style="text-decoration: none" to="/">
                    <v-colume id="header-menu">Home</v-colume>
                </router-link>
                <router-link style="text-decoration: none" to="/client/thesisPage">
                    <v-colume id="header-menu">Thesis</v-colume>
                </router-link>
                <router-link style="text-decoration: none" to="/aboutusPage">
                    <v-colume id="header-menu">About Us</v-colume>
                </router-link>
                <router-link style="text-decoration: none" to="/contactPage">
                    <v-colume id="header-menu">Contact</v-colume>
                </router-link>
            </v-row>
        </div>
        <v-img @click=login style="cursor: pointer; right:20px;top:10px; width: 50px;position: absolute; height:30px"  src="@/assets/enter.png"></v-img>
    </div>  
</template>

<script>
// import search_bar from './search_bar.vue';
export default {
    name: "header_Client",
    methods:{
            async login(){
                this.$router.push("/login")
            }
        },
    }
</script>
<style>
    #header-menu{
        padding-left:50px;
        padding-right:50px;
        font-size:20px; 
        cursor: pointer;
        font-family: serif;
        color: white
    }
    #header-menu:hover{
         border-bottom: none;
         text-decoration: underline;
         color: darkblue;
    }
    .text{
        font-size:16px;
        font-family: serif;
    }
    .header{
        width: 100%;
        height: 60px;
        margin-top:0px;
        box-shadow: 3px 5px 10px grey;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        background-color: teal
    }
    .icon{
        width: 30px;
        height: 30px;
    }
    #log-out{
        right:110px;
        top:5px;
        position: absolute;
    }
</style>
