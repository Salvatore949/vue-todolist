// Creare una to do list;
// Stampare l'elenco dei task;
// Ogni task può essere barrato;
// Prevedere la possibilità di inserire uno per volta i task;

var app = new Vue(
    {
    el:'#container',
    data: {
           tasks:[
           {"text": 'Fare la spesa'},
           {"text": 'Cucinare'},
           {"text": 'Apparecchiare la tavola'},
           {"text": 'Sistemare la camera'},
           {"text": 'Pulire il bagno'} 
           ]
        },
    }
) ;