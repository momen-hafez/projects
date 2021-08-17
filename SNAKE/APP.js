const header = document.querySelector(".header");
const bdy = document.querySelector('body');
const snake = document.querySelector(".tall");
const head = document.querySelector(".ball");
const food = document.querySelector(".food");
let i = 0 ;
let Keys = { up: false,down: false,left: false,right: false};
let inte0;
let inte1;
let interval;
let interval1;
let interval2;
let interval3;
let interval11;
let isRun = false;
let inte = 30 ;
let vleft = -14;
let vright = 19;
let newC;
let allBalls = document.querySelectorAll('.newBall') ;
let Balls = document.querySelector('.newBall') ;
let pr = 0 ;
let xDown = 16 , yDown = 16;
let xLeft ;
let pr1 = 0;
let sebling = [];
let sebling1 = [];
let inc = 0 ;
let headD;
let headInt;
function reset(){
   Keys = {
        up: false,
        down: false,
        left: false,
        right: false
      };	
}
var idx1 = 0 ;
var idx2 = 0;
function changePosition(){
	let randY = Math.floor(Math.random() * 1000);
	let randX = Math.floor(Math.random() * 500);
	if( randY <= 770){
		food.style.left=`${randY}px`; 
	}
	if( randX <= 460){
		food.style.bottom=`${randX}px`; 
	}
}
changePosition();
window.onkeydown = function(e) {
	reset();
	clearInterval(interval);
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	console.log(e.keyCode);
    var kc = e.keyCode;
    if (kc === 37){
		Keys.left = true; 
	}
    else if(kc === 38){
		Keys.up = true;
	}
    else if(kc === 39) {
		Keys.right = true;
	}
    else if(kc === 40){
		Keys.down = true;
	}
	//////////////////////////////////////////////////////

	if(Keys.up) {
	    headN = head.style.bottom;
	    headNInt = parseInt(headN,10);
 		interval = setInterval(()=>{
			idx1+=5;			
			head.style.bottom =`${idx1}px`;
			allBalls.forEach(ball =>{
			let x = 585 - idx1;
			 ball.style.top =`${x}px`; 
					});			
			if(checkPosition())
				changePosition();
			if(idx1 >= 455) 
				idx1 = 0;
	 	},inte);	
    }
	//////////////////////////////////////////////////////

    else if(Keys.down) {// ------------------> DONE 
	    headN = head.style.bottom;
	    headNInt = parseInt(headN,10);
		pr = 0;
		yDown = 16;
		sebling1 = [] ;
		allBalls.forEach(ball => {
			sebling1.push(ball);
		})
		if(allBalls.length > 0){
			 
			  let t; 
			 t = 0;
			const zz = idx1;
			let direction = setInterval(()=>{
			let y = 585 - zz;
			 sebling1[t].style.top =`${y}px`;
				t++;
			if(t == sebling1.length)
				clearInterval(direction);
			},inte);
		const width = head.style.left;
		let r = 0;
		let se = head.style.left;
		let seInt = parseInt(se,10);
		console.log(headInt," -> ",seInt+15);
		if(seInt - headInt > 0){
		pr = 0 ;
		let rt = 0;
		head.style.left =`${idx2 - 15}px`; 
		interval1 = setInterval(()=>{
			idx1-=5;
			r++;
			head.style.bottom =`${idx1}px`; 
			    if(r == 3){
					if(sebling1.length - 1 - pr >= 0){
						xDown = 12*(sebling1.length - 1 - pr);
						sebling1[sebling1.length - 1 - pr].style.transform = `translate(${xDown  }px,${12 * pr +8}px)`;
						pr++;
						r = 0;
					}
				}
			if(pr == sebling1.length){
				let tw = 12;
				for(let ii = sebling1.length - 1 ; ii >= 0 ; ii--){
					(ii == 0) ? tw = 0 : tw = 12;
					sebling1[ii].style.top = `${585 - (sebling1.length+1) * 12 - idx1}px`;
				}
			}
			 if(checkPosition())
				changePosition();
			 if(idx1 <= 0) 
			idx1 = 455;
	 	    },inte);
		}else{
			r = 0;
			pr = sebling1.length - 1 ;
		    head.style.left =`${idx2 +9}px`; 
			interval1 = setInterval(()=>{
			idx1-=5;
			r++;
			head.style.bottom =`${idx1}px`; 
			    if(r == 3){
					if(pr >= 0){
						xDown = 12*(pr);
						sebling1[pr].style.transform = `translate(-${xDown}px,${12 * (sebling1.length - 1 - pr) +8}px)`;
						pr--;
						r = 0;
					}
				}
			if(pr == -1){
				let tw = 12;
				for(let ii = sebling1.length - 1 ; ii >= 0 ; ii--){
					(ii == 0) ? tw = 0 : tw = 12;
					sebling1[ii].style.top = `${585 - (sebling1.length+1) * 12 - idx1}px`;
				}
			}
			 if(checkPosition())
				changePosition();
			 if(idx1 <= 0) 
			idx1 = 455;
	 	    },inte);

		}

		}
	}

//////////////////////////////////////////////////////
    else if(Keys.left) {
		headN = head.style.left;
	    headNInt = parseInt(headD,10);
		if(!(headInt < 0) && !(headInt >= 0) ) headInt = 0;
		console.log(headInt);
    	interval2=setInterval(()=>{
			idx2-=5;
			head.style.left =`${idx2}px`;
		    let idxx = 12 ;
			allBalls.forEach(ball =>{
			 ball.style.left =`${idx2 + idxx}px`;
			 idxx += 12 ;
			});
			if(checkPosition())
				changePosition();			
			if(idx2 <= 0) 
				idx2 = 765;
	 	},inte);
    }
	//////////////////////////////////////////////////////

    else if(Keys.right) {
	    headD = head.style.left;
	    headInt = parseInt(headD,10);
	    if(!(headInt < 0) && !(headInt >= 0) ) headInt = 0;
	    console.log(headInt);
		sebling = [] ;
		allBalls.forEach(ball => {
			sebling.push(ball);
		})
		if(allBalls.length > 0){
			let t = 0 ;
			let top = head.style.top;
			let topInt = 585 - parseInt(top,10);
			let direction = setInterval(()=>{
			sebling[t].style.transform = `translate(0px,${topInt - 12 * t}px)`;
				t++;
			if(t == sebling.length)
				clearInterval(direction);
			},inte);
		      let seD = head.style.bottom;
		      let sedInt = parseInt(seD,10);

             /*			idx1-=5;
			r++;
			head.style.bottom =`${idx1}px`; 
			    if(r == 3){
					if(pr >= 0){
						xDown = 12*(pr);
						sebling1[pr].style.transform = `translate(-${xDown}px,${12 * (sebling1.length - 1 - pr) +8}px)`;
						pr--;
						r = 0;
					}
				}
			if(pr == -1){
				let tw = 12;
				for(let ii = sebling1.length - 1 ; ii >= 0 ; ii--){
					(ii == 0) ? tw = 0 : tw = 12;
					sebling1[ii].style.top = `${585 - (sebling1.length+1) * 12 - idx1}px`;
				}
			}*/
			
		let r = 0 ;
		pr1 = 0;
		if(sedInt - headNInt > 0){ 
		head.style.bottom =`${idx1 - 8}px`; 
    	 interval3 = setInterval(()=>{
			 let headLeft = head.style.left ;
		    let headLeftInt = parseInt(headLeft,10);
			idx2+=5;
			r++;
			head.style.left =`${idx2}px`; 
			if(r == 3){
				if(pr1<sebling.length){
				sebling[pr1].style.transform = `translate(${0}px,${8}px)`;
				pr1++;
				r = 0;
				}
			}
			if(pr1 == sebling.length){
 				for(let ii = sebling.length-1 ; ii >= 0 ; ii--){
					console.log(ii);
					sebling[ii].style.left = `${idx2 - ii*12}px`;
					}
				  }
			 if(checkPosition())
				changePosition();			 
			if(idx2 >= 765) 
				idx2 = 0;
	 	 },inte);
			
	  }else{
		  r = 0 ;
		  pr1 = sebling.length - 1;
		 head.style.bottom =`${idx1 + 20}px`; 
    	 interval3 = setInterval(()=>{
			 let headLeft = head.style.left ;
		    let headLeftInt = parseInt(headLeft,10);
			idx2+=5;
			r++;
			head.style.left =`${idx2}px`; 
			if(r == 3){
				if(pr1>= 0){
				sebling[pr1].style.transform = `translate(${(sebling.length - 1 - pr)*12}px,${(pr1 + 1 ) * 12}px)`;
				pr1--;
				r = 0;
				}
			}
			if(pr1 == -1){
 				for(let ii = sebling.length-1 ; ii >= 0 ; ii--){
					console.log(ii);
					sebling[ii].style.left = `${idx2 - ii*12}px`;
					}
				  }
			 if(checkPosition())
				changePosition();			 
			if(idx2 >= 765) 
				idx2 = 0;
	 	 },inte);

		  
	  }
	}

    }
};
//////////////////////////////////////////////////////

function checkPosition(){
	if(Math.abs(food.offsetLeft - head.offsetLeft)<=10 && Math.abs(food.offsetTop - head.offsetTop)<=10){                                                                          
		newC = document.createElement('div');
		newC.classList.add('all');
		header.appendChild(newC).classList.add(`newBall`);
		allBalls = document.querySelectorAll('.newBall');
		header.appendChild(newC).classList.add(`n${i}`);
		document.querySelector(`.n${i}`).style.left = `${vleft}px`;
		vleft -= 15;
		i++;
		
		return true;
	}
}

