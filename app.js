const submit = document.querySelector(".btn");
const celcius = document.querySelector(".celcius")
const kelvin = document.querySelector(".kelvin");
const fahrenheit = document.querySelector(".fahrenheit");
const weather_image = document.querySelector('.weather_image')
const conditionalImage={
  extraCold:'https://images.unsplash.com/photo-1518528751534-7bed4f1dfb31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  cold:'https://images.unsplash.com/photo-1579847641267-5445b760b991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  normalCold:'https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  normal:'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
  warm:'https://images.unsplash.com/photo-1534250441079-1b355ffbab76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  boiling:'https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  other:'https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
}

const updateImage = (Temperature)=>{
  if(Temperature < -10){
    weather_image.setAttribute('src',conditionalImage.extraCold)
  }else if(Temperature > -10 && Temperature <= 0){
    weather_image.setAttribute('src',conditionalImage.cold)
  }else if(Temperature > 0 && Temperature <= 15){
    weather_image.setAttribute('src',conditionalImage.normalCold)
  }else if(Temperature > 15 && Temperature <= 25){
    weather_image.setAttribute('src',conditionalImage.normal)
  }else if(Temperature > 25 && Temperature <= 35){
    weather_image.setAttribute('src',conditionalImage.warm)
  }else if(Temperature > 35){
    weather_image.setAttribute('src',conditionalImage.boiling)
  }else{
    weather_image.setAttribute('src',conditionalImage.other)
  }


}

let lastEdit ="celcius";

const lastEditUpdate = ()=>{
      celcius.addEventListener("keyup",()=>{
          lastEdit ="celcius"
      })

      fahrenheit.addEventListener("keyup",()=>{
        lastEdit ="fahrenheit"
    })

    kelvin.addEventListener("keyup",()=>{
        lastEdit ="kelvin"
    })
};

lastEditUpdate();

const convert = (last)=>{
     if(last === "celcius"){
         const fvalue = (celcius.value * 9/5) + 32 ;
         const kvalue = celcius.value/1 + 273 ;

         fahrenheit.value = Math.floor(fvalue)+' °F';
         kelvin.value = Math.floor(kvalue) +' °K';

     }else if(last === "fahrenheit"){
         const cvalue = (fahrenheit.value - 32) * 5/9;
         const kvalue = (fahrenheit.value - 32) * 5/9 + 273;

         celcius.value = Math.floor(cvalue)+' °C';
         kelvin.value = Math.floor(kvalue) +' °K';

     }else if(last === "kelvin"){
         const cvalue = kelvin.value - 273;
         const fvalue = (kelvin.value - 273) * 9/5 + 32 ;

         celcius.value =Math.floor(cvalue) +' °C';
         fahrenheit.value = Math.floor(fvalue)+' °F';
     }
}

submit.addEventListener("click",()=>{
    convert(lastEdit);

    let Temperature=0;

    if(lastEdit === "celcius"){
      Temperature =celcius.value;

    }else if(lastEdit === "fahrenheit"){

    Temperature = (fahrenheit.value - 32) * 5/9;
    }else if(lastEdit === "kelvin"){
      Temperature = kelvin.value - 273;
    }
updateImage(Temperature)
})
