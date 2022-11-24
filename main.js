window.onload=function digitalFn(){
    let toggle=document.querySelector("#nav .toggle-btn")
    let collapse=document.querySelector("#nav .collapse")

    toggle.addEventListener("click",function(e){
        collapse.classList.toggle("active")
    });


    // mansonry js
    let grid=document.querySelector("#site-main .recent-work-area .images-flex")
    let msnry=new Masonry(grid, {
        itemSelector:".flex-item",
        gutter: 100,
        fitWidth:true
    })
}

// Rek=llax Js
var rellax = new Rellax(".rellax", {
    center: true
});
