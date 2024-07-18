const bodyEl=document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>
{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const SpanEl=document.createElement("span"); 
    SpanEl.style.left=xpos+"px";
    SpanEl.style.top=ypos+"px"
    const size=Math.random()*150;
    SpanEl.style.width=size+"px"
    SpanEl.style.height=size+"px"
    bodyEl.appendChild(SpanEl)
    setTimeout(()=>{
        SpanEl.remove()
    
    },3000);
    

})