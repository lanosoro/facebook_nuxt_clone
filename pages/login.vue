<template>
 <v-container class="hidden-sm-and-down  " fluid fill-height ma-0 pa-0 style="height:850px; background-color:#f0f2f5; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" >     
    <v-row style="padding-bottom:112px position:absolute; background-color:#f0f2f5; min-height: 900px;
   
   clear: both;">
      <v-col cols="12" md="4">
        <div class="facb" style="position: absolute;
    top: 20%;
    left: 20%;
    margin-top: -50px;
    margin-left: -50px;">
            <h1 style="color:#1877f2; font-size:54px;">facebook</h1>
             <p style="display:inline; font-size:27px;"> Facebook helps you connect and share <br> with the people in your life.</p>
        </div>

         <v-card elevation="8" width="396px" height="390.35px"   @submit.prevent="logged" class="mx-auto mt-10% mb" style="position: absolute;
    top: 20%;
    right: 20%;
    margin-top: -50px;
    margin-left: -50px;
    border-radius:10px;" >
      <v-card-text @submit.prevent="logged">
        <v-form @submit.prevent="logged">
          <v-text-field  single-line aria-required="red" style="color:#f0f2f5;"
            outlined label="Email adress or Phone number" v-model="email" />
          <v-text-field single-line
            outlined v-model="password" type="password" placeholder="Password"  />
          <v-btn primary large block type="submit" v-on:click="logged" style="background-color:#1877f2; color:#fff; text-transform: capitalize; font-size: 20px;
            line-height: 48px;" >
           log in 
          </v-btn>
          <v-spacer ></v-spacer>
          <v-spacer></v-spacer>
          <span class="psw" style="text-align: center;
    display: block;
    margin: 0 auto;
    padding:4%; text-decoration:none;"><a href="#">forgotten password?</a></span>
    <v-divider></v-divider>
   <v-flex column>
     <v-btn  primary large slot="activator"  style="background-color:#31b816;
              color:#fff;
              margin: 0;
              position: absolute;
              top: 85%;
              left: 50%;
              transform: translate(-50%, -50%); 
              text-transform: capitalize;
              ">
            Create New Acccount
          </v-btn>
   </v-flex>
        </v-form > 
        <p  style=" 
              min-width:360px;
              display:inline;
              color:#000;
              margin: 0;
              position: absolute;
              top: 110%;
              left: 59%;
              transform: translate(-50%, -50%); 
              
              ">
              <a style="color:black; font-family:SFProText-Semibold, Helvetica, Arial, sans-serif; cursor:pointer" color="black"><strong>Create a page</strong></a> for a celebrity, band or business.

        </p>
      </v-card-text>
      
    </v-card>
    

      </v-col>
      </v-row>    
     <v-row style="text-align:left; background:white; width:100%; height:212px; margin-bottom:0; position:absolute; top:900px;">  
    <v-col class="mr-3" id="footer_col">
        <v-footer style="margin-bottom:0; position:absolute; background-color:white; width:900px; left:20%; @media (min-width: 900px){
  
    max-width: 100%;
    position: relative;
    margin-left: 0%;
    float:left;
    align-content: center;

  } " class="justify-center">
      
            
        <ul id="horizontalist" class="justify-start ma-0" style="list-style-type:none; text-align:center; font-size:12px; ">
        <li><a href="">English</a>  </li> <li><a href="">kiswahili</a> </li> <li><a href=""></a> </li> <li><a href="#">Español
                      </a> </li> <li><a href="">Português (Brasil)
                </a> </li><li><a href="">Italiano
        </a>  </li> <li><a href="">Deutsch
        </a> </li> <li><a href=""></a>中文(简体)
              </li> <li><a href=""> Türkçe
        </a> </li> <li><a href=""></a>हिन्दी

              </li> <li><a href="">العربية
        </a> </li> <li><a href=""></a>中文(简体)
              </li>
         <a href=""><v-icon depressed
                    elevation="2"
                   
                    outlined
                   small
                    tile style="background-color:#f0f2f5; border-style: solid;  border-width: 1px; border-radius:3px; padding:0px 10px;  ">
                   mdi-plus 
                               </v-icon></a>
         
         
          
         
        </ul>

      <v-divider></v-divider>

         <ul class="b">
           <li><a href="">Signup</a></li>
           <li><a href="">Login</a></li>
           <li><a href="">Messenger</a></li>
           <li><a href="">Facebooklight</a></li>
           <li><a href="">watch</a></li>
           <li><a href="">people</a></li>
           <li><a href="">pages</a></li>
           <li><a href="">page category</a></li>
           <li><a href="">places</a></li>
           <li><a href="">games</a></li>
           <li><a href="">locations</a></li>
           <li><a href="">facebookPay</a></li>
           <li><a href="">marketplace</a></li>
           <li><a href="">groups</a></li>
           <li><a href="">Signup</a></li>
           <li><a href="">Login</a></li><br>
           <li><a href="">Messenger</a></li>
           <li><a href="">Facebooklight</a></li>
           <li><a href="">watch</a></li>
           <li><a href="">people</a></li>
           <li><a href="">pages</a></li>
           <li><a href="">page category</a></li>
           <li><a href="">places</a></li>
           <li><a href="">games</a></li>
           <li><a href="">locations</a></li>
           <li><a href="">facebookPay</a></li>
           <li><a href="">marketplace</a></li>
           <li><a href="">groups</a></li><br>
           <li><a href="">l</a></li><br>
              <div  class="#737373--text pl-0" style="padding: 30px 0px; font-size:12px; left:0; color:transparent;" >
       Facebook © {{ new Date().getFullYear() }}
      </div>

           </ul>   
  
      
      <div class="text-xs-left" >
         <div class="#737373--text pl-0" style="margin-bottom:30px; font-size:12px; left:0; color:#737373;" >
       Facebook © {{ new Date().getFullYear() }}
         </div>
      </div>
     
    
  
  
  
  </v-footer>
       </v-col>
     </v-row>
     
   

  </v-container>

</template>

<script>
import "firebase/firestore";
import "firebase/auth";
import firebase from 'firebase'
export default {
  data() {
    return {
      email: "",
      password: "",
      
    };
  },
  methods: {
    logged() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {

          console.log("firebase");
          this.$router.replace({path:'/Dashboard'});
          
          
        })
        
    }
  }
};

</script>

</script>

<style  scoped>
 

li{
  float: left;
  line-height: 30px;
  padding: 0px 10px;
  word-wrap: normal;
  list-style-type:none;

}
li a{
 
  color: #737373;
  text-decoration: none; /* no underline */
  margin-right: 0%;
 
}
ul{
  list-style-type:none;
  font-size: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}
ul.b{
  line-height: 200%;
  text-align: justify;
}
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
@media (min-width: 900px){
  .footer_content{
    max-width: 100%;
    position: relative;
    margin-left: 0%;
    float:left;
    align-content: center;

  }
  v-row{
    display: none;
  }
  .footer_col{
    display: none;
  }
}

</style>