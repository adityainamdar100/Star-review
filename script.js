/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
 
 function Star(el, count, callback) {
	// Write a logic to create star rating problem
  let parent = document.getElementById('star');
  for(let j=1;j<=count;j++) {
  	let a = document.createElement('a');
    a.classList.add(`star`);
  	let i = document.createElement('i');
    a.setAttribute("href",'#');
    i.setAttribute("id",`star`+j);
    i.classList.add(`fa`);
    i.classList.add(`fa-star-o`);
    a.appendChild(i);
    parent.appendChild(a); 
  }
  let cnt = 0;
  document.getElementById('star').addEventListener("click", function(e){
    cnt = 0;
    for(let i=1;i<=count;i++) {
    	document.getElementById('star'+i).classList.remove('fa-star');
    }
  	if(e.target) {
    	for(let i=1;i<=parseInt(e.target.id[e.target.id.length-1]);i++) {
      	document.getElementById('star'+i).classList.add('fa-star');
        document.getElementById('star'+i).classList.add('fa-star-o');
        cnt += 1;
      }
    }
    if(cnt > 0) {
    	getStar(cnt);
    } else if(cnt === 0) {
    	document.getElementById("display-star").innerHTML = '';
    }
    
  });
  
  document.getElementById('star').addEventListener("mouseover", function(e){
  	if(e.target) {
    	for(let i=1;i<=parseInt(e.target.id[e.target.id.length-1]);i++) {
      	document.getElementById('star'+i).classList.add('fa-star');
      }
    }
  });
  
  document.getElementById('star').addEventListener("mouseout", function(e){
  	if(e.target) {
    	for(let i=1;i<=parseInt(e.target.id[e.target.id.length-1]);i++) {
      	document.getElementById('star'+i).classList.remove('fa-star');
      }
      for(let i=1;i<=cnt;i++){
      	document.getElementById('star'+i).classList.add('fa-star');
      }
    }
  });
}
