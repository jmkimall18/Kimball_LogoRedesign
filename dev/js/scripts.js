
import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";



gsap.registerPlugin(GSDevTools, DrawSVGPlugin, CustomEase, MorphSVGPlugin);

MorphSVGPlugin.convertToPath();


const mainTL = gsap.timeline();

function Frame_78(){
const tl = gsap.timeline({repeat: 0});

tl.to("#Vector1", {duration: .35, morphSVG:"#Vector2"});











}


mainTL
.add(Frame_78())



GSDevTools.create();