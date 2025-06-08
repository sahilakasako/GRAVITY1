const searchicon1 =document.querySelector('#searchicon1');
const srchicon1 =document.querySelector('#srchicon1');
const search1=document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
  search1.style.display='flex';
  searchicon1.style.display='none';
})

const searchicon2 =document.querySelector('#searchicon2');
const srchicon2 =document.querySelector('#srchicon2');
const search2=document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
  search2.style.display='flex';
  searchicon2.style.display='none';
})

const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hdcross');
const headerbar=document.querySelector('.headerbar');

bar.addEventListener('click',function(){
  setTimeout(()=>{
    cross.style.display='block';
  }, 200);
  headerbar.style.right= '0%';
})

cross.addEventListener('click',function(){
  cross.style.display='none';
  headerbar.style.right='-100%';
})


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
