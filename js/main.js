$(function(){
// ...
//alert("go");
    var cl1 = document.getElementById("client1LI");
    var cl2 = document.getElementById("client2LI");
    var cl3 = document.getElementById("client3LI");
    var cl4 = document.getElementById("client4LI");
    var clP1 = document.getElementById("client1P");
    var clP2 = document.getElementById("client2P");
    var clP3 = document.getElementById("client3P");
    var clP4 = document.getElementById("client4P");
    
    var bs1 = document.getElementById("buisiness1LI");
    var bs2 = document.getElementById("buisiness2LI");
    var bs3 = document.getElementById("buisiness3LI");
    var bs4 = document.getElementById("buisiness4LI");
    var bsP1 = document.getElementById("buisiness1P");
    var bsP2 = document.getElementById("buisiness2P");
    var bsP3 = document.getElementById("buisiness3P");
    var bsP4 = document.getElementById("buisiness4P");
    
    cl1.addEventListener("click", function(){
        clP1.style.display = "block";
        clP2.style.display = "none";
        clP3.style.display = "none";
        clP4.style.display = "none";
    });
    cl2.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "block";
        clP3.style.display = "none";
        clP4.style.display = "none";
    });
    cl3.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "none";
        clP3.style.display = "block";
        clP4.style.display = "none";
    });
    cl4.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "none";
        clP3.style.display = "none";
        clP4.style.display = "block";
    });
    
    
    
    
    bs1.addEventListener("click", function(){
        bsP1.style.display = "block";
        bsP2.style.display = "none";
        bsP3.style.display = "none";
        bsP4.style.display = "none";
    });
    bs2.addEventListener("click", function(){
        bsP1.style.display = "none";
        bsP2.style.display = "block";
        bsP3.style.display = "none";
        bsP4.style.display = "none";
    });
    bs3.addEventListener("click", function(){
        bsP1.style.display = "none";
        bsP2.style.display = "none";
        bsP3.style.display = "block";
        bsP4.style.display = "none";
    });
    bs4.addEventListener("click", function(){
        bsP1.style.display = "none";
        bsP2.style.display = "none";
        bsP3.style.display = "none";
        bsP4.style.display = "block";
    });
    
    /*
    var cl1 = document.getElementById("client1LI");
    var cl2 = document.getElementById("client2LI");
    var cl3 = document.getElementById("client3LI");
    var cl4 = document.getElementById("client4LI");
    var clP1 = document.getElementById("client1P");
    var clP2 = document.getElementById("client2P");
    var clP3 = document.getElementById("client3P");
    var clP4 = document.getElementById("client4P");
    cl1.addEventListener("click", function(){
        clP1.style.display = "block";
        clP2.style.display = "none";
        clP3.style.display = "none";
        clP4.style.display = "none";
    });
    cl2.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "block";
        clP3.style.display = "none";
        clP4.style.display = "none";
    });
    cl3.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "none";
        clP3.style.display = "block";
        clP4.style.display = "none";
    });
    cl4.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "none";
        clP3.style.display = "none";
        clP4.style.display = "block";
    });
    
    
    var cl1 = document.getElementById("client1LI");
    var cl2 = document.getElementById("client2LI");
    var cl3 = document.getElementById("client3LI");
    var cl4 = document.getElementById("client4LI");
    var clP1 = document.getElementById("client1P");
    var clP2 = document.getElementById("client2P");
    var clP3 = document.getElementById("client3P");
    var clP4 = document.getElementById("client4P");
    cl1.addEventListener("click", function(){
        clP1.style.display = "block";
        clP2.style.display = "none";
        clP3.style.display = "none";
        clP4.style.display = "none";
    });
    cl2.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "block";
        clP3.style.display = "none";
        clP4.style.display = "none";
    });
    cl3.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "none";
        clP3.style.display = "block";
        clP4.style.display = "none";
    });
    cl4.addEventListener("click", function(){
        clP1.style.display = "none";
        clP2.style.display = "none";
        clP3.style.display = "none";
        clP4.style.display = "block";
    });*/
});
