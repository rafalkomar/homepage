console.log('siema');
const name ='Rafal Komar';
const age=10;
console.log(name);
console.log(age);
console.log(`Nazywam sie ${name} i mam ${age} lat`)






const headingg = document.querySelectorAll('p');
console.log(headingg[0]);



if ('javascript'!='java'){

    console.log('prawda');
}

if (name || dupa){

    console.log('brawo')
}

if(age<20){

    console.log('masz wiecej niz 20 lat');
} else if (age>=20 && age <= 30){
    console.log('masz wiecej niz 20 lat ale mniej niz 30')
}

switch (age){

    case 20:
    console.log('masz rowno  20 lat');
    break;

    case 30:
    console.log('masz rowno 30 lat');
    break;

    default:
    console.log(`masz ${age} lat`);
    break;        
}




const old= (age>10) ? 'yes': 'no';
console.log(old);

if (age<10) {

    console.log('yes');
    
}else if (age>10) {
    

    }


    