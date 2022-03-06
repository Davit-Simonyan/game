const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57';


const IDES = [
   [['citiName1'],['value1']],
   [['citiName2'],['value2']],
   [['citiName3'],['value3']],
   [['citiName4'],['value4']],
   [['citiName5'],['value5']],
]

const cities = [
    'London',
    'New York',
    'Tokyo',
    'Paris',
    'Singapore',
    'Amsterdam',
    'Berlin',
    'Mexico'
];
let i = 0;
let z = 0;
goo()
function goo() {
let citi = Math.floor(Math.random()*cities.length);
let CITI_NAME = cities[citi];
document.getElementById('countriName').innerHTML= CITI_NAME;
 
 getCountriName = ()=>{
        fetch(`${API_URL}/weather?q=${CITI_NAME}&appid=${API_KEY}&units=metric`)
        .then(resp =>{
            return resp.json()
        })
        .then(result=>{
            x(result.main.temp);
        })

const x = (data)=>{
   
    const num = document.getElementById('input').value;
    if(num > data-3 && num < data + 3){
       result(IDES[i][0],CITI_NAME);
       result(IDES[i][1],`Your value is ${num} value ${data} its true`) ;
        i++
        z++
        if(z > 2){
            document.getElementById('result').innerHTML='you win';
        }
        }
        else{
            result(IDES[i][0],CITI_NAME);
            result(IDES[i][1],`Your value is ${num} value ${data} its fals`) ;
            i++
        }if(i===5 && z<3){
            document.getElementById('result').innerHTML='you lose';
        }
        document.getElementById('input').value='';
}

const result = (tagId,value)=>{
    document.getElementById(tagId).innerHTML=value;
    }
    if(i<4){
         goo()
    }
  
}

}
const handlKeyUpInput = (event)=>{
    if(event.keyCode===13){
        getCountriName()
    }
}
 
