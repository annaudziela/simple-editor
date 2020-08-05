import '../scss/main.scss';



// const entry = localStorage.getItem('entry');
// let result = '';

// if (entry) {
//     result = entry; 
// };




const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');

const currentValue = localStorage.getItem('entry');

if (currentValue) {
    document.querySelector('.info--js').innerHTML = '💁🏼‍♀️';
}

save.addEventListener('click', (e) => {
    e.preventDefault();
   localStorage.setItem('entry', textarea.value);
   if (textarea.value) {
    document.querySelector('.info--js').innerHTML = '💁🏼‍♀️';
} else {
    document.querySelector('.info--js').innerHTML = '🤷🏼‍♀️';
}
})

load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');
   })






// textArea.value = result;

// const saveAnswer = document.querySelector('.button__save--action');
// saveAnswer.addEventListener('click', () => {
// localStorage.setItem('entry', textArea.value);
// });

// console.log(result);

// // const entry = localStorage.getItem('entry');
// // let result = '';

// // if (entry) {
// //     result = entry; 
// // };

// const previewAnswer = document.querySelector('.button__preview--action');
// previewAnswer.addEventListener('click', () => {
// localStorage.getItem(result);
// });

// console.log(previewAnswer);

// // const saveAnswer = document.querySelector('.button__save--action');

// console.log(textArea);



// console.log('HELLO 🚀')