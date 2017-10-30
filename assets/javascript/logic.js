// logic.js
// 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
// * We chose animals for our theme, but you can make a list to your own liking.

// 2. Your app should take the topics in this array and create buttons in your HTML.
// * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on). 
// * This data is provided by the GIPHY API.
// * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.



$(document).ready(function(){
    
var topics = ['blockchain', 'bitcoin', 'ethereum', 'monero', 'vitalik', 'satoshi', 'cryptography', 'cryptocurrency', 'btc', 'eth'];




//grab the elements
var gifButtonRow = $('#gif-buttons');
var gifAdd = $('#add-gif')
var queryURL = "https://api.giphy.com/v1/gifs/search?q="
var gifButtons
var apiKey = "&api_key=dc6zaTOxFJmzC&limit=10"



//create button for each item in topics, recreates all buttons
function createButtons(){
    for (var i = 0; i < topics.length; i++) {

        var button = $('<button>')
        
        button.html(topics[i]);
        button.attr('id','gif-button')
        button.attr('class','btn');
        button.attr('data-topic',topics[i])
        button.attr('animate','still')
        console.log(button)
        gifButtonRow.append(button);
        

    }

    gifButtons = $('button') 
}


createButtons()




//add-gif button clicked. add word to topics
$('#add-gif').click(function(){

    console.log(' add-gif WAS CLICKED')
})



//call the genTenGifs
gifButtons.click(function(){

    console.log('gif-button WAS CLICKED')
    generateGifs($(this).attr('data-topic'))
})



//adds the user input to topic when the add button is pressed
function addTopic(){


}



//creates the ten gifs
function generateGifs(topic){

    var gifResult

    $.ajax({
        url:queryURL+topic+apiKey,
        method:'GET'
    }).done(function(response){
        gifResult = response;
        //console.log(response)

        for(var i=0;i<10;i++){
            var gif = $('<img>');
            // /console.log(gifResult);
            gif.attr('src',gifResult.data[i].images.fixed_height_still.url);
            gif.attr('data-animate-url',gifResult.data[i].images.fixed_height.url);
            gif.attr('data-still-url',gifResult.data[i].images.fixed_height_still.url);
            gif.attr('data-state','still');
            gif.attr('class','gif');
            $('#gif-row').prepend(gif);

            
    
        }
    })

}




//gets jQueried button and returns the ratings of the gifs
function getRatings(button){


}



$(document).on('click','.gif',function(){

    var state = $(this).attr('data-state');
    console.log(this)
    if(state === 'still'){
        $(this).attr('src',$(this).attr('data-animate-url'))
        $(this).attr('data-state','animate')
    }

    else{
        $(this).attr('src',$(this).attr('data-still-url'))
        $(this).attr('data-state','still')
    }
    
})

function clickAnimation(){

        
            var state;
            console.log('gif clicked!')
        
}









})