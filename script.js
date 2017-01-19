var form = document.forms.constr;           //получаем форму
var elements = form.elements;               //получаем элементы формы
var res = document.getElementById('res');   //получаем поле для вывода результата

//объявляем переменные для создания новых элементов
var newTag;
var newElem;
var newOption;
var newInput;
var newBtn;

//обработчик при выборе элемента списка.
//создается новый элемент, но не выводит в документ, так как
//возможно пользователь еще не заполнил все поля
elements.tags.onchange = function () {
    newTag = this.children[this.selectedIndex].getAttribute('name');
    newElem = document.createElement(newTag);
    if(newTag == 'input')
        newElem.type = this.children[this.selectedIndex].id;
    if (newTag == 'a') newElem.href = '#';
    if (newTag == 'select'){
        newOption = document.createElement('option');
        newInput = document.createElement('input');
        newBtn = document.createElement('button');
        newInput.type = 'text';
        newInput.placeholder = '<< option';
        newBtn.innerText = 'Add option';
        newBtn.onclick = function () {
            var option = document.createElement('option');
            option.innerText = newInput.value;
            option.value = newElem.children.length;
            newElem.appendChild(option);
            newInput.value = '';
            console.log(newElem);
        }
    }
}

//обработчик при нажатии кнопки
//записывает значения полей input в атрибуты
// нового элемента и выводит элемент в документ
elements.btn.onclick = function () {
    if(newTag) {
        if(elements.class.value) newElem.className = elements.class.value;
        if(elements.id.value) newElem.id = elements.id.value;
        if(elements.name.value) newElem.name = elements.name.value;
        if(newTag == 'input')
            newElem.value = elements.textOrValue.value;
        else
            newElem.innerText = elements.textOrValue.value;
        res.innerHTML = '';
        res.appendChild(newElem);
        if (newTag == 'select'){
            newElem.innerText = '';
            newOption.innerText = elements.textOrValue.value;
            newElem.appendChild(newOption);
            res.appendChild(newInput);
            res.appendChild(newBtn);
        }
    }
    console.log(newElem);
    return false;
}





