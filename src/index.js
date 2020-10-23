module.exports = function toReadable (number) {
   let single = new Map([["0","zero"], 
    ["1","one"], 
    ["2","two"], 
    ["3","three"], 
    ["4","four"], 
    ["5","five"], 
    ["6","six"], 
    ["7","seven"], 
    ["8","eight"], 
    ["9","nine"]]),
composite = new Map([
      ["10","ten"], 
       ["11","eleven"], 
       ["12","twelve"], 
       ["13","thirteen"],
       ["14","fourteen"], 
       ["15","fifteen"], 
       ["16","sixteen"], 
       ["17","seventeen"], 
       ["18","eighteen"], 
       ["19","nineteen"]
      ]),
tenths = new Map([["10","ten"], 
            ["20","twenty"], 
            ["30","thirty"], 
            ["40","forty"], 
            ["50","fifty"], 
            ["60","sixty"], 
            ["70","seventy"], 
            ["80","eighty"], 
            ["90","ninety"]
          ]);

let str = number.toString();

if(number<=9){
for (let key of single.keys()) {
if(number == key){
return single.get(key);
}
}
}else if(str.length == 2){
let word = '';
if(number>=10 && number<20){
for (let key of composite.keys()) {
 if(number == key){
   return composite.get(key);
 }
}
}else if(number>=20 && number<=99){
if(~str.indexOf('0')){
    for (let key of tenths.keys()) {
   if(number == key){
  return tenths.get(key);
}
}
}else{
   for(let [key, value] of tenths){
    let w = str[0]+'0';
    if(w == key){
     word += `${value} `;
       }
}
for(let [key, value] of single){
  let w = str[1];
  if(w == key){
   word += `${value}`;
   return word;
     }
}
}   
}
}else if(number>=100 && number<=999){
let word = '';
let arr = str.split(''),
count = 0,
double = str[1]+str[2];
arr.forEach(function(e){
if(e == '0'){
count=count+1;
}
});
if(count==2){
for(let [key, value] of single){
let w = str[0];
if(w == key){
 word += `${value} hundred`;
 return word;
   }
}
}else if(count == 1){
    if (str[1]== '0'){
        for(let [key, value] of single){
            let w = str[0];
            if(w == key){
            word += `${value} hundred `;
            }
            }
            for(let [key, value] of single){
                let w = str[2];
                if(w == key){
                word += `${value}`;
                return word;
                }
                }

    }else{
        for(let [key, value] of single){
let w = str[0];
if(w == key){
word += `${value} hundred `;
}
}
for(let [key, value] of tenths){
let w = str[1]+'0';
if(w == key){
word += `${value}`;
return word;
}
}
}
}else if(count==0){
for(let [key, value] of single){
let w = str[0];
if(w == key){
word += `${value} hundred `;
}
}
    }


if(+double>=10 && +double<=19){
for(let [key, value] of composite){
if(double == key){
word += `${value}`;
return word;
}
}
}else{
for(let [key, value] of tenths){
let w = str[1]+'0';
if(w == key){
word += `${value} `;
}
}
for(let [key, value] of single){
let w = str[2];
if(w == key){
word += `${value}`;
return word;
}
}
}
}
}

