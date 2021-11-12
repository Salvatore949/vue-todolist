// Creare una to do list;
// Stampare l'elenco dei task;
// Ogni task può essere barrato;
// Prevedere la possibilità di inserire uno per volta i task;

var app = new Vue(
    {
    el:'#container',
    data: {
           tasks:[
           {text: 'Fare la spesa', done: true},
           {text: 'Cucinare', done: true},
           {text: 'Apparecchiare la tavola', done: true},
           {text: 'Sistemare la camera', done: true},
           {text: 'Pulire il bagno', done: true} 
           ]
        },
    }
) ;