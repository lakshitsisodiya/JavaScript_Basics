// all the user
let users = [
  {
    name: "Isha Verma",
    pic: "https://randomuser.me/api/portraits/women/0.jpg",
    bio: "Developer with a creative mind."
  },
  {
    name: "Rohan Singh",
    pic: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Developer with a creative mind."
  },
  {
    name: "Krishna Sharma",
    pic: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Avid reader and writer."
  },
  {
    name: "Rohan Singh",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "UI/UX designer by heart."
  },
  {
    name: "Ishaan Singh",
    pic: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Passionate about open source."
  },
  {
    name: "Arjun Agarwal",
    pic: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Loves coding and coffee."
  },
  {
    name: "Riya Rathi",
    pic: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Passionate about open source."
  },
  {
    name: "Neha Rathi",
    pic: "https://randomuser.me/api/portraits/women/7.jpg",
    bio: "Frontend enthusiast."
  },
  {
    name: "Kabir Sharma",
    pic: "https://randomuser.me/api/portraits/men/8.jpg",
    bio: "Developer with a creative mind."
  },
  {
    name: "Sneha Singh",
    pic: "https://randomuser.me/api/portraits/women/9.jpg",
    bio: "UI/UX designer by heart."
  },
  {
    name: "Kabir Sharma",
    pic: "https://randomuser.me/api/portraits/men/10.jpg",
    bio: "Frontend enthusiast."
  },
  {
    name: "Riya Verma",
    pic: "https://randomuser.me/api/portraits/women/11.jpg",
    bio: "Passionate about open source."
  },
  {
    name: "Megha Sharma",
    pic: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Dreamer, builder, thinker."
  },
  {
    name: "Aarav Reddy",
    pic: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "Loves coding and coffee."
  },
  {
    name: "Vivaan Singh",
    pic: "https://randomuser.me/api/portraits/men/14.jpg",
    bio: "Explorer of new ideas."
  },
  {
    name: "Rohan Agarwal",
    pic: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Explorer of new ideas."
  },
  {
    name: "Sneha Mehta",
    pic: "https://randomuser.me/api/portraits/women/16.jpg",
    bio: "UI/UX designer by heart."
  },
  {
    name: "Krishna Verma",
    pic: "https://randomuser.me/api/portraits/men/17.jpg",
    bio: "Developer with a creative mind."
  },
  {
    name: "Aishwarya Agarwal",
    pic: "https://randomuser.me/api/portraits/women/18.jpg",
    bio: "Passionate about open source."
  },
  {
    name: "Tanya Sharma",
    pic: "https://randomuser.me/api/portraits/women/19.jpg",
    bio: "Loves coding and coffee."
  },
  {
    name: "Tanya Reddy",
    pic: "https://randomuser.me/api/portraits/women/20.jpg",
    bio: "Dreamer, builder, thinker."
  },
  {
    name: "Sneha Sharma",
    pic: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Developer with a creative mind."
  },
  {
    name: "Megha Malhotra",
    pic: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Dreamer, builder, thinker."
  },
  {
    name: "Isha Kapoor",
    pic: "https://randomuser.me/api/portraits/women/23.jpg",
    bio: "UI/UX designer by heart."
  },
  {
    name: "Riya Mehta",
    pic: "https://randomuser.me/api/portraits/women/24.jpg",
    bio: "Passionate about open source."
  },
  {
    name: "Kabir Agarwal",
    pic: "https://randomuser.me/api/portraits/men/25.jpg",
    bio: "Tech lover and blogger."
  },
  {
    name: "Aryan Mehta",
    pic: "https://randomuser.me/api/portraits/men/26.jpg",
    bio: "Avid reader and writer."
  },
  {
    name: "Tanya Singh",
    pic: "https://randomuser.me/api/portraits/women/27.jpg",
    bio: "Tech lover and blogger."
  },
  {
    name: "Kabir Mehta",
    pic: "https://randomuser.me/api/portraits/men/28.jpg",
    bio: "Always learning something new."
  },
  {
    name: "Neha Gupta",
    pic: "https://randomuser.me/api/portraits/women/29.jpg",
    bio: "Always learning something new."
  }
];

function showUsers(arr){
    arr.forEach( function(user) {
        // create outer card div
        const card=document.createElement("div")
        card.classList.add("card");

        // create Image
        const img=document.createElement("img")
        img.src=user.pic;
        img.classList.add("bg-img")
        // create blurred-layer div
        const blurredLayer=document.createElement("div")
        blurredLayer.classList.add("blurred-layer")
        blurredLayer.style.backgroundImage=`url(${user.pic})`    
        // create content div
        const content=document.createElement("div")
        content.classList.add("content")
        // create h3 and para 
        const heading=document.createElement("h3")
        heading.textContent=user.name

        const para=document.createElement("p")
        para.textContent=user.bio

        // appent heading and para to content
        content.appendChild(heading)
        content.appendChild(para)

        // append all to card
        card.appendChild(img)
        card.appendChild(blurredLayer)
        card.appendChild(content)

        // append card to body
        
        document.querySelector(".cards").appendChild(card)


    });
}

showUsers(users)

// let inp=document.querySelector(".inp")
// inp.addEventListener("input",function(){
//    let newUsers=  users.filter((user)=>{
//     return user.name.toLowerCase().startsWith(inp.value.toLowerCase())

//    })
//    document.querySelector(".cards").innerHTML=""
//    showUsers(newUsers)
// })
let inp = document.querySelector(".inp");
let msg = document.querySelector(".message");
let cardsContainer = document.querySelector(".cards");

inp.addEventListener("input", function () {
   let newUsers = users.filter((user) =>
      user.name.toLowerCase().startsWith(inp.value.toLowerCase())
   );

   cardsContainer.innerHTML = "";
   msg.textContent = ""; // clear any previous message

   if (newUsers.length === 0) {
       msg.textContent = "No users found.";
   } else {
       showUsers(newUsers);
   }
});