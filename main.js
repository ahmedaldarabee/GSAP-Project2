// when we want to be started?
    // when access this element: .two 
var cans = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"80% 60%",
    scrub:true,
}});

// the element that we want to animated!
cans.to("#cans",{
    top:"145%",
    left:"77%",
    width:"30%",
    rotate:"-30deg"
},'cans')
// ,'cans' here be as normal dependency where when #cans move,
//  the another element with the same dependency it will move.

cans.to("#leaf",{
    top:"153%",
    left:"75%",
    rotate:"0deg",
    width:"12%",
},'cans');

cans.to("#blackberry1",{
    top:"114%",
    left:"5%",
    width:"5%",
    rotate:"100deg"
},'cans')

cans.to("#blackberry2",{
    top:"125%",
    left:"83%",
    width:"12%",
    rotate:"100deg"
},'cans')

cans.to("#blackberry3",{
    top:"163%",
    left:"70%",
    width:"5%",
    rotate:"60deg"
},'cans')

// Now when we want to access another section, we needed to define another timeline

var cans2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
}});

// the element that we need to move it!
cans2.to("#cans",{
    top:"237%",
    left:"53%",
    width:"30%",
    rotate:"0deg",
},'cans');