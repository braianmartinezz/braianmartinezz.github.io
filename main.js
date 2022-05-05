document.querySelector('.content').style.display = 'none';
document.querySelector(".envelope a i").addEventListener("click", ()=>{
    document.querySelector(".bg").classList.toggle("click");
    if(document.querySelector('.content').style.display == 'none'){
        document.querySelector('.content').style.display = 'block';
    }else{
        document.querySelector('.content').style.display = 'none';
    }
});

/*document.querySelector('.nav-brand'),addEventListener("click", ()=>{
    document.querySelector(".bg").classList.toggle("click");
});*/