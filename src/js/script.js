//------------ Gallery ------------- //

const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

            //ajout de la classe active sur le click du bouton //

            for(let i=0; i<filterButtons.length; i++){
                filterButtons[i].addEventListener("click", function(){

            //On retire la classe active de tous les boutons //

                    for(let j=0; j<filterButtons.length; j++){
                        filterButtons[j].classList.remove("active")
                    }

            //On ajoute la classe active sur le bouton cliqué //
            //On filtre les items de la gallery // 

                    this.classList.add("active");



                    const target=this.getAttribute("data-target")

                    for(let k=0; k<items.length; k++){
                        items[k].style.display="none";

                        if(target==items[k].getAttribute("data-id"))
                        {
                            items[k].style.display="block";
                        }
                        if(target=="all"){
                            items[k].style.display="block";
                        }
                    }
                })
            }

        // ----- Lightbox ------ //

const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");

 // 2. This code loads the IFrame Player API code asynchronously.
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        let ytPlayerReady = false; 
        var players;

        function onYouTubeIframeAPIReady() {
            ytPlayerReady = true;
        }

        function loadYTPlayer(idvideo){
            if (ytPlayerReady) {
            players = new YT.Player('players', {
                      height: '360',
                      width: '640',
                      videoId: idvideo,
                      events: {
                        'onReady': onPlayerReady
                      }
                    });
            }
            }
            function onPlayerReady(event) {
                event.target.playVideo();
              }
            
            function stopVideo() {
                players.stopVideo();
              }

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");
const lightboxImage=document.querySelector("#players");

            // La fenêtre se ferme lorsqu'on clique sur la croix //

            closeLightbox.addEventListener("click", function(){
                lightbox.classList.remove("show");
                lightbox.classList.add("hide");
                stopVideo();
                players.destroy();
            })

            // La fenêtre apparait lorsqu'on clique sur le bouton plus //

            galleryItem.forEach(function(element){
                element.querySelector(".fa-play").addEventListener("click", function(event){
                    lightbox.classList.remove("hide");
                    lightbox.classList.add("show");
                    loadYTPlayer(event.currentTarget.getAttribute("data-video"));
                    
                })
            }) 
        // ----- Lightbox ------ //
//------------ Gallery ------------- //







//------------ Header -------------- //
   
    window.onscroll=function(){
       const docScrollTop=document.documentElement.scrollTop; 

       //Lorsque la taille de la fenêtre est supérieure à 991px, on enlève le fixed //

       if(window.innerWidth>991){
           // Si la position du docScrollTop est supérieure à 100 alors le header sera fixed //
           if(docScrollTop>100){
               document.querySelector("header").classList.add("fixed")
           }
           else{
            document.querySelector("header").classList.remove("fixed")
           }
       }
    }

    //Lors d'un clic, on ajoute la classe active sur les liens de navigation //
     
    const navbar = document.querySelector(".navbar"); 
    a=navbar.querySelectorAll("a");

    a.forEach(function(element){
        element.addEventListener("click", function(event){

            for(let i=0; i<a.length; i++){
                a[i].classList.remove("active");
            }
            event.currentTarget.classList.add('active');

        })
    })
//------------ Header -------------- //



//------------ Ham-Burger -------------- //
const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("show");
})
//------------ Ham-Burger -------------- //