// data load from api
const loadData = async (searchText) =>{
    // console.log(searchText)
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    // console.log(data.posts)
    const allData = data.posts;
    // console.log(allData)
    showDisplay(allData);
}

// show display

const showDisplay = (allData) =>{
    // console.log(allData)
   ;
    

    const cardContainer = document.getElementById("cardContainer");
    // console.log(cardContainer)

    cardContainer.textContent = "";
    // active
    // ouputLoad(allData)
    allData.forEach((data) => {
        // console.log()
        const cardData = document.createElement("div");
        cardData.classList = `bg-gray-200 flex p-5 rounded-xl`;
        cardData.innerHTML = `

          <!-- img  -->
                    <div class="mr-7 relative w-20 h-10 lg:h-20 rounded-full bg-red-500"><img class="rounded-full" src="${data.image}" alt=""></div>
                    <!-- active status -->
                     <div class="bg-green-500 h-3  lg:h-5 w-3 lg:w-5 rounded-full absolute ml-7 lg:ml-14">
                        <h1></h1>
                    </div>
                    <div class="space-y-4">
        
                        <!-- title -->
                        <section class="space-x-36">
                            <span>#${data.category}</span>
                        <span>Author : ${data.author.name }</span>
                        </section>
                        <!-- name and description  -->
                        <section class="border-dashed border-b-2 border-gray-500 space-y-5 py-4">
                            <h1 class="text-xl lg:text-2xl font-bold">${data.title}</h1>
                            <p>It’s one thing to subject yourself to ha Halloween costume mishap because, <br> hey that’s your prerogative</p>
                        </section>
                        <!-- viw count  -->
                         <section>
                            <!-- viw time  -->
                           <div class="flex justify-around">
                            <div class="flex items-center"><img src="./images/tabler-icon-message-2.png" alt=""><span>${data.comment_count}</span></div>
                            <div class="flex items-center"><img src="./images/tabler-icon-eye.png" alt=""><span>${data.view_count}</span></div>
                            <div class="flex items-center"><img src="./images/tabler-icon-clock-hour-9.png" alt=""><span>${data.posted_time? data.posted_time : "time not availabe"}</span></div>


                            <div><button onclick="ouputLoad()" class="btn"><img src="./images/email 1.png" alt=""></button></div>
                           </div>

                           <!-- card button  -->
                           
                         </section>
                        
                    </div>
        `;
        cardContainer.appendChild(cardData);
        // console.log(cardData)
        
    });
    loadSpinner(false);
   
}



// hndle search 

const searchHandle = () =>{
    loadSpinner(true)
    const searchField = document.getElementById("searchField");
    const searchText = searchField.value;

    console.log(searchText);
    loadData(searchText);
}



// load spinner 

const loadSpinner = (isLoading) =>{
    const spinner = document.getElementById("loadSpinner");
    if(isLoading){
        spinner.classList.remove("hidden");
    }else{
        spinner.classList.add("hidden");
    }
}

// output 

const ouputLoad = () =>{
    // console.log(data)
    // console.log(item.title)
    
    const outputContaienr = document.getElementById("mark-As");
    const outputCard = document.createElement("div");
    outputCard.classList = `bg-gray-300 w-[100%] flex justify-between p-3 rounded-xl lg:p-7 items-center`;
    outputCard.innerHTML = `
     <div class="text-xl font-bold"><h3>javascript is a programming language</h3></div>
            <div class="flex space-x-2 items-center">
                <img class="w-5 object-contain" src="./images/tabler-icon-eye.png" alt="">
                <span>3454</span>
            </div>
    `;
    outputContaienr.appendChild(outputCard);
    console.log(outputCard)
}


loadData("coding")


// latest postes 

const getData = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    // console.log();
    latestshowDisplay(data);
}



// latestshowDisplay 

const latestshowDisplay = (data) =>{
    // console.log(data)
    

    // latest card container 
    const latestCardContainer = document.getElementById("latest-container");
    data.forEach(item =>{
        // console.log(item)

        const latestCard = document.createElement("div");
        // console.log(latestCard)
        latestCard.classList = `card bg-base-100 shadow-xl`;
        latestCard.innerHTML = `
        <figure class="px-10 pt-10">
                  <img
                    src="${item.cover_image}"
                    alt="latest"
                    class="rounded-xl" />
                </figure>
                <div class="card-body ">
                    <!-- date  -->
                  <div class="flex space-x-1">
                    <img  src="./images/Frame.png " alt="">
                    <span>${item.author.posted_date?item.author.posted_date: "date not availabe"}</span>
                    </div>
                    <h1 class="text-xl font-bold">${item.title}</h1>
                  <p>${item.description}</p>
                  <div class="card-actions ">
                    <div class=" h-10 w-10 rounded-full bg-yellow-400"><img class="rounded-full" src="${item.profile_image}" alt=""></div>
                    <div><h6 class="text-xs font-bold">${item.author.name}</h6><span class="opacity-0.5 text-xs">
                        ${item.author.designation? item.author.designation: "designation not available "}
                    </span></div>
                  </div>
                </div>
        `;
        latestCardContainer.appendChild(latestCard);
    })
}



getData()