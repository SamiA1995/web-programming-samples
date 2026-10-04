var body = document.getElementById('body');
var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var button_4 = document.getElementById('button_4');

var break_1 = document.createElement('br');
var break_2 = document.createElement('br');
body.appendChild(break_1);
body.appendChild(break_2);

var text_1 = document.createElement('p');
var text_1_text = document.createTextNode('0');
body.appendChild(text_1_text);

var index = 0;
function incrementText(e, param) {
    e.preventDefault();
    index += param;
    text_1_text.nodeValue = index;
}
button_1.addEventListener('click', function(e) {
    incrementText(e, 3);
}, false);

function sampleGet(e) {
    e.preventDefault();
    $.get( "http://localhost:8080/hello", function( data ) {
        console.log( "Data Loaded: " + data );
    });
}
button_2.addEventListener('click', function(e) {
    sampleGet(e);
}, false);

function sampleGet2(e) {
    e.preventDefault();
    $.get( "http://localhost:8080/hello", { name: "Sami Ahmed", age: "31" } )
    .done(function( data ) {
        console.log( "Data Loaded: " + data );
        console.log( data[0] );
    });
}
button_3.addEventListener('click', function(e) {
    sampleGet2(e);
}, false);

function sampleGet3(e) {
    e.preventDefault();
    $.getJSON( "http://localhost:8080/helloJson", { name: "Archie", age: "68" } )
    .done(function( json ) {
        console.log( "JSON Data: " + json.name );
        console.log( "JSON Data: " + json.age );
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
}
button_4.addEventListener('click', function(e) {
    sampleGet3(e);
}, false);