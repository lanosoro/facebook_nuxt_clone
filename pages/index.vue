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

         <v-card elevation="8" width="396px" height="390.35px"  class="mx-auto mt-10% mb" style="position: absolute;
    top: 20%;
    right: 20%;
    margin-top: -50px;
    margin-left: -50px;
    border-radius:10px;" >
      <v-card-text>
        <v-form>
          <v-text-field  single-line aria-required="red" style="color:#f0f2f5;"
            outlined label="Email adress or Phone number" />
          <v-text-field single-line
            outlined label="Password" type="password"  />
          <v-btn primary large block  style="background-color:#1877f2; color:#fff; text-transform: capitalize; font-size: 20px;
line-height: 48px;" >
           <strong>log in</strong> 
          </v-btn>
          <v-spacer ></v-spacer>
          <v-spacer></v-spacer>
          <span class="psw" style="text-align: center;
    display: block;
    margin: 0 auto;
    padding:4%; text-decoration:none;"><a href="#">forgotten password?</a></span>
    <v-divider></v-divider>
   <v-flex column>
     <popup/>
   </v-flex>
        </v-form>
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
    <v-col id="footer_col">
        <v-footer style="margin-bottom:0; position:absolute; background-color:white; width:900px; left:25%; @media (min-width: 900px){
  
    max-width: 100%;
    position: relative;
    margin-left: 0%;
    float:left;
    align-content: center;

  } " class="justify-center">
      
        <v-card flat tile class="white lighten-1 #ccd0d5--text text-center pt-0" id="footer_content">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
       
      <v-card-text class="#ccd0d5--text pt-0 " style="width:100%; ; " >
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
      </v-card-text>
      <v-divider></v-divider>

       <p style="text-align:center;">  <ul class="b">
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
              <v-card-text class="#737373--text pl-0" style="padding: 30px 0px; font-size:12px; left:0; color:transparent;" >
       Facebook © {{ new Date().getFullYear() }}
      </v-card-text>

           </ul>   </p>
  
      
      <div class="text-xs-left" >
         <v-card-text class="#737373--text pl-0" style="margin-bottom:30px; font-size:12px; left:0; color:#737373;" >
       Facebook © {{ new Date().getFullYear() }}
      </v-card-text>
      </div>
     
    </v-card>
  
  
  
  </v-footer>
       </v-col>
     </v-row>
     <div id="example">{{ message }}</div>
   

  </v-container>

</template>

<script>
import popup from '../components/popup.vue'

export default {
  components: { popup },
    name: 'loginweb',

    data: () => ({
      dialogue:false
     
    
    }),
  }

</script>
<script>
export default {
 
}
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