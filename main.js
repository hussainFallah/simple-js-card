const shareContainer=document.getElementsByClassName("share-container")[0];

let isSharePannelDisplayed=false;

const shareButton=document.getElementsByTagName("button")[0]
    
const animationDuration=0.2;//s
// handling opening and closing share panel
document.addEventListener("click",
    (e)=>{
        if(e.target!==shareButton && e.target!==shareContainer ||e.target===shareButton &&isSharePannelDisplayed){
            shareContainer.classList.add("removing")
            isSharePannelDisplayed=false;
            setTimeout(()=>{
                shareContainer.classList.remove("displayed");
                shareContainer.classList.remove("removing")
            },animationDuration*1000) ;
            return;
        }
        
        isSharePannelDisplayed=true;
        shareContainer.classList.add("displayed")
       
    }
)