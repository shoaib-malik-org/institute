var get="";
$(".col-lg-4").on("mouseover",over);
function over(){
    get=$(this).attr("class");
    $("img").eq(get[0]).attr("class","ht-m w-100 rounded-top img-animation img-animation-3");
}
$(".col-lg-4").on("mouseout",out);
function out(){
    get=$(this).attr("class");
    $("img").eq(get[0]).attr("class","ht-m w-100 rounded-top animation");
}