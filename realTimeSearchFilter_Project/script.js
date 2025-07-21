// all the user
let users = [
  {
    name: "Aarav Mehta",
    pic: "https://source.unsplash.com/200x200/?man,face,1",
    bio: "Frontend developer with a passion for clean UI."
  },
  {
    name: "Isha Singh",
    pic: "https://source.unsplash.com/200x200/?woman,portrait,2",
    bio: "Coffee lover and digital artist based in Bangalore."
  },
  {
    name: "Rohan Verma",
    pic: "https://source.unsplash.com/200x200/?man,casual,3",
    bio: "Full-stack developer and football enthusiast."
  },
  {
    name: "Simran Kaur",
    pic: "https://source.unsplash.com/200x200/?woman,smile,4",
    bio: "UI/UX designer crafting pixel-perfect experiences."
  },
  {
    name: "Kunal Sharma",
    pic: "https://source.unsplash.com/200x200/?man,style,5",
    bio: "Freelancer and blockchain explorer."
  },
  {
    name: "Ananya Gupta",
    pic: "https://source.unsplash.com/200x200/?woman,indian,6",
    bio: "Content writer who believes in the power of words."
  },
  {
    name: "Nikhil Joshi",
    pic: "https://source.unsplash.com/200x200/?man,tech,7",
    bio: "Machine learning enthusiast and chess player."
  },
  {
    name: "Tanya Rao",
    pic: "https://source.unsplash.com/200x200/?woman,nature,8",
    bio: "Photographer and avid traveler."
  },
  {
    name: "Aman Saxena",
    pic: "https://source.unsplash.com/200x200/?man,urban,9",
    bio: "Backend engineer, loves biking on weekends."
  },
  {
    name: "Priya Desai",
    pic: "https://source.unsplash.com/200x200/?woman,smiling,10",
    bio: "Creative writer and poetry enthusiast."
  },
  {
    name: "Yash Kapoor",
    pic: "https://source.unsplash.com/200x200/?man,glasses,11",
    bio: "Android developer with a love for minimalism."
  },
  {
    name: "Neha Rathi",
    pic: "https://source.unsplash.com/200x200/?woman,laptop,12",
    bio: "Tech blogger and open-source contributor."
  },
  {
    name: "Raj Malhotra",
    pic: "https://source.unsplash.com/200x200/?man,portrait,13",
    bio: "Cybersecurity expert and ethical hacker."
  },
  {
    name: "Diya Kapoor",
    pic: "https://source.unsplash.com/200x200/?woman,culture,14",
    bio: "Graphic designer with an eye for detail."
  },
  {
    name: "Aditya Jain",
    pic: "https://source.unsplash.com/200x200/?man,profile,15",
    bio: "Startup founder and night owl coder."
  },
  {
    name: "Sneha Agarwal",
    pic: "https://source.unsplash.com/200x200/?woman,indian,16",
    bio: "Health coach and yoga instructor."
  },
  {
    name: "Manish Tiwari",
    pic: "https://source.unsplash.com/200x200/?man,professional,17",
    bio: "SEO expert and marketing strategist."
  },
  {
    name: "Riya Sen",
    pic: "https://source.unsplash.com/200x200/?woman,office,18",
    bio: "HR specialist who loves to connect people."
  },
  {
    name: "Abhay Kumar",
    pic: "https://source.unsplash.com/200x200/?man,modern,19",
    bio: "Aspiring game developer and anime fan."
  },
  {
    name: "Megha Nair",
    pic: "https://source.unsplash.com/200x200/?woman,fashion,20",
    bio: "Fashion designer and vlogger."
  },
  {
    name: "Sahil Khan",
    pic: "https://source.unsplash.com/200x200/?man,casual,21",
    bio: "Student and React.js learner."
  },
  {
    name: "Roshni Pathak",
    pic: "https://source.unsplash.com/200x200/?woman,face,22",
    bio: "Biotech grad and part-time coder."
  },
  {
    name: "Varun Bhatt",
    pic: "https://source.unsplash.com/200x200/?man,headshot,23",
    bio: "iOS developer and marathon runner."
  },
  {
    name: "Shivani Chauhan",
    pic: "https://source.unsplash.com/200x200/?woman,creative,24",
    bio: "Illustrator and book lover."
  },
  {
    name: "Devansh Rawat",
    pic: "https://source.unsplash.com/200x200/?man,techie,25",
    bio: "Love building side projects in JS."
  },
  {
    name: "Aishwarya Reddy",
    pic: "https://source.unsplash.com/200x200/?woman,natural,26",
    bio: "Nature lover and mobile app designer."
  },
  {
    name: "Rudra Pratap",
    pic: "https://source.unsplash.com/200x200/?man,freelancer,27",
    bio: "Freelance web developer and gamer."
  },
  {
    name: "Pooja Verma",
    pic: "https://source.unsplash.com/200x200/?woman,closeup,28",
    bio: "Full-time mom, part-time UI designer."
  },
  {
    name: "Aryan Mishra",
    pic: "https://source.unsplash.com/200x200/?man,focus,29",
    bio: "Deep learning researcher."
  },
  {
    name: "Nidhi Bansal",
    pic: "https://source.unsplash.com/200x200/?woman,student,30",
    bio: "Computer science student and cloud enthusiast."
  }
];
let push=document.querySelector("#push")
function showUsers(arr){
    arr.forEach( function(user) {
        // create outer card div
        const card=document.createElement("div")
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
        push.appendChild(card)


    });
}

showUsers(users)