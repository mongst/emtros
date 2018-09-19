

// Someone should write the java for this page to auto-generate its own 'imgs' string from the files found in the folder.


var imgs = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg', '11.jpg']    //  creates variable string with a list of the images
    i = Math.floor(Math.random()*imgs.length);    // creates random number based on number of items in string



document.getElementById("el").innerHTML = "<img class="img" src='breedingground/" + imgs[i] + "'>"; // pulls id="el" and appends img src to html at the end of that line
