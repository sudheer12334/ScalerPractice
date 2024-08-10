class StarRating{
    constructor(containerId) {
        this.container = document.querySelector(containerId);
        console.log(this.container);

        this.stars = this.container.querySelectorAll('.star');

        this.filled = 0;

        //binding all the evnts
        this.container.addEventListener('click', (event) =>{ this.onStarClick(event) })
        this.container.addEventListener('mouseover',(event)=>{ this.onStarMouseOver(event)});
        this.container.addEventListener('mouseleave',(event)=>{ this.restoringRating(event)});

    }

        /**
         * 
         * @param {*} event 
         * @returns 
         */
        onStarClick(event){
            const starElem = event.target.classList[0];

            if(starElem!='star') return;

            const currentClicked=parseInt(event.target.getAttribute("data-index"));

            this.fillColours(currentClicked);
            this.filled= currentClicked;
            this.updateRatingCount(currentClicked);
        }

        fillColours(value){
            for(let i=0; i< 5;i++){
                this.stars[i].classList.remove("star-filled")
            }
            for(let i=0; i< value;i++){
                this.stars[i].classList.add("star-filled")
            }
        }

        updateRatingCount(value){
            document.getElementById("count").textContent = `Rating Count:${value}`;
        }
        onStarMouseOver(event){
             const currentMouseOverIndex= parseInt(event.target.getAttribute("data-index"));

             this.fillColours(currentMouseOverIndex);
        }

        restoringRating(event){
            this.fillColours(this.filled);
        }
    
}

new StarRating("#star-container"); 