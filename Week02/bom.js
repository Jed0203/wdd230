const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {if (input.value != ''){
    const li = document.createElement('li');
    const deletButton = document.createElement('button');
    li.textContent = input.value;
    deletButton.textContent = '❌';
    li.append(deletButton);
    list.append(li);
    deletButton.addEventListener('Click', ()=>{
        list.removeChild(li);
        input.focus();
    });
    input.focus();
    input.value = '';
}});