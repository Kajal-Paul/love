const bodyEl = document.querySelector("body");

bodyEl.addEventListener("touchmove", () => {
  const xPos = event.clientX;
  const yPos = event.clientY;
 

  const spanEl = document.createElement("span");
  spanEl.style.position = "absolute";
  spanEl.style.left= xPos +"px";
  spanEl.style.top= yPos +"px";
  const randHight = Math.random()*100;
  const randWidth = randHight*1.1;
  spanEl.style.width =randWidth +"px";
  spanEl.style.height =randHight+ 'px';
  const randColor =  Math.random()*1000 +'deg';
  spanEl.style.filter= `hue-rotate(${randColor})`;

  
  bodyEl.appendChild(spanEl);
  setTimeout(()=>{
    spanEl.remove()
  },1500)

});


