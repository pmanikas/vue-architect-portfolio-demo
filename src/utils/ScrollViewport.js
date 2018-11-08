import Smoothscroll from 'smoothscroll-polyfill'

export let scrollTrigger = (e) => {
  Smoothscroll.polyfill();
  let newScroll = 0;
  let pxPerVh = window.innerHeight / 100;
  let currScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(e.deltaY > 0) { // scroll up
    newScroll = currScroll + 100 * pxPerVh;
  }else if (e.deltaY < 0) { // scroll down
    newScroll = currScroll - 100 * pxPerVh;
  }else { // no scroll
    newScroll = currScroll;
  }
  // console.log('SCROLL:', e.deltaY, currScroll, newScroll, pxPerVh);
  window.scroll({
    top: newScroll, 
    left: 0,
    behavior: 'smooth' 
  });
}