const AC = e => document.createElement(e);
const body = document.body;
const style = AC('style');
document.head.append(style);
style.innerHTML = `
*{margin:0; padding:0; box-sizing:border-box;}`;

const GlobalData = Object.seal({
    language:[
        {
            link:['Home','About Us','Product','Services','Feedback'],
            proNameData:['adidas-top-sala-competition','CrazyflightBlue_P1','ipad_south-park-x-adidas-superstar','Ligra7WhiteBlue_P1','photo_side-lateral','lateral_center_view','s-l500','tennis-sportschuh-fuer','','','',''],
            proPriceData:['90$','110$','135$','105$','95$','120$','100$','115$','130$','85$','140$','80$']
        },
         {
            link:['Home','About Us','Product','Services','Feedback'], //hayeren
        },
         {
            link:['Home','About Us','Product','Services','Feedback'], // ruseren
        },
    ],
    scrollId:['#home','#about','#product','#services','#feedback'],
    images:['images/A1.jpg','images/A2.jpg','images/3.jpg','images/A4.jpg','images/A5.avif','images/A1.jpg'],
    proImg:['images/A1.jpg','images/A2.jpg','images/3.jpg','images/A4.jpg','images/A5.avif','images/A1.jpg','','','','','',''],
    rate: '$',
    totalData: [], // mejy pahvelu e tvyal apranqi gumary arten avelacvac
});

(writeTitle = () => {
    const titleName = 'Adibas shoes';
    let titleCur = 0;
    let setTitle = setInterval(() => {
        document.title = titleName.slice(0, ++titleCur);
        if(document.title == titleName){
            clearInterval(setTitle);
            setTimeout(() => {
                let setTitle2 = setInterval(() => {
                    document.title = titleName.slice(0, titleCur--);
                    if(document.title == 'A'){
                        clearInterval(setTitle2);
                        writeTitle();
                    }
                },250);
            },1000);
        }
    },250);
})();
const pageIcon = AC('link');
document.head.append(pageIcon);
pageIcon.rel = 'shortcut icon';
pageIcon.href = 'images/logo.png';

const header = AC('header');
header.style = 'background:#ccc; display: flex; align-items: center; justify-content: space-between; padding: 0 20px;';
body.append(header);
const logo = AC('a');
logo.style = 'display:block;';
logo.href = 'index.html';
header.append(logo);
const logoImg = AC('img');
logoImg.alt = 'image';
logoImg.title = 'Adibas shoes';
logoImg.src = 'images/logo.png';
logo.append(logoImg);
logoImg.setAttribute('style','height:110px; transition:.5s;');
logo.onmouseover = () => logoImg.style.transform = 'scale(-1) rotate(180deg)' ;
logo.onmouseleave = () => logoImg.style.transform = null;

const nav = AC('nav');
logo.after(nav);
const menu = AC('ul');
menu.setAttribute('style','display: flex; list-style: none;');
nav.append(menu);
GlobalData.language[0].link.forEach((item,index) => {
    const li = AC('li');
    menu.append(li);
    const a = AC('a');
    li.append(a);
    a.innerText = item;
    a.href = GlobalData.scrollId[index];
    a.style = 'color:#000; font: bold 22px cursive; margin: 0 20px; text-decoration: none; position: relative; text-transform: capitalize;';
    const after = AC('span');
    a.append(after);
    after.style = 'position: absolute; bottom: -5px; left: 0; width:100%; height: 3px; background: #000; transition: .4s; scale: 0 1; border-radius: 25px;';
    a.onmouseover = () => after.style.scale = 1;
    a.onmouseleave = () => after.style.scale = '0 1';
});

const searchBlock = AC('div');
nav.after(searchBlock);
const search = AC('input');
search.type = 'search';
searchBlock.append(search);
search.setAttribute('style', 'height: 30px; width: 220px; border-radius: 30px; border: 2px solid #000; outline: none; padding: 0 10px; font: bold 16px cursive; transition: .4s;');
search.onfocus = e => (e.target.style.background = '#000',e.target.style.color = '#fff',e.target.style.borderColor = '#fff');
search.onblur = e => (e.target.style.background = null,e.target.style.color = null,e.target.style.borderColor = '#000');
(autoWrite = () => {
    const titleName = 'Search...';
    let titleCur = 0;
    let setTitle = setInterval(() => {
        search.placeholder = titleName.slice(0,++titleCur);
        if(search.placeholder == titleName){
            clearInterval(setTitle);
            setTimeout(() => {
                let setTitle2 = setInterval(() => {
                    search.placeholder = titleName.slice(0,titleCur--);
                    if(search.placeholder == ''){
                        clearInterval(setTitle2);
                        autoWrite();
                    }
                },100);
            },1000);
        }
    },100);
})();

const slider = AC('div');
slider.setAttribute('style','overflow: hidden; height:'.concat(innerHeight - header.offsetHeight,'px'));
header.after(slider);
const chiefTitle = AC('h1');
chiefTitle.innerText = 'adibas shoes';
slider.append(chiefTitle);
chiefTitle.setAttribute('style','position: absolute; top: 50%; left: 50%; translate: -50% -50%; z-index: 1; font:bold 7vw arial; -webkit-text-stroke:2px #000; color: #ccc; text-transform: capitalize; white-space: nowrap; text-shadow: 0 8px 7px #00f,0 -10px 7px #00f;'); 
const sliderBig = AC('div');
sliderBig.setAttribute('style',`width:${GlobalData.images.length * 100}%; height: 100%; display: flex; position: relative; left: -100%; transition: .4s;`);
slider.append(sliderBig);
const sliderRadio = AC('div');
sliderRadio.style = 'position: absolute; bottom: 3%; left: 0; width:100%; text-align: center;';
slider.append(sliderRadio);

let sliderCur = -100; // -100 qani vor 2 -rd divi vra enq irakanum
let sliderBool = true; //click -y miacnel anjatelu hamar
let radCur = 0; // btn sexmeluc radionery poxvi

GlobalData.images.forEach((item, index) => {
    const list = AC('div');
    sliderBig.append(list);
    list.setAttribute('style',`width: 100%; height: 100%; background: url(${item}) no-repeat center / 100% 100%;`);
    if(index != GlobalData.images.length -1){
        const inpRad = AC('input');
        inpRad.type = 'radio';
        inpRad.name = 'repeat';
        index == 0 ? inpRad.checked = true : '';
        sliderRadio.append(inpRad);
        inpRad.style = 'width: 20px; height: 20px; margin: 0 4px; cursor: pointer; accent-color: #ccc;';
        inpRad.onchange = () => {
            sliderCur = (index + 1) * -100;
            radCur = index;
            sliderBig.style.left = sliderCur + '%';
        }
    }
});

for(let i = 0; i < 2; i++){
    const btn = AC('button');
    slider.append(btn);
    btn.setAttribute('style','padding: 15px 40px; font-size: 4.5rem; border-radius: 12px; background: #ccc8; position: absolute; top: 50%; translate: 0 -50%; cursor: pointer; color: #000; box-shadow: 0 0 15px 4px rgb(255, 138, 75);');
    i == 0 ? (btn.style.left = '3%',btn.innerHTML = '&#10096;') : (btn.style.right = '3%',btn.innerHTML = '&#10097;');
    btn.onmouseover = () => (btn.style.background = 'rgb(255, 138, 75)', btn.style.color = '#f00');
    btn.onmouseleave = () => (btn.style.background = '#ccc8', btn.style.color = '#000');
    btn.onclick = () => {
        if(i == 0) {
            if(sliderBool){
                sliderBool = false;
                sliderCur += 100;
                radCur--;
                radCur < 0 ? radCur = GlobalData.images.length -2 : '';
                if(sliderCur > 0){
                    sliderBig.style.transition = 'none';
                    sliderCur = (GlobalData.images.length -1) * -100;
                    setTimeout(() => {
                        sliderBig.style.transition = '.4s';
                        sliderCur = (GlobalData.images.length -2) * -100;
                        sliderBig.style.left = sliderCur + '%';
                    },40);
                }
                sliderBig.style.left = sliderCur + '%';
                setTimeout(() => sliderBool = true,400) // talis enq miacnelu hamar // es ameny nkary arag chpoxelu hamar e
                sliderRadio.children[radCur].checked = true;
            }
        }
        else{
            if(sliderBool){
                sliderBool = false;
                sliderCur -= 100;
                radCur++;
                radCur == GlobalData.images.length -1 ? radCur = 0 : '';
                if(sliderCur < (GlobalData.images.length -1) * -100){
                    sliderBig.style.transition = 'none';
                    sliderCur = 0;
                    setTimeout(() => {
                        sliderBig.style.transition = '.4s';
                        sliderCur = -100;
                        sliderBig.style.left = sliderCur + '%';
                    },40);
                }
                sliderBig.style.left = sliderCur + '%';
                setTimeout(() => sliderBool = true,400) // talis enq miacnelu hamar // es ameny nkary arag chpoxelu hamar e
                sliderRadio.children[radCur].checked = true;
            }
        }
    }
}

const main = AC('main');
slider.after(main);
main.style = 'display: flex; flex-wrap: wrap; justify-content: space-evenly; padding: 50px 0;';
for(let i = 0; i < 12; i++){
    const itemBlock = AC('div');
    main.append(itemBlock);
    itemBlock.style = 'width:390px; height: 460px; perspective: 850px; padding: 30px;';
    const item = AC('div');
    itemBlock.append(item);
    item.style = 'height: 100%; transition: .2s; box-shadow: 0 0 15px #0006; text-align: center; padding: 8px;';
    itemBlock.onmousemove = e =>{
        item.style.transform = `rotateY(${(e.layerX - item.offsetWidth/2)/12}deg) rotateX(${-(e.layerY - item.offsetHeight/2)/12}deg)`;
    };
    itemBlock.onmouseleave = e => item.style.transform = 'none';
    const img = AC('img');
    const proName = AC('h3');
    const price = AC('h4');
    const quantityBlock = AC('div');
    item.append(img,proName,price,quantityBlock);
    const minus = AC('div');
    const display = AC('div');
    const plus = AC('div');
    const add = AC('div');

    minus.innerText = '-';
    display.innerText = 1;
    plus.innerText = '+';
    quantityBlock.style = 'display: flex; justify-content: center; align-items: center; margin-top: 10px; padding-left: 37px; user-select: none;';
    minus.style = 'border: 1px solid #000; width: 30px; height: 30px; font: bold 18px verdana; display: grid; place-items: center; cursor: pointer;';
    display.style = 'border: 1px solid #000; width: 30px; height: 30px; font: bold 18px verdana; display: grid; place-items: center; background: #00f;';
    plus.style = 'border: 1px solid #000; width: 30px; height: 30px; font: bold 18px verdana; display: grid; place-items: center; cursor: pointer;';
    add.innerHTML = '<img src="images/cart.png" alt="cart" height="30px">';
    add.style = 'cursor: pointer; margin-left: 7px; transition: .3s; transform-origin: top left;';
    quantityBlock.append(minus,display,plus,add);
    add.onmouseover = () => add.style.rotate = '-30deg';
    add.onmouseleave = () => add.style.rotate = null;
    minus.onclick = () => display.innerText > 1 ? display.innerText-- : '';
    plus.onclick = () => display.innerText < 10 ? display.innerText++ : '';
    add.onclick = () => {
        add.style.filter = 'hue-rotate(90deg)';
        add.style.pointerEvents = 'none';
        quantityBlock.style.pointerEvents = 'none';
        quantityBlock.style.opacity = '.3';
        const line = AC('div');
        cartDisplay.append(line);
        line.style = 'border-bottom: 2px solid #fff; height: 170px; padding: 20px; display: flex; justify-content: space-between; align-items: center; transition: .5s';
        const cloneImg = img.cloneNode(true);
        cloneImg.style.width = '160px';
        cloneImg.style.height = '100%';
        const cloneName = proName.cloneNode(true);
        const clonePrice = price.cloneNode(true);
        clonePrice.style.color = '#fff';
        const myQuantity = AC('h4');
        myQuantity.innerText = 'Quantity - ' + display.innerText;   
        myQuantity.style = clonePrice.getAttribute('style');
        const total = AC('h4');
        total.innerText = 'Total - ' + display.innerText * /[0-9]+/.exec(price.innerText) + GlobalData.rate;
        GlobalData.totalData[i] = 'Total - ' + display.innerText * /[0-9]+/.exec(price.innerText);
        
        total.style = clonePrice.getAttribute('style');
        const minusPlusBlock = AC('div');
        minusPlusBlock.style = 'display: flex;';
        const cloneMinus = minus.cloneNode(true);
        const clonePlus = plus.cloneNode(true);
        cloneMinus.style.borderColor = '#fff';
        cloneMinus.style.color = '#fff';
        clonePlus.style.borderColor = '#fff';
        clonePlus.style.color = '#fff';
        cloneMinus.onclick = () => {
            display.innerText > 1 ? display.innerText-- : '';
            let x = myQuantity.innerText.slice(myQuantity.innerText.indexOf('-' +1));
            x--;
            if(x == 0){
                minusPlusBlock.style.pointerEvents = 'none';
                quantityBlock.style.pointerEvents = null;
                quantityBlock.style.opacity = null;
                add.style.filter = null;
                add.style.pointerEvents = null;
                line.style.scale = 0;
                setTimeout(() => {
                    line.remove();
                }, 500)
            }
            myQuantity.innerText = 'Quantity - ' + x;
        }
        clonePlus.onclick = () => {
            display.innerText < 10 ? display.innerText++ : '';
            let x = myQuantity.innerText.slice(myQuantity.innerText.indexOf('+' +1));
            x < 10 ? x++ : '';
            myQuantity.innerText = 'Quantity - ' + x;
        }
        minusPlusBlock.append(cloneMinus, clonePlus);
        line.append(cloneImg, cloneName, clonePrice, myQuantity, total, minusPlusBlock);        
    }
    img.src = GlobalData.proImg[i];
    img.alt = 'image';
    img.style = 'width: 100%; height: 185px; object-fit: 80% 80%;';
    proName.innerText = GlobalData.language[0].proNameData[i];
    proName.style = 'font: bold 15px verdana; color: #00f; -webkit-text-stroke:.8px #000; text-shadow: 0 2px 0 #000, 0 4px 4px #ccc;';
    price.innerText = GlobalData.language[0].proPriceData[i];
    price.style = 'margin-top: 8px; font: bold 23px verdana;';
}

const cartBlock = AC('div');
main.after(cartBlock);
cartBlock.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; backdrop-filter: blur(5px); z-index: 2; transition: 2s; display: grid; place-items: center; clip-path: circle(0 at 100% 100%); user-select: none;';
const cartDisplay = AC('div');
cartDisplay.style = 'width: 70%; height: 80vh; background: #111; border-radius: 25px; overflow: auto;';
const cartLogo = AC('div');
cartBlock.after(cartLogo);
cartLogo.innerHTML = '<img src="images/cart-logo.png" alt="cartLogo" height="70px">';
cartLogo.style = 'position: fixed; bottom: 10px; right: 10px; cursor: pointer;';
cartLogo.onclick = () => cartBlock.style.clipPath = 'circle(100%)';
const closeCart = AC('div');
// cartBlock.append(cartDisplay,closeCart);
closeCart.innerText = 'x';
closeCart.style = 'position: absolute; top: 5px; left: 50%; translate: -50%; font: bold 22px verdana; cursor: pointer;';
closeCart.onclick = () => cartBlock.style.clipPath = 'circle(0 at 100% 100%)';

/// yndhanur gumari hamar
const globalTotal = AC('h2');
globalTotal.innerText = 'Total - 0';
cartBlock.append(cartDisplay,closeCart,globalTotal);
globalTotal.style = 'background: #111; color: #fff; padding: 10px 25px; border-radius: 0 0 40px 40px;'