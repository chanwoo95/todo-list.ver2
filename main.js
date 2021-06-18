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

button.addEventListener('click', onAdd);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

function updateCount(count) {
    totalCount.textContent = `총 ${count}개`;
}

function onAdd() {
    const text = input.value;
    console.log(text);
    if (text === '') {
        input.focus();
        return;
    }

    count++;
    createItem(text);
    updateCount(count);

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
    }

    input.value = '';
    input.focus();
}

const lists = [];
