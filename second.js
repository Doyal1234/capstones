var textbox=document.getElementById("Textbox");
var div1=document.getElementById("div1");
var weight=document.getElementById("weight");
var height=document.getElementById("height");
var y= document.getElementById("myAudio2");

function submit() { 
    
    if(textbox.value>0) {
        y.play();  
        
       
        
        
    } 
   
        
        if(height.value<=0){
            y.pause()
            
           
            document.getElementById("third").style.visibility="visible";
        }


        
    if(weight.value<=0){
        y.pause()
        
        
        document.getElementById("second").style.visibility="visible";
    }

    if(textbox.value<=0){
        y.pause()
        
        
        document.getElementById("first").style.visibility="visible";
        
    }
    
}
function reset() {
document.getElementById("Textbox").value="";
document.getElementById("weight").value="";
document.getElementById("height").value="";
x.pause()

document.getElementById("div1").style.visibility="hidden";

}