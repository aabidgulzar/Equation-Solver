
let changeMode=false;
let containerColor=1;
let a=document.getElementById('dark-mode');
a.addEventListener('click',function(){
    changeMode=!changeMode
    if(changeMode){ 
    let element1=document.body;
    element1.className='darkmode';
        document.getElementById('dark-mode').innerText='Light Mode';
        containerColor++;
    }
    else{
    let element1=document.body;
    element1.className='lightmode';
        document.getElementById('dark-mode').innerText='Dark Mode';
        containerColor++;
    }
});



let detForm = document.getElementById('inputs');
detForm.addEventListener('submit',solveEn);


function solveEn(event){
    event.preventDefault();
    //id importing
    let whole=document.getElementById('solve_container');
    let leng=document.getElementById('solve_container').children.length;
    if(leng>0){
        const rem=document.getElementById('solve_container');
        rem.removeChild(rem.children[0]);
    }
    if(leng>=0){
        const rem=document.getElementById('solve_container');
        rem.style.backgroundColor='antiquewhite';
        rem.style.boxShadow= '0px 0px 10px black';
        
        if(containerColor%2==0){
            rem.style.backgroundColor='rgb(57, 57, 57)';
        rem.style.border='1px solid  rgb(255, 0, 119)';
        }
    }
    //variable for container
    let container=document.createElement('div');
    container.className='container'
    whole.appendChild(container);
    
    //h1
    let h1=document.createElement('h1');
    let h1t=document.createTextNode(`Answer`);
    h1.appendChild(h1t);
    container.appendChild(h1);


    //h5
    let h5=document.createElement('h5');
    let h5t=document.createTextNode("Given pair of linear equations are:");
    h5.appendChild(h5t);
    container.appendChild(h5);

    //now importing data from form tag
    let a1=event.target.elements['a1'].value;
    a1=parseFloat(a1);
    let b1=event.target.elements['b1'].value;
    b1=parseFloat(b1);
    let c1=event.target.elements['c1'].value;
    c1=parseFloat(c1);
    let a2=event.target.elements['a2'].value;
    a2=parseFloat(a2);
    let b2=event.target.elements['b2'].value;
    b2=parseFloat(b2);
    let c2=event.target.elements['c2'].value;
    c2=parseFloat(c2);



    //importing in another function
    let solve=solveFunction(a1,b1,c1,a2,b2,c2);
    container.appendChild(solve);


 for(let i=0; i<detForm.length; i++){
        detForm.elements[i].value="";
        if(i==detForm.length-1){
            detForm.elements[i].value="Solve";
        }
    }

}


function solveFunction(a1,b1,c1,a2,b2,c2){
    
//div
 let div=document.createElement('div');

//h6
   let h6=document.createElement('h6');

    if(a1>0){
        let h6t=document.createTextNode(`${a1}x`);
        h6.appendChild(h6t);
    }
    else if(a1===0){
        let er=handleError();
        div.appendChild(er);
        return div
        }
    else{
        let h6t=document.createTextNode(`${a1}x`);
        h6.appendChild(h6t);
    }
    if(b1>0){
        let b1t=document.createTextNode(`+${b1}y`);
        h6.appendChild(b1t);
    }
    else if(b1===0){
        let er=handleError();
        div.appendChild(er);
        return div
        }
    else{
        let b1t=document.createTextNode(`${b1}y`);
        h6.appendChild(b1t);
    }
    if(c1>0){
        let c1t=document.createTextNode(`+${c1}=0----(1)`);
        h6.appendChild(c1t);
    }
    else if(c1===0){
        let c1t=document.createTextNode(`=0----(1)`);
        h6.appendChild(c1t);
        }
    else if(c1>1||c1<1){
        let c1t=document.createTextNode(`${c1}=0-----(2)`);
        h6.appendChild(c1t); 
    }
    else{
        c1=0;
        let c1t=document.createTextNode(`=0-----(2)`);
        h6.appendChild(c1t); 
    }

    let br=document.createElement('br');
    h6.appendChild(br);

    if(a2>0){
        let a2t=document.createTextNode(`${a2}x`);
        h6.appendChild(a2t);     
    }
    else if(a2===0){
        let er=handleError();
        div.appendChild(er);
        return div
        }
    else{
        let a2t=document.createTextNode(`${a2}x`);
        h6.appendChild(a2t); 
    }
    if(b2>0){
        let b2t=document.createTextNode(`+${b2}y`);
        h6.appendChild(b2t); 
    }
    else if(b2===0){
        let er=handleError();
        div.appendChild(er);
        return div
        }
    else{
        let b2t=document.createTextNode(`${b2}y`);
        h6.appendChild(b2t); 
    }
    if(c2>0){
        let c2t=document.createTextNode(`+${c2}=0-----(2)`);
        h6.appendChild(c2t); 
    }
    else if(c2===0){
        let c2t=document.createTextNode(`=0-----(2)`);
        h6.appendChild(c2t); 
        }
    else if(c2>1||c2<1){
        let c2t=document.createTextNode(`${c2}=0-----(2)`);
        h6.appendChild(c2t); 
    }
    else{
        c2=0;
        let c2t=document.createTextNode(`=0-----(2)`);
        h6.appendChild(c2t); 
    }
    div.appendChild(h6);

    if( (a1/a2 == b1/b2) && (b1/b2 == c1/c2)){
        let err=document.createElement('h3');
        err.className='errors';
        let errt=document.createTextNode('Error! Infinite possible solutions & coincident(graphically:___)');
        err.appendChild(errt);
        div.appendChild(err);
        return div;
    } 
    else if( a1/a2 != b1/b2){
        let err=document.createElement('h3');
        err.className='sols';
        let errt=document.createTextNode("Unique solution & intersect at exactly one point(graphically:><)");

        err.appendChild(errt);
        div.appendChild(err);
    }
    else if( (a1/a2 == b1/b2) && (b1/b2 != c1/c2)){

        let err=document.createElement('h3');
        err.className='errors';
        let errt=document.createTextNode('Error! No possible solution & parallel(graphically:||)');
        err.appendChild(errt);
        div.appendChild(err);
        return div;
    } 
    

    //p
    let p=document.createElement('p');
    let pt=document.createTextNode('We know that,');
    p.appendChild(pt);
    div.appendChild(p);

//span

     let span=document.createElement('span');
     let spant=document.createTextNode('X = ');
     span.appendChild(spant);
    div.appendChild(span);

//p

    let p1=document.createElement('p');
    let p1t=document.createTextNode('1');
    let hr=document.createElement('hr');
    p1.appendChild(p1t);
    p1.appendChild(hr);
    let p1t2=document.createTextNode('(a1*b2-a2*b1)*(b1*c2-b2*c1)');
    p1.appendChild(p1t2);
    div.appendChild(p1);


//span2 for y

let span1=document.createElement('span');
let spant1=document.createTextNode('Y = ');
span1.appendChild(spant1);
div.appendChild(span1);

//p2 for y
    let p2=document.createElement('p');
    let p2t=document.createTextNode('1');
    let hr1=document.createElement('hr');
    p2.appendChild(p2t);
    p2.appendChild(hr1);
    let p2t2=document.createTextNode('(a1*b2-a2*b1)*(c1*a2-c2*a1)');
    p2.appendChild(p2t2);
    div.appendChild(p2);

    let p3val=document.createElement('p');
    let p3tval=document.createTextNode('therefore,');
    p3val.appendChild(p3tval);
    div.appendChild(p3val);
    
    let vals=handleValues(a1,b1,c1,a2,b2,c2);
    div.appendChild(vals);



//p
    let p3=document.createElement('p');
    let p3t=document.createTextNode('hence,');
    p3.appendChild(p3t);
    div.appendChild(p3);

    //solving
    let x=(1/((a1*b2)-(a2*b1))*((b1*c2)-(b2*c1)));
    let y=(1/((a1*b2)-(a2*b1))*((c1*a2)-(c2*a1)));
    
    x=x.toFixed(3);
    y=y.toFixed(3);


    


    let xval=document.createElement('p');
    let xp=document.createTextNode(`X=${x}`);
    xval.appendChild(xp);
    div.appendChild(xval);



    let xval1=document.createElement('p');
    let xp1=document.createTextNode(`Y=${y}`);
    xval1.appendChild(xp1);
    div.appendChild(xval1);




    return div;

}


function handleError(){

    let error=document.createElement('h1');
        let texterror=document.createTextNode('Equation Error!');
        error.style.color='red';
        error.appendChild(texterror);
        return error
}


function handleValues(a1,b1,c1,a2,b2,c2){
    let div=document.createElement('div');
    let span=document.createElement('span');
    let spant=document.createTextNode('X = ');
    span.appendChild(spant);
   div.appendChild(span);

//p

   let p1=document.createElement('p');
   let p1t=document.createTextNode('1');
   let hr=document.createElement('hr');
   p1.appendChild(p1t);
   p1.appendChild(hr);
   let p1t2=document.createTextNode(`(${a1}*${b2})-(${a2}*${b1})*(${b1}*${c2})-(${b2}*${c1})`);
   p1.appendChild(p1t2);
   div.appendChild(p1);

//span2 for y

let span1=document.createElement('span');
let spant1=document.createTextNode('Y = ');
span1.appendChild(spant1);
div.appendChild(span1);

//p2 for y
   let p2=document.createElement('p');
   let p2t=document.createTextNode('1');
   let hr1=document.createElement('hr');
   p2.appendChild(p2t);
   p2.appendChild(hr1);
   let p2t2=document.createTextNode(`(${a1}*${b2})-(${a2}*${b1})*(${c1}*${a2})-(${c2}*${a1})`);
   p2.appendChild(p2t2);
   div.appendChild(p2);
   return div
}