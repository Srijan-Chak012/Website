// let myimage = document.querySelector('img');
// myimage.onclick = function(){
//     let mySrc = picture.getAttribute('src');
//     print(mySrc);
//     if(mySrc === "pictures/gallery/Display_1.jpeg")
//     {
//         image.setAttribute('src', "pictures/gallery/Display_2.jpeg");
//     }

//     else
//     {
//         image.setAttribute('src', "pictures/gallery/Display_1.jpeg");
//     }
// }

function change_image() 
{
    var x = document.getElementById('changingimage')
    var str = document.getElementById('changingimage').src;
    if (str.includes("Display_1.jpeg")) 
    {
        x.src = "../pictures/gallery/Display_2.jpeg";
    } 

    else if (str.includes("Display_2.jpeg")) 
    {
        x.src = "../pictures/gallery/Display_3.jpeg";
    } 

    else if (str.includes("Display_3.jpeg")) {
        x.src = "../pictures/gallery/Display_4.jpeg";
    } 
    
    else if (str.includes("Display_4.jpeg")) 
    {
        x.src = "../pictures/gallery/Display_5.jpeg";
    } 
    
    else if (str.includes("Display_5.jpeg")) {
        x.src = "../pictures/gallery/Display_1.jpeg";
    } 
    
    else {
        x.src = "";
    }
}
