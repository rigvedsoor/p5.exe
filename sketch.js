var house, call, tree, roy, dad, police, pill, rtx, hll, kkn, ttx1, pol, nr, cm, ttx2, wrb, zim, nr2, zgr;
var house_img,  call_img, tree_img, roy_img, dad_img, police_img, pill_img, rtx_img, hll_img, kkn_img, ttx1_img, pol_img, nr_img, cm_img, ttx2_img, wrb_img, nr2_img, zimg_img;

function preload(){
 house_img = loadImage("image/apertm.PNG");
 call_img  = loadImage("image/call.png")
 tree_img  = loadImage("image/ttr.png")
 roy_img   = loadImage("image/rry.png")
 dad_img   = loadImage("image/father.png")
 police_img= loadImage("image/eed.png")
 pill_img  = loadImage("image/ggi.png")
 rtx_img   = loadImage("image/rtx.png")
hll_img    = loadImage("image/hhl.png")
kkn_img    = loadImage("image/kkn.png")
ttx1_img   = loadImage("image/llkm.png")
pol_img    = loadImage("image/pol.png")
nr_img     = loadImage("image/ner.png")
cm_img     = loadImage("image/cmd.png")
ttx2_img   = loadImage("image/dll.png")
wrb_img    = loadImage("image/wcb.png")
zim_img    =loadImage("image/ZIMEHOUSE.jpg")
nr2_img    =loadImage("image/ner.png")
zimg_img = loadImage("image/zgr.jpg")
}

function setup() {
  createCanvas(1300,980);
   house=createSprite(650, 550);
   house.addImage(house_img)
   house.scale = 1.7                                                    

   call=createSprite(499, 880);
   call.addImage(call_img)

   tree=createSprite(220, 580)
   tree.addImage(tree_img);
   tree.scale = 2.2  

   roy=createSprite(250, 790);
   roy.addImage(roy_img)
   roy.scale = 0.7
   
   dad = createSprite(770, 650)
   dad.addImage(dad_img)
   dad.scale =  0.6

   police=createSprite(968, 520)
   police.addImage(police_img);
   police.scale = 0.7
   
   rtx = createSprite(650, 550)
   rtx.addImage(rtx_img)
   rtx.scale = 5.2
   rtx.visible=false

   pill = createSprite(650, 550)
   pill.addImage(pill_img)
   pill.visible=false
  
   hll = createSprite(650, 550)
   hll.addImage(hll_img)
   hll.scale = 0.7
   hll.visible=false
   
   kkn = createSprite(980, 822)
   kkn.addImage(kkn_img)
   kkn.scale = 0.22
   kkn.visible=false

   ttx1 = createSprite(988, 418)
   ttx1.addImage(ttx1_img)
   ttx1.scale = 0.7
   ttx1.visible=false

   plo = createSprite(988, 418)
   plo.addImage(pol_img)
   plo.visible=false
   
   nr = createSprite(1199, 855)
   nr.addImage(nr_img)
   nr.scale = 0.4
   nr.visible=false

   cm = createSprite(650, 550);
   cm.addImage(cm_img)
   cm.visible=false

   ttxt2 = createSprite(770, 160);
   ttxt2.addImage(ttx2_img)
   ttxt2.visible=false
   
   wrb = createSprite(1199, 455)
   wrb.addImage(wrb_img)
   wrb.visible=false

   zim = createSprite(650, 550)
   zim.addImage(zim_img)
   zim.scale = 4.5
   zim.visible=false
  
   nr2 = createSprite(300, 209)
   nr2.addImage(nr2_img)
   nr2.scale=0.4
   nr2.visible=false
   
   zgr= createSprite(650, 550)
   zgr.addImage(zimg_img)
   zgr.visible=false


}

function draw() {
  background(0);  
  drawSprites();
  if(mousePressedOver(call)) {
    call.visible = false
    house.visible= false
    tree.visible = false
    roy.visible  = false
    dad.visible  = false
    police.visible= false
    pill.visible  = true
    rtx.visible  = true
  }
  if(mousePressedOver(pill)){
pill.visible = false
rtx.visible  = false
hll.visible  = true
kkn.visible  = true
ttx1.visible = true

  }
  if(mousePressedOver(kkn)){
plo.visible = true
nr.visible = true
ttx1.visible = false
  }
  
  if(mousePressedOver(nr)){
    hll.visible=false
    plo.visible=false
    kkn.visible=false
    nr.visible=false
    cm.visible=true
    ttxt2.visible = true
    wrb.visible=true
  }
  if(mousePressedOver(wrb)){
    cm.visible=false
    ttxt2.visible = false
wrb.visible=false
    zim.visible=true
    nr2.visible= true
  }
  if(mousePressedOver(nr2)){
    zim.visible=true
    zgr.visible=true
  }
}