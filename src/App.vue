<template>
<div id="container">
  <img alt="Converter Logo" src="./assets/logo.png">
  <HelloWorld msg="Converter"/>
  <div><input type="text" v-model="fromValue" placeholder="enter amount"></div>
  <div><input type="text" v-model="fromUnit" placeholder="enter current unit"></div>
  <div>to</div>
  <div><input type="text" v-model="toUnit" placeholder="enter wanted unit"></div>

  <div><p id="result">{{fromValue}}{{fromUnit}} equals {{result}}{{toUnit}} </p></div>
</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  props: {
    physicalQuantity: Object   // props is basically just data passed from a parent to a child component. App.vue is our parent here and it passes an Object to this variable
  },
  data: function(){            // the data available to this component (Converter.vue). It must be a function returning an object (to ensure that each component has its own data)
       return{
         fromValue:1,
         fromUnit:"",
         toUnit:""
       }
  },
  components: {
    HelloWorld
  },
  methods:{
        toSeconds: function(value,unit){
            switch(unit){
              case("s"):
                  return value;
              case("min"):
                  return value*60;
              case("h"):
                   return value*60*60;
              default:
                   console.log("toMinutes conversion failed - unit incorrect")
                   return value;
            }
        }
  },

  computed: {
      result: function(){
            let value = parseFloat(this.fromValue);  // whatever the user types into the <input> Element, it turns out to be a string. We have to convert it to a number(float)
            if(isFinite(value)){
                        let valueInSeconds = this.toSeconds(value,this.fromUnit);  // we use "minutes" as an intermediary unit
                        switch(this.toUnit){
                        case("s"):
                            return parseFloat((valueInSeconds).toFixed(5));   // limit to 5 decimals and parseFloat() it to remove redundant 0s
                        case("min"):
                            return parseFloat((valueInSeconds/60).toFixed(5));
                        case("h"):
                            return parseFloat((valueInSeconds/60/60).toFixed(5));
                        default:
                            console.log("Error while converting time - resultUnit not detected!");
                            return "...";
                         }
              
            }      
            return "...";  // if the user didn't type in a number
      }
  }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 12px;
}
</style>
