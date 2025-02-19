// const loadCategories = () =>{
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then(res=> res.json())
//     .then(data => displayCategory(data.categories))
//     .catch((error) =>{
//         console.log("Error", error)
//     })
// }

// // create display Category function


// const displayCategory = (data) =>{
//     console.log(data);

// }


// loadCategories();



// const loadCategories = () =>{
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then(res => res.json())
//     .then((data) => displayCategory(data.categories))
//     .catch((error) =>{
//         console.log(error)
//     })
// }



// const displayCategory = (data) =>{
// console.log(data);
// }


// loadCategories()



// const loadCategories = () =>{
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then((res) => res.json())
//     .then((data) => displayCategory(data.categories))
//     .catch((error) => console.log("Error", error))
// }


// const displayCategory = (data) =>{
//     console.log(data);
// }

// loadCategories()


function getTimeString(time) {
    // get Hour rest sconds
    const hour = parseInt(time % 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond % 60)
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}


const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log("Error", error))
}

const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log("Error", error))
}


// Create display categories

// const displayCategories =(categories) =>{

//     const categoryContainer = document.getElementById("categories");
// categories.forEach ( (item) =>{
//     console.log(item)

// // create a button

// const button = document.createElement("button");
// button.classList = "btn";
// button.innerText = item.category;

// // add button to category container

// categoryContainer.append(button);

// });
// };


// create display Categories

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);

        // Create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        //  add button to category container
        categoryContainer.append(button);
    });
}


// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }



// Create display videos

const displayVideos = (videos) => {
    const videosContainer = document.getElementById("videos");
    console.log(videos);

    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML =
            `
        <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
     class="h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.langth == 0 
        ? " " 
        : `<span class="absolute right-2 bottom-2 bg-black text-xs text-white rounded">${getTimeString(video.others.posted_date)}  </span>`
      }
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
    <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="">
  </div>
  <div>
    <h2 class="font-bold">${video.title} </h2>
    <div class="flex gap-2 items-center">
        <p>${video.authors[0].profile_name}</p>
         ${video.authors[0].verified == true ? `<img class="h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>` : "" } 
    </div>    
  </div>
    
  </div>

        `;
        videosContainer.append(card);
    });
};

loadCategories()
loadVideos()