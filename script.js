//solving problems using array function on the rest countries data
 let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    let result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

//b-Get all the countrieswith population of less than 2lakh using filter function
 let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    let result1=JSON.parse(request1.response);
      const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}

//c-Print the following detais name,capital,flag using forEach function.
 let request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
request2.onload=function(){
    let result2=JSON.parse(request2.response);
       result2.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}

//d-Print the total population of countriesusing reduce function?
 let request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v2/all");
request3.send();
request3.onload=function(){
    let result3=JSON.parse(request3.response);
      let total = result3.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}

//e-Print the country that uses US dollars as currency.
 let request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v2/all");
request4.send();
request4.onload=function(){
    let result4=JSON.parse(request.response);
    let currency = result4.filter((element) => {
     for(let key in element.currencies){
    if(element.currencies[key].code === "USD"){
  return element;
        }
     }
   })
 console.log(currency);
    }
