
//adding toggle is active class to main menu

const link = document.getElementsByClassName("header-menu")[0];
    
    link.addEventListener('click', (e)=>{
        let ele = document
        .getElementsByClassName("header-menu")[0]
        .querySelectorAll("a");
        ele.forEach(element => {
        element.classList.remove('is-active'); 
        });
        e.srcElement.classList.add('is-active');
});    

//adding toggle is active class to modes
const link2 = document.getElementsByClassName("main-header")[0];
    link2.addEventListener('click', (e)=>{
        let ele = link2.querySelectorAll("a");
        ele.forEach(element => {
        element.classList.remove('is-active'); 
        });
        e.srcElement.classList.add('is-active');
    });  


    let flag=false;
    const modes=document.getElementsByClassName('main-header')[0];
    const home=document.getElementsByClassName('content-wrapper')[0];
    const search =document.getElementsByClassName('container')[0];
    const learning=document.getElementById('learnPage');
    
//implement search functionality and demounting home
const searchBar = document.getElementsByClassName('input-here')[0];
searchBar.addEventListener('input', function(event) {
  const searchValue = event.target.value;
});
searchBar.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    performSearch();
    
    home.style.display='none';
    modes.style.display='none';
    learning.style.display='none';
    search.style.display='block';
    flag=true;
    
    // url.getAttribute("href");
    //  url.setAttribute("href","https://www.tutorialspoint.com");
      
  }
});
async function methodOne(jsonList,key) {
  return new Promise((resolve) => {
      setTimeout(() => {
              let vidvalue=jsonList[key];
              console.log(`${key}: ${jsonList[key]}`);
              const searchedvideo=document.getElementsByClassName('searhedvideo')[0];
              console.log(searchedvideo);
              //todo black blaze url and concate vidvalue 
              let url=`https://f005.backblazeb2.com/file/signTalkv1/${vidvalue}.mp4`;
              searchedvideo.src = url;
              searchedvideo.play();
          resolve('done');
      }, 1);
  });
}

async function performSearch() {
  const searchValue = searchBar.value.toLowerCase().trim();
  let words=searchValue.split(' ');
  words.forEach(ele=>{
    console.log('_-____',ele)
    const learnthroughlink=document.getElementById('Learnsign');
    learnthroughlink.setAttribute("href",`https://babysignlanguage.com/dictionary/${ele}/`);
    let vidvalue;
    console.log('Search performed:', ele);
    const searched=document.getElementsByClassName('searched')[0];
    console.log(searched.innerHTML=ele);
    const jsonFileURL = '/data.json';
    fetch(jsonFileURL)
      .then(response =>response.json())
      .then(
        async jsonList=>{
          for (let key in jsonList) {
            if(key==ele){
              let temp=await methodOne(jsonList,key);
              console.log('output--->',temp);
              // let vidvalue=jsonList[key];
              // console.log(`${key}: ${jsonList[key]}`);
              // const searchedvideo=document.getElementsByClassName('searhedvideo')[0];
              // console.log(searchedvideo);
              // //todo black blaze url and concate vidvalue 
              // let url=`https://f005.backblazeb2.com/file/signTalkv1/${vidvalue}.mp4`;
              
              //   searchedvideo.src = url;
              //  searchedvideo.play();
              
            }
            
        }
        }
      )
      
  })

      
}



  //adding home event listner
  const homeredirect=document.getElementById('HOME');
  
  homeredirect.addEventListener('click',()=>{
    learning.style.display='none';
    if(flag===true){
    search.style.display='none'
    modes.style.display='block'
    home.style.display='block'
    translatepage.style.display='none';
    // search.style.all='unset';
    } 
  })

  const homemenu=document.getElementById('navhome');
  
  homemenu.addEventListener('click',()=>{
    learning.style.display='none';
    if(flag===true){
    search.style.display='none'
    
    modes.style.display='block'
    home.style.display='block'
    translatepage.style.display='none';
    // search.style.all='unset';
    } 
  })

  const navlearn=document.getElementById('Learn');
  //learning page
  navlearn.addEventListener('click',()=>{
    search.style.display='none'
    modes.style.display='none'
    home.style.display='none'
    learning.style.display='block';
    translatepage.style.display='none';
    flag=true;
    createnode();
  })

  const translatepage=document.getElementById('TRANSLATOR')
  const navtranslate=document.getElementById('translatenav');
  
  navtranslate.addEventListener('click',()=>{
    search.style.display='none'
    modes.style.display='none'
    home.style.display='none'
    learning.style.display='none';
    translatepage.style.display='block';
    flag=true;
  })


  //creting cards for learn page
  
  // function cretecards(cnt){
  //   if(cnt==4){
  //     cnt=0;return;
  //   }

  //   const cardsforpage=document.getElementById('cardsforpage');
  //   var clonedDiv = cardsforpage.cloneNode(true);
  //   learning.appendChild(clonedDiv);
  //   console.log('appended');
  //   cnt++;
  //   cretecards(cnt);


  // }


  const courseslink=document.getElementById('cardsforpage');
  
  courseslink.addEventListener('click',()=>{
    window.open('https://www.udemy.com/topic/sign-language/');
  })
 



  
