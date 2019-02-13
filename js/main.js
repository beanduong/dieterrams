(function(){
    "use strict";
    document.addEventListener("DOMContentLoaded", init(), false);
    
    function init(){
        window.addEventListener("resize", setCellSize, false);
        window.addEventListener("scroll", handleNav, false);
        window.addEventListener("scroll", handleCells, false);
        
        document.querySelector("#arrow-up").addEventListener("click", () => {
            let timer;            
            scrollToTop(0, timer, 1);
        });
        
        document.querySelector("#form-submit").addEventListener("click", (e) => {
            e.preventDefault();
            let errorList = document.querySelector("#error-list");
            while(errorList.firstChild){
                errorList.removeChild(errorList.firstChild);
            }
            
            if(document.querySelector("#form-firstname").value == ""){                
                let t = document.createTextNode("- first name is missing");
                let n = document.createElement("p");
                n.append(t);
                errorList.append(n);
            }
            if(document.querySelector("#form-lastname").value == ""){
                let t = document.createTextNode("- last name is missing");
                let n = document.createElement("p");
                n.append(t);
                errorList.append(n);
            }
            if(document.querySelector("#form-paypal").value == ""){
                let t = document.createTextNode("- email adress is missing");
                let n = document.createElement("p");
                n.append(t);
                errorList.append(n);
            }
            
            if(errorList.children.length == 0){
                let t = document.createTextNode("we have sent you a digital copy through email");
                let n = document.createElement("p");
                n.append(t);
                errorList.append(n);
            }
        });
        
        setCellSize();
        
        document.body.classList.add("visible");
    }
    
    function scrollToTop(end, timer, step){
        if(window.scrollY != 0){
            window.scrollBy(0, -step);
            timer = setTimeout(() => scrollToTop(end, timer, step + 0.5));
        }
        else{
            clearTimeout(timer);
        }
    }
    
    function handleCells(){
        let y = window.scrollY + window.innerHeight / 1.5;
        let cells = document.querySelectorAll(".cell");
        let offset = 0;
        for(let i = 0; i < cells.length; i++){
            if(cells[i].offsetTop <= y && !cells[i].classList.contains("visible")){                
                cells[i].style.transitionDelay = offset + "s";
                offset += 0.2;
                cells[i].classList.add("visible");
            }
        }
    }
    
    function handleNav(){        
        if(window.scrollY > 100){
            document.querySelector("nav").classList.add("visible");
        }
        else {
            document.querySelector("nav").classList.remove("visible");
        }
    }
    
    function setCellSize(){
        let w = document.querySelector(".cell").offsetWidth;
        let cells = document.querySelectorAll(".cell");
        for(let i = 0; i < cells.length; i++){
            cells[i].style.height = w + "px";
        }
    }
})();