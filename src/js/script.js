
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
const lightboxImage=lightbox.querySelector("iframe");

            // Pour fermer la fenêtre en cliquant hors de l'image 

            lightbox.addEventListener("click", function(){
               if(event.target!=lightboxImage){
                    lightbox.classList.remove("show");
                    lightbox.classList.add("hide");
               }
            })

            // La fenêtre se ferme lorsqu'on clique sur la croix //

            closeLightbox.addEventListener("click", function(){
                lightbox.classList.remove("show");
                lightbox.classList.add("hide");
            })

            // La fenêtre apparait lorsqu'on clique sur le bouton plus //

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

            galleryItem.forEach(function(element){
                element.querySelector(".fa-play").addEventListener("click", function(event){
                    lightbox.classList.remove("hide");
                    lightbox.classList.add("show");
                    lightboxImage.src=event.currentTarget.getAttribute("data-video");
                    lightboxImage.contentWindow.location.reload();
                })
            }) 
        // ----- Lightbox ------ //
//------------ Gallery ------------- //








//------------PopUp -----------------


// const closePopup=document.querySelector(".close-popup");
// const popup=document.querySelector(".popup");
// const popupImage=popup.querySelector("iframe");

//             //Pour fermer la fenêtre en cliquant hors de l'image 

//             popup.addEventListener("click", function(){
//                if(event.target!=popupImage){
//                     popup.classList.remove("show");
//                     popup.classList.add("hide");
//                }
//             })

//             //La fenêtre se ferme lorsqu'on clique sur la croix //

//             closePopup.addEventListener("click", function(){
//                 popup.classList.remove("show");
//                 popup.classList.add("hide");
//             })

            // La fenêtre apparait lorsqu'on clique sur le bouton plus //

// const illustration=document.querySelector(".illustration");
// const illustrationItem=illustration.querySelectorAll(".illustration-item");

//             illustrationItem.forEach(function(element){
//                 element.querySelector(".fa-play").addEventListener("click", function(event){
//                     popup.classList.remove("hide");
//                     popup.classList.add("show");
//                     popupImage.src=event.currentTarget.getAttribute("data-video");
//                     popupImage.contentWindow.location.reload();
//                 })
//             }) 



// ----------PopUp ------------------//





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
        addEventListener("click", function(){

            for(let i=0; i<a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active")
            // pour fermer la navbar lorsque je clique sur le lien //
            document.querySelector(".navbar").classList.toggle("show");

        })
    })
//------------ Header -------------- //



//------------ Ham-Burger -------------- //
const hamBurger=document.querySelector(".ham-burger");

hamBurger=addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("show");
})
//------------ Ham-Burger -------------- //


