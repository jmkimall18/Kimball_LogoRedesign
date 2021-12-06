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
tl.from("#bird1", {duration: .5, drawSVG:"170% 170%", });

return tl;
}

function Frame_79(){
const tl = gsap.timeline({repeat: 0,});

tl.from("#Vectorrr4", { duration: .5, ease: "bounce.out", y: 700 },"same");
tl.from("#Vectorrr3", { duration: .5, ease: "bounce.out", y: -700 },"same");
tl.to("#Vectorrr4", {duration:0.06, opacity: 0},);
tl.to("#Vectorrr3", {duration:.06, opacity: 0},);
tl.from("#new5", {ease: 7, duration: .08, drawSVG:"100% 100%",stagger: 0.2 });
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

tl.from("#bird2", {duration: 2, drawSVG:"200% 200%", });


return tl;
}

function Frame_80(){
    const tl = gsap.timeline({repeat: 0,});
tl.from("#fill1", { duration: .5, opacity: 0 },"same");
tl.from("#fill2", { duration: .5, opacity: 0 },"same");


return tl;

}


function Frame_81(){
    const tl = gsap.timeline({repeat: 0,});

    tl.from("#beak", { duration: 1, opacity: 0 },);
    tl.to("#fill1", { duration: 1, opacity: 0 },);
    tl.to("#bird1", {duration: 1, drawSVG:"200% 200%", },"same");


    tl.from("#clipPath-1", { duration: 1, opacity: 0 },);
    tl.from("#map", { duration: 1, x:"-85", });

 


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
  tl.from("#point", { duration: .5, opacity: 0 },);

  
  tl.to("#point", {duration: .2,morphSVG:"#drop1"},);
  tl.to("#point", {duration: .2,opacity: .6, morphSVG:"#drop2"},);
  tl.to("#point", {duration: .2, opacity: .5 ,morphSVG:"#drop3"},);
  tl.to("#point", {duration: .2, opacity: .4 ,morphSVG:"#drop4"},);
  tl.to("#point", {duration: .2, opacity: .3 ,morphSVG:"#drop5"},);
  tl.to("#point", {duration: .2, opacity: 0 ,morphSVG:"#drop6"},);


  tl.to("#bird2", {duration: .4, drawSVG:"200% 200%", });
  tl.to("#fill2", { duration: .4, rotate:360 },);

  tl.to("#fill2", {duration: .05,morphSVG:"#small2"},);
  tl.to("#small2", { duration: .04, opacity: 0 },);


return tl;

}

mainTL.add(Frame_78())
.add(Frame_79())
.add(Frame_80())
.add(Frame_81());

GSDevTools.create();
