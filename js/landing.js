(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", init, false);

    let quote = "Less, but better.";
    let author = "Dieter Rams";
    let showCursor = true;

    function init() {
        setTimeout(loadQuote, 1000)
    }

    function loadQuote() {
        let quoteNode = document.querySelector("#quote");        
        if (quoteNode.innerHTML == "&nbsp;") {
            quoteNode.innerHTML = quote[0];            
            setTimeout(loadQuote, Math.random() * 100 + 100);
        } else if (quoteNode.innerHTML != quote) {
            quoteNode.innerHTML += quote[quoteNode.innerHTML.length];
            setTimeout(loadQuote, Math.random() * 100 + 100);
        } else {
            setTimeout(loadAuthor, 2000);
        }
    }
    
    function loadAuthor() {
        let authorNode = document.querySelector("#author");        
        if (authorNode.innerHTML == "&nbsp;") {
            authorNode.innerHTML = author[0];
            setTimeout(loadAuthor, Math.random() * 100 + 100);
        } else if (authorNode.innerHTML != author) {
            authorNode.innerHTML += author[authorNode.innerHTML.length];
            setTimeout(loadAuthor, Math.random() * 100 + 100);
        } else {
            setTimeout(hideAndRedirect, 2000);
        }        
    }

    function hideAndRedirect() {
        document.body.classList.add("hidden");
        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000);
    }
})();
