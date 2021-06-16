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

button.addEventListener('click', onAdd);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

function onAdd() {
    const text = input.value;
    console.log(text);
    if (text === '') {
        input.focus();
        return;
    }

    createItem(text);

    function createItem(text) {
        const item = document.createElement('div');
        item.setAttribute('class', 'item');
        const button = document.createElement('button');
        delBtn.setAttribute('class', 'item__button');
        item.appendChild(delBtn);
        item.textContent = text;

        container.appendChild(item);
    }

    input.value = '';
    input.focus();
}

// 3. 아이템 삭제 버튼을 누르면 리스트에 해당 아이템이 삭제된다.

// 4. 총 아이템 개수를 표시해준다.