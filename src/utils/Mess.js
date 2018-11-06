export const mess = () => {
  let elA = document.querySelectorAll("p");
  let elB = document.querySelectorAll("img");
  let elC = document.querySelectorAll("span");
  let elD = document.querySelectorAll(".homePage div");
  elA.forEach(function(element){
    element.classList.add('messA')
  });
  elB.forEach(function(element){
    element.classList.add('messB')
  });
  elC.forEach(function(element){
    element.classList.add('messC')
  });
  elD.forEach(function(element){
    element.classList.add('messD')
  })
}

export const unmess = () => {
  let el = document.querySelectorAll(".messA, .messB, .messC, .messD");
  el.forEach(function(element){
    element.classList.remove("messA", "messB", "messC", "messD")
  });
}