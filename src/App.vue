<template>
<div id="container">
  
  <img height="100" alt="Converter Logo" src="./assets/logo.png">

  <div><input id="fromField" type="text" v-model="fromValue" placeholder="enter filament weight"> g</div>
  <div><input type="text" v-model="fromUnit" placeholder="enter filament material"></div>
  <div>to</div>
  <div><input type="text" v-model="toUnit" placeholder="enter target material"></div>

  <div v-if="isFinite(meters)"><p id="result">{{fromValue}}g of 1.75mm <span style="text-transform: uppercase"> {{fromUnit}}</span> filament measures</p></div>
  <div v-if="isFinite(meters)"><p id="meters"><strong>{{meters}}m</strong></p></div>
  <div v-if="!isFinite(meters)"><p id="metersx">{{meters}}</p></div>
  <div v-if="isFinite(result)"><p id="result">that corresponds to</p></div>
  <div v-if="isFinite(result)"><p id="result"><strong>{{result}}g</strong> of <strong style="text-transform: uppercase">{{toUnit}}</strong></p></div>
  <div v-if="!isFinite(result)"><p id="resultx">{{result}}</p></div>
</div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  props: {
    physicalQuantity: Object   // props is basically just data passed from a parent to a child component. App.vue is our parent here and it passes an Object to this variable
  },
  data: function(){            // the data available to this component (Converter.vue). It must be a function returning an object (to ensure that each component has its own data)
       return{
         fromValue:"",
         fromUnit:"",
         toUnit:""
       }
  },
  // components: {
  //   HelloWorld
  // },
  methods:{
        
  },

  computed: {
      meters: function(){
        let value = parseFloat(this.fromValue);
        if(!(isFinite(value))){
          return "Result will show here after entering values"
        }
        switch(this.fromUnit.toUpperCase()){
          case("PLA"):    return Math.round(100*value * 0.335283)/100;
          case("ABS"):    return Math.round(100*value * 0.399761)/100;
          case("ASA"):    return Math.round(100*value * 0.388552)/100;
          case("PET"):
          case("PETG"):   return Math.round(100*value * 0.327363)/100;
          case("NYLON"):  return Math.round(100*value * 0.384955)/100;
          case("POLYCARBONATE"):
          case("PC"):     return Math.round(100*value * 0.346459)/100;
          case("HIPS"):   return Math.round(100*value * 0.388552)/100;
          case("PVA"):    return Math.round(100*value * 0.349371)/100;
          case("TPU"):    return Math.round(100*value * 0.346459)/100;
          case("PMMA"):   return Math.round(100*value * 0.352331)/100;
          case("COPPER-FILL"):
          case("COPPERFILL"):    return Math.round(100*value * 0.106603)/100;
          case(""):
            return "Please enter base material"
          default:
            console.log("First Material not Available")
            return "Selected base material not available yet, check spelling or suggest material";
              }
      },

      result: function(){
        let value = parseFloat(this.meters);
        if(!(isFinite(value))){
          return "..."
        }
        switch(this.toUnit.toUpperCase()){
          case("PLA"):    return Math.round(100*value / 0.335283)/100;
          case("ABS"):    return Math.round(100*value / 0.399761)/100;
          case("ASA"):    return Math.round(100*value / 0.388552)/100;
          case("PET"):
          case("PETG"):   return Math.round(100*value / 0.327363)/100;
          case("NYLON"):  return Math.round(100*value / 0.384955)/100;
          case("POLYCARBONATE"):
          case("PC"):     return Math.round(100*value / 0.346459)/100;
          case("HIPS"):   return Math.round(100*value / 0.388552)/100;
          case("PVA"):    return Math.round(100*value / 0.349371)/100;
          case("TPU"):    return Math.round(100*value / 0.346459)/100;
          case("PMMA"):   return Math.round(100*value / 0.352331)/100;
          case("COPPER-FILL"):
          case("COPPERFILL"):    return Math.round(100*value / 0.106603)/100;
          case(""):
            return "Please enter target material"
          default:
            return "Target material not available yet"
              }
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

 input{
    padding:5px;
    border: 1px solid rgb(0, 0, 0);
    border-radius:10px;
    width:180px;
    font-size:1em;
 }

 #fromField{
    padding:5px;
    border: 1px solid rgb(0, 0, 0);
    border-radius:10px;
    width:166px;
    font-size:1em;
 }

 img{
    padding:30px;
 }
</style>
