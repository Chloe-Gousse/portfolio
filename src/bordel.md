const lightboxImage=lightbox.querySelector("players");



            // Pour fermer la fenêtre en cliquant hors de l'image 

            lightbox.addEventListener("click", function(){
               if(event.target!=lightboxImage){
                    lightbox.classList.remove("show");
                    lightbox.classList.add("hide");
               }
            })




             lightboxImage.src=loadYTPlayer(event.currentTarget.getAttribute("data-video"));