const cardData = [
    {
        title:"Student Directory", 
        image: "./assets/images/previews/stuDirectory.gif",
        langs: ["HTML", "CSS", "JS", "SQL", "PHP", "ALL"],
        description:"The Student Directory, a Student Infromation System web application made during Grade 11 and was our Final Project. It is a collabortive work between me and Julius Castillejo, with some help of our other group mates. It has two functions, to view grades and info of students and modifying its info.",
        link: "https://github.com/GenericGithUser/studentDirectory",
        goTo: "Go to Code (No Live Preview Available)"
    },
    {
        title:"MRM-Transmission Database System", 
        image: "./assets/images/previews/mrmGIF.gif",
        langs: ["HTML", "CSS", "JS", "REACT", "SQL", "ALL"],
        description:"The Final Project that is made for our Information Management Subject, it is a full-stack web application built on ReactJS and used NodeJS as a backend. It is used for transmitting notifications of transmissions to the head office of Maynilad. It can send, receive, modify, delete, resend transmission notifications, as well as its records.",
        link: "https://tds-mock.vercel.app/",
        goTo: "Go to Preview"
    },
    {
        title: "Image Gallery",
        image: "./assets/images/previews/imgGal.png",
        langs: ["HTML", "CSS", "JS", "ALL"],
        description: "An Image Gallery, it was made for a performance task on the Empowerment Technology Subject, it features random pictures. The site itself is very minimalistic.",
        link: "https://imggal.vercel.app/",
        goTo: "Go to Preview"
    },
    {
        title: "English Grammar Website",
        image: "./assets/images/previews/engSite.png",
        langs: ["HTML", "CSS", "ALL"],
        description: "A Simple English Grammar Guide site where there is some important information about the English Language and it also includes a test in the end. It only includes HTML and CSS.",
        link: "https://pt2-2.vercel.app/",
        goTo: "Go to Preview"
    },
    {
        title: "Multiple Choice Questionnaire",
        image: "./assets/images/previews/mcqprev.png",
        langs: ["JAVA", "ALL"],
        description: "A Multple Choice Questionnaire, made in Java. It is a proof concept for our final project in Java Programming, it is a 15 question questionnaire that grades your performance in answering it.",
        link: "https://github.com/GenericGithUser/MCQ2",
        goTo: "Go to Code (No Live Preview Available)"
    },
    {
        title: "Notepad",
        image: "./assets/images/previews/guiNotepadPrev.png",
        langs: ["C", "ALL"],
        description: "A Simple GUI Notepad that used the IUP GUI Library, it has many features of your typical notepad",
        link: "https://github.com/GenericGithUser/guiNotepad",
        goTo: "Go to Code (No Live Preview Available)"
    },
    {
        title: "Calculator",
        image: "./assets/images/previews/guiCalcPrev.png",
        langs: ["C", "ALL"],
        description: "A Simple Calculator that used the IUP GUI Library, has the same features as a regular calculator",
        link: "https://github.com/GenericGithUser/guiCalc",
        goTo: "Go to Code (No Live Preview Available)"
    }
];


const navBarMobile = document.querySelector('.header-Mobile');
const menuBtn = document.getElementById("menuBtn");
const mainBox = document.querySelector('.pages');
const menus = document.querySelectorAll('.menu');
let frozen = false;
menuBtn.addEventListener('click', ()=>{
    navBarMobile.classList.toggle('activate');
    menuBtn.classList.toggle('rotate');

    frozen = navBarMobile.classList.contains('activate');

    
});

menus.forEach(item => {
    item.addEventListener('click', ()=>{
        navBarMobile.classList.remove('activate');
        menuBtn.classList.remove('rotate');
        frozen = false;
    });
});
mainBox.addEventListener('click', (event)=>{
        if (frozen) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (navBarMobile.classList.contains('activate')) {
            frozen = true;
            console.log("isTrue");
        }else if (!navBarMobile.classList.contains('activate')){
            frozen = false;
            console.log("isFalse")
        }
    });



const navButtons = document.querySelectorAll('.menu');
const pages = document.querySelectorAll('.page');


function goToPage(page) {
   const currPage = document.querySelector('.page.shown');
   const newPage = document.querySelector(`.${page}`);

   if(!newPage || currPage === newPage)return;

   if (currPage) {
        currPage.classList.remove('shown');
        currPage.classList.add('fadeOut');

        currPage.addEventListener('transitionend', ()=>{
            currPage.classList.remove('fadeOut');
        }, {once: true});
   }

   newPage.classList.add('shown');
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.banner').classList.add('shown');
});


navButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{ 

        navButtons.forEach(a=>a.classList.remove('active'));
        btn.classList.add('active');

        goToPage(btn.dataset.page);
    });


});





const container = document.querySelector('.cardContainer');
const card = document.getElementById("card");



function renderCards(langFliter = "ALL") {
    container.innerHTML = "";
        cardData
        .filter(data=> langFliter === "ALL" ||data.langs.includes(langFliter))
        .forEach(data =>{
            const clone = card.content.cloneNode(true);
            const cardElement = clone.querySelector('.card');

            clone.querySelector('.cardTitle').textContent = data.title;
            clone.querySelector('.imageShow').href = data.image;
            clone.querySelector('.boxImage').src = data.image;
            clone.querySelector('.langs').textContent = data.langs.filter(item=> item !== "ALL").join(" ");
            clone.querySelector('.desc').textContent = data.description;
            clone.querySelector('.linker').href = data.link;
            clone.querySelector('.linker').textContent = data.goTo; 

            container.appendChild(clone);

            requestAnimationFrame(()=>{
                cardElement.classList.add('show');
            });
        });
}

renderCards();

document.querySelectorAll('.sortBtn').forEach(btn =>{
    btn.addEventListener('click', ()=>{

        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');
            renderCards("ALL");
        }
        else{
            renderCards(btn.dataset.lang);
            document.querySelectorAll('.sortBtn').forEach(a =>{
                a.classList.remove('selected'); 
            });

            btn.classList.add('selected');
        }
    });

    
});