// Событие - EVENT
// Обработчик - HANDLER, слушатель LISTENER, подписчик - SUBSCRIBER
// Браузер создаёт специальный объект, в котором собраны сведение о произошедшем событии (event, ev, e)
// Вызывает коллбэк (обработчик)
// Объект (e) по умолчанию передается в обработчик

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

// sm.onclick = () => window.alert('yo!')
// sm.onclick = null
//
// const fn = () => alert('yo!')
// sm.onclick = fn
// console.dir(sm)

function onClickHandler(e) {
    console.log(e.target.id)
}

// sm.onclick = onClickHandler
// sm.onmouseover = onClickHandler
// sm.onmouseleave = onClickHandler
md.onclick = onClickHandler

// e.target - элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчик в процессе всплытия события
// e.stopPropagation - останавливает всплытие




