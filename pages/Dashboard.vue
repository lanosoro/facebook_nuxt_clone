<template>
  <v-app >
    <v-app-bar
      app
      color="white"
      flat
      elevation="5"
    >

      <v-avatar style="position:absolute; margin-right:150px;"
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      
       
      
      <v-avatar
        class="hidden-sm-and-down"
        size="32"
      >
      <v-img
      
      :width="width"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png"
    ></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
      <v-icon color="grey lighten-1" size="30">
        mdi-home-outline
      </v-icon>
      <v-icon  color="grey lighten-1" size="30" class="ml-16">
        mdi-flag-outline
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-16">
        mdi-cards-variant
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-16">
        mdi-television
      </v-icon>
       
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
     
        <v-avatar
        class="hidden-sm-and-down  ml-42"
        color="grey lighten-1 shrink"
        size="32"
      >      
          <v-img
          :height="height"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">

      </v-img>
         </v-avatar>
       
          <p class="mt-4 pa-3" style="color:black;">Jon Dow</p>

        
        
     
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-plus
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-facebook-messenger
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-bell
      </v-icon>
      
      </v-avatar>
       <v-avatar

        class="hidden-sm-and-down pa-4 ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-menu-down
      </v-icon>
      
      </v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="45vh"
              rounded="sm"
              color="white"
            >
             <v-layout column color="black"> 
                <v-sheet
              
              min-height="37vh"
              color="#fff"
              flat
            >
              <v-img
      :aspect-ratio="16/7"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
     <v-layout row>
        <v-avatar
              class="mt-n15 ml-6"
              size="188"
              color="white"
              style="border:5px solid #fff;"
            >
                    <v-img
      
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
              
            </v-avatar>
           <v-flex> <h5  style="color:black" class="pl-12 pt-0 mt-8 ">John Dow</h5>
           <v-icon class="pl-16 pt-n3 ml-16 mt-2" color="blue lighten-2">
              mdi-check-circle
            </v-icon></v-flex>
            
     </v-layout>
            </v-sheet>
            <v-tabs 
       
        background-color="white accent-4"
        class="ml-n0 mt-4"
        color="#3b5998 lighten-2"
        style="color:blue;"
       
      >
      <v-layout row>
          <v-tab
          style="color:blue;"
           color="#3b5998 lighten-2"
          class="ml-"
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
        
      </v-layout>

      </v-tabs>
             </v-layout>
            </v-sheet>
          
          <v-row>
            <v-col cols="6"
          sm="5">
            <v-sheet
              class="mt-n0"
              min-height="400"
              color="white"
            >
          <v-layout row>
                <v-avatar
        class="hidden-sm-and-down"
        color="green lighten-1 shrink mt-3 ml-4"
        size="32"
      > <v-icon>
        mdi-account
        </v-icon></v-avatar>
      <h4 style="color:black;" class="mt-4 ml-6">info</h4>
          </v-layout>
          <v-layout column>
              <v-flex>
              <v-icon color="grey lighten-1" class="mt-8 ml-2">
                mdi-information
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eum eaque tempora sint</p>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-0 ml-2">
                mdi-thumb-up
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6">120,000 people liked</p>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-0 ml-2">
                mdi-checkbox-multiple-marked
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6">1,320,000 people follow</p>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-0 ml-2">
                mdi-map-marker
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6">330,000 people checkdin here</p>
            </v-flex>
            <v-flex>
              <v-icon color="grey lighten-1" class="mt-1 ml-2">
                mdi-link
              </v-icon>
              <a href="" class="mt-n4" style="text-decoration:none;">https://jondow.com</a>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-2 ml-2">
                mdi-facebook-messenger
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6"><a>send message</a></p>
            </v-flex>

          </v-layout>
            </v-sheet>
             <v-sheet
              class="mt-3"
              min-height="250"
              color="white"
            >
          <v-layout row>
                <v-avatar
        class="hidden-sm-and-down"
        color="pink darken-1 shrink mt-3 ml-4"
        size="32"
      >
      <v-icon>
        mdi-image
      </v-icon>
      </v-avatar>
      <h4 class="mt-4 ml-6" style="color:black;">Photos</h4>
          </v-layout>
            </v-sheet>
               <v-sheet
              class="mt-3"
              min-height="250"
              color="white"
            >
              <v-avatar
        class="hidden-sm-and-down"
        color="deep-purple darken-1 shrink mt-3 ml-3"
        size="32"
      >
      <v-icon>
        mdi-earth
        </v-icon>
      </v-avatar>
            </v-sheet>

             </v-col>
              <v-col cols="6"
          sm="7">
            <v-sheet
            
              min-height="150"
              color="white"
            >
              
            </v-sheet>
              <v-sheet
              class="mt-3"
              min-height="550"
              color="white"
            >
              
            </v-sheet>
          
            <v-sheet
              class="mt-3"
              min-height="250"
              color="white"
            >
            
            </v-sheet>
          
          
             </v-col>
          </v-row>
         <v-row>
         
          </v-row>
           <v-row>
             <v-col cols="6"
          sm="5">
         
          </v-col>
          
             
           </v-row>
          </v-col>
         
          <v-col
            cols="12"
            sm="2"
          >
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Photos',
        'About',
        'Instagram',
        'More'
      ],
    }),
  }
</script>
<style  scoped>
.profpic{
 height: 80px;
 width: 80px;
 background: white;
}
img{
  width: 100%;
  height: auto;
}
</style>