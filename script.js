const image = document.querySelectorAll("img");

let newArray = [
    {
        alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
        alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
        alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    },
    ];
    for(let i =0; i<image.length; i++){
 image[i].setAttribute("alt", newArray[i].alt);
 image[i].setAttribute("src", newArray[i].src);
    }
    // -------------------2-------------------
    const list = document.querySelectorAll("li");

let newList = ['Item 1', 'Item 2', 'Item 3'];
    for(let i = 0; i<list.length; i++){
 list[i].innerText = newList[i];
    }