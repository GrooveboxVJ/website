const root = document.querySelector(":root");
var scrollvalue = window.scrollY;
var scrollindex = 0;
var scrollanchors = [];
getSize();
getscrollIndex();

function getSize() {
    const width = window.innerWidth;
    const height = window.innerHeight; 
    root.style.setProperty("--pseudo-width", width+"px");
    root.style.setProperty("--pseudo-height", height+"px");
    //resize scroll anchors
    for (i=0;i<3;i++){
       scrollanchors[i]=(height*i)-(height*0.33); 
    }
    console.log(scrollanchors);
}

function showSection(){
    for (i=0;i<3;i++){
        let section="content"+i;
        if (i==scrollindex) {
            console.log(section+" is shown");
            document.getElementById(section).classList.add('show');
            if (i==0){
                document.getElementById('wrapper0').classList.add('show');
            }
        } else {
            console.log(section+" is hidden");
            document.getElementById(section).classList.remove('show');
            document.getElementById('wrapper0').classList.add('show');
        }
    }
}

function getscrollIndex(){
    let s = Math.trunc(scrollvalue/scrollanchors[1]);
    console.log ("scroll index is: "+s)
    scrollindex = s;
    showSection();
}

function getScrollValue() {
    scrollvalue = window.scrollY;
    console.log("scroll: "+scrollvalue);
    root.style.setProperty("--pseudo-scroll", scrollvalue*0.6+"px");
    
    getscrollIndex();
}

window.addEventListener("resize", getSize);
window.addEventListener("scroll",getScrollValue)

const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  root.style.setProperty("--pseudo-mouseX", mousePos.x);
  root.style.setProperty("--pseudo-mouse", mousePos.x);
  console.log(mousePos);
});