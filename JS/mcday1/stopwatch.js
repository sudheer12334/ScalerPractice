class StopWatch{
    constructor(minMSB,minLSB,secMSB,secLSB,start,stop,reset,display){
        this.minMSB=document.getElementById(minMSB);
        this.minLSB=document.getElementById(minLSB);
        this.secMSB=document.getElementById(secMSB);
        this.secLSB=document.getElementById(secLSB);

        this.start=document.getElementById(start);
        this.stop=document.getElementById(stop);
        this.reset=document.getElementById(reset);
        this.display=document.getElementById(display);

        this.minutes =0;
        this.seconds =0;
        
        this.display.addEventListener('input',(event)=>{this.onInput(event)});

        this.start.addEventListener('click',()=>{this.onStart()});
        this.stop.addEventListener('click',()=>{this.onStop()});
        this.reset.addEventListener('click',()=>{this.onReset()});

        this.intervalId = null;
        

    }
    onInput(){
            
    }

    onStart(){
        this.display.classList.add('progress');
        this.setInputDisabledStatus(true);
        this.setControls(false,true);
        this.setTime();
        this.startTimer();
    }

    setTime(){
        this.minutes= parseInt(this.minMSB.value)*10 + parseInt(this.minLSB.value);
        this.seconds= parseInt(this.secMSB.value)*10 + parseInt(this.secLSB.value);
    }
    startTimer(){
        this.intervalId=setInterval(()=>{
            this.seconds -=1;

            if(this.seconds<0){
                this.seconds = 59;
                this.minutes -=1;
            }

            this.setDisplay(this.minutes , this.seconds);
        },1000);
    }

    setDisplay(mins,secs){
        this.minMSB.value= String(Math.floor(mins/10));
        this.minLSB.value= String(Math.floor(mins%10));
        this.secMSB.value= String(Math.floor(secs/10));
        this.secLSB.value= String(Math.floor(secs%10));
        
    }
    onStop(){
        this.display.classList.remove('progress');
        this.setInputDisabledStatus(false);
    }
    setInputDisabledStatus(isDisabled=false){
        this.minMSB.disabled=isDisabled
        this.minLSB.disabled=isDisabled
        this.secMSB.disabled=isDisabled
        this.secLSB.disabled=isDisabled
    }
    setControls(startStatus=false,stopStatus=false){
        this.start.disabled = startStatus;
        this.stop.disabled=stopStatus;
    }
    onReset(){

    }
}
new StopWatch("minMSB","minLSB",'secMSB','secLSB',"start","stop","reset","display")
