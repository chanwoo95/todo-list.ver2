// 1.현재 시간을 보여준다.

const time = document.querySelector('.header__time');

function timer() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    time.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
}

setInterval(timer, 1000);

// 2.아이템을 입력하면 리스트 목록에 추가된다.

const input = document.querySelector('.footer__input');
const button = document.querySelector('.footer__button');
const container = document.querySelector('.item__container');
const totalCount = document.querySelector('.count');

let count = 0;

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

function updateCount(count) {
    totalCount.textContent = `총 ${count - lists.length}개`;
}

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    count++;
    createItem(text);
    updateCount(count);

    input.value = '';
    input.focus();
}

function createItem(text) {
    const item = document.createElement('div');
    const name = document.createElement('div');
    item.setAttribute('class', 'item');
    name.setAttribute('class', 'item__name');
    item.appendChild(name);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        container.removeChild(item);
        updateCount(--count);
    });
    const icon = document.createElement('i');
    button.setAttribute('class', 'item__button');
    icon.setAttribute('class', 'far fa-trash-alt');
    item.appendChild(button);
    button.appendChild(icon);
    name.textContent = text;

    container.appendChild(item);

    item.scrollIntoView({ block: 'center' });

    const newId = lists.length + 1;

    item.id = newId;
    const listObj = {
        text,
        id: newId,
    };
    lists.push(listObj);
    saveList();
}

// 삭제

function deleteItem(item) {}

// 로컬스토리지 저장

const LIST_LS = 'lists';

const lists = [];

function saveList() {
    localStorage.setItem(LIST_LS, JSON.stringify(lists));
}

function loadList() {
    const loadLists = localStorage.getItem(LIST_LS);
    if (loadLists !== null) {
        const showLists = JSON.parse(loadLists);
        showLists.forEach((lists) => {
            createItem(lists.text);
        });
    }
}

function init() {
    updateCount(count);
    loadList();
    button.addEventListener('click', onAdd);
}
init();

// 남은 기능
// count 총 개수 업데이트
// 삭제 시 로컬스토리지 업데이트
