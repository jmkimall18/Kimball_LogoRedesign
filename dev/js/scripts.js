import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin} from "gsap/MotionPathPlugin";
import { MotionPathHelper} from "gsap/MotionPathHelper";






gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin, MotionPathHelper);


MorphSVGPlugin.convertToPath("#Vector1, #Vector2, #Vector3");


const mainTL = gsap.timeline();

function Frame_78(){
const tl = gsap.timeline({repeat: 0});
tl.from("#Vector1", { duration: 1.5, ease: "bounce.out", y: 800 },"same");
tl.from("#Vector2", { duration: 1.5, ease: "bounce.out", y: -800 },"same");
tl.to("#Vector1", {duration:0.06, opacity: 0});
tl.to("#Vector2", {duration:.06, opacity: 0},);
tl.from("#Vector_8", {duration: .1, drawSVG:"", });
tl.to("#Vector_8", {duration:0, opacity: 0},);
tl.from("#Vector_7", {duration: .1, drawSVG:"", stagger: 0.2},);
tl.to("#Vector_7", {duration:0, opacity: 0},);
tl.from("#Vector_6", {ease: 7, duration: .1, drawSVG:"", },);
tl.to("#Vector_6", {duration:.0, opacity: 0},);
tl.from("#Vector_5", {ease: 7, duration: .1, drawSVG:"",stagger: 0.2 });
tl.to("#Vector_5", { ease: 7,duration:.0, opacity: 0,},);
tl.from("#Vector_4", {ease: 7, duration: .1, drawSVG:"",stagger: 0.2 });
tl.to("#Vector_4", { ease: 7,duration:.0, opacity: 0,},);
tl.from("#Vector_3", {ease: 7, duration: .1, drawSVG:"",stagger: 0.2 });
tl.to("#Vector_3", { ease: 7,duration:.0, opacity: 0,},);
tl.from("#Vector_2", {ease: 7, duration: .1, drawSVG:"",stagger: 0.2 });
tl.to("#Vector_2", { ease: 7,duration:.0, opacity: 0,},);
tl.from("#Vector", {ease: 7, duration: .1, drawSVG:"",stagger: 0.2 });

tl.to("#Vector", { ease: 7,duration:.0, opacity: 0,},);
tl.from("#bird1", {duration: .7, drawSVG:"170% 170%", });

return tl;
}

function Frame_79(){
const tl = gsap.timeline({repeat: 0,});

tl.from("#Vectorrr4", { duration: 1, ease: "bounce.out", y: 700 },"same");
tl.from("#Vectorrr3", { duration: 1, ease: "bounce.out", y: -700 },"same");
tl.to("#Vectorrr4", {duration:0.06, opacity: 0},);
tl.to("#Vectorrr3", {duration:.06, opacity: 0},);
tl.from("#new5", {ease: 7, duration: .05, drawSVG:"100% 100%",stagger: 0.2 });
tl.to("#new5", { ease: 7,duration:.0, opacity: 0});
tl.from("#new4", {ease: 7, duration: .1, drawSVG:"100% 100%",stagger: 0.2 },);
tl.to("#new4", { ease: 7,duration:.0, opacity: 0},);
tl.from("#new2", {ease: 7, duration: .1, drawSVG:"100% 100%",stagger: 0.2 },);
tl.to("#new2", { ease: 7,duration:.0, opacity: 0,},);
tl.from("#new8", {duration: .1, drawSVG:"100% 100%", },);
tl.to("#new8", {duration:0, opacity: 0},);
tl.from("#new6", {ease: 7, duration: .1, drawSVG:"100% 100%", },);
tl.to("#new6", {duration:.0, opacity: 0},);
tl.from("#new9", {ease: 7, duration: .1, drawSVG:"100% 100%", },);
tl.to("#new9", {duration:.0, opacity: 0},);
tl.from("#new10", {ease: 7, duration: .1, drawSVG:"100% 100%", },);
tl.to("#new10", {duration:.0, opacity: 0},);
tl.from("#new11", {ease: 7, duration: .1, drawSVG:"100% 100%", },);
tl.to("#new11", {duration:.0, opacity: 0},);

tl.from("#bird2", {duration: .9, drawSVG:"200% 200%", });


return tl;
}

function Frame_80(){
    const tl = gsap.timeline({repeat: 0,});
tl.from("#fill1", { duration: .3, opacity: 0 },"same");
tl.from("#fill2", { duration: .3, opacity: 0 },"same");


return tl;

}


function Frame_81(){
    const tl = gsap.timeline({repeat: 0,});

    tl.from("#beak", { duration: .3, opacity: 0 },);
    tl.to("#fill1", { duration: .5, opacity: 0 },);
    tl.to("#bird1", {duration: .5, drawSVG:"200% 200%", },"same");


    tl.from("#clipPath-1", { duration: .7, opacity: 0 },);
    tl.from("#map", { duration: .7, x:"-85", });

 


tl.to("#beak", {
    duration: 1,
    motionPath: {
      path: "#mainPath",
      align: "#mainPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    },
    scale: 1.5,
    yoyo: true,
    ease: "power3.inOut"
  });

  tl.to("#beak", { duration: .02, opacity: 0 },);
  tl.from("#point", { duration: .05, opacity: 0 },);

  
  tl.to("#point", {duration: .08,morphSVG:"#drop1"},);
  tl.to("#point", {duration: .08,opacity: .6, morphSVG:"#drop2"},);
  tl.to("#point", {duration: .08, opacity: .5 ,morphSVG:"#drop3"},);
  tl.to("#point", {duration: .08, opacity: .4 ,morphSVG:"#drop4"},);
  tl.to("#point", {duration: .08, opacity: .3 ,morphSVG:"#drop5"},);
  tl.to("#point", {duration: .08, opacity: 0 ,morphSVG:"#drop6"},);


  tl.to("#bird2", {duration: .4, drawSVG:"200% 200%", });
  tl.to("#fill2", { duration: .8, rotate:360 },);

  tl.to("#fill2", {duration: .4,morphSVG:"#small2"},);
  tl.to("#fill2", { duration: .09, opacity: 0 },);


tl.to("#map", { duration: .1, scale:.1, transformOrigin:"20% center",x:+15 }, "+=1" );
tl.from("#small", { duration: .1, opacity: 0, },);

tl.from("#first", { duration: .4,y: -1200, width: 5, scale: 5},);
tl.from("#second", { duration: .4,y: -1200, x:-1500, width: 5, scale: 5},);
tl.from("#third", { duration: .4,y: 1200, width: 5, scale: 5},);
tl.from("#fourth", { duration: .4,x: 1200, width: 5, scale: 5},);
tl.from("#fifth", { duration: .4,y: 1200, width: 5, scale: 5},);


tl.from("#house2", {duration: 1, drawSVG:"", });
tl.from("#house1", {duration: 1, drawSVG:"", });





return tl;


}

function Frame_85(){

    const tl = gsap.timeline({repeat: 0,});

   

    tl.from(".the", {rotation: 360, y: 700, duration:.4, stagger:.1 });

    tl.from(".nesting", {rotation: 360, y: 700, duration:.4, stagger:.1 });

    tl.from(".house", {rotation: 180, y: 700, duration:.4, stagger:.1 });


    //tl.from("#h", {rotation: 360, y: 700, duration: .4});
   // tl.from("#e", {rotation: 360, y: 700, duration: .4});

   // tl.from("#n", { duration: 2.5, ease: "elastic.out(1, 0.3)", y: 700});


    return tl;

    
}


mainTL.add(Frame_78())

.add(Frame_79())
.add(Frame_80())
.add(Frame_81())
.add(Frame_85());

GSDevTools.create();
