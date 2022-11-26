const form = document.querySelector('form');
const input = document.querySelector('#input');
const ul = document.querySelector('#ul');
const empty = document.querySelector('#emptylist');
const donebtn = document.querySelector('#done');
let ic = 0;
form.addEventListener('submit', addList);
ul.addEventListener('click',deleteBtn);
ul.addEventListener('click', donBtn);
function addList(event){
    event.preventDefault();
    ic++;
    const inputvalue = input.value;
    ul.insertAdjacentHTML('beforeend',`<li class="listtask" id="rr">
    <span class="idel">${ic}</span>
    <span>${inputvalue}</span>
    <div id="ddbtn">
        <button class="donebtn sbtn" data-action="done">
            <img src="./img/tick.svg" alt="Done">
        </button>
        <button class="delbtn sbtn" data-action="delete">
            <img src="./img/cross.svg" alt="Delete">
        </button>
    </div>
</li>`);
    empty.classList.add('none');
    input.value = '';
    input.focus();
}
function deleteBtn(event){
    if(event.target.dataset.action === 'delete'){
        const remov = event.target.closest('li');
        remov.remove();
    }
    if(ul.children.length == 1){
        empty.classList.remove('none');
        removeall.classList.add('none');
    }
}
function donBtn(event){
    if(event.target.dataset.action === 'done'){
        const remov = event.target.closest('li');
        remov.classList.add('doneel');
    }
}