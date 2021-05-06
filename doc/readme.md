# Використання Axios. Axios vs Fetch

## Що ж таке Axios?

Axios це один з найпопулярніших HTTP клієнтів для браузерів і node.js, заснований на Проміс.
У Axios є підтримка запитів, отримання відповідей від сервера, їх трансформація і автоматична конвертація в JSON.

## Налаштування проекту для роботи з Axios

Завантажуємо бібліотеку Axios:
`npm i axios`

Імпортуємо axios в компонент з якого будемо відправляти запити:
`import axios from 'axios'`

Все, бібліотека готова до використання

## Надсилання запитів

### Надсилання Get запиту

`
async function AxiosGet(){
    try {
      const res = await axios.get('http://localhost:3333/posts/')
      console.log(res.data);
    }catch(e){
      console.error(e.message);
    }
  };
`

Ми використовуємо axios.get (url) з URL від кінцевої точки API, щоб отримати проміс, який повертає об'єкт відповіді. Усередині об'єкту відповіді є дані, які ми виводимо.

Також ви можете отримати і іншу інформацію про запит, в тому числі код стану res.status, або додаткову інформацію всередині res.request.


### Надсилання Post запиту

`
async function AxiosPost(){
    try{
      const post = {title: 'axios test post', description: 'axios test post. I hope it was sent successfuly'};
      const result = await axios.post('http://localhost:3333/posts/', post);
      console.log(result.data);
    }catch(e){
        console.error(e.message)
        }
  };
`

Використання POST дає той же об'єкт відповіді з інформацією, яку ви зможете використовувати.

Щоб виконати запит POST, ми спочатку захоплюємо введення aбо створюємо (як в нашому разі) об'єкт, який будемо надсилати. Потім ми додаємо введення разом із запитом POST і отримуємо відповідь.

### Надсилання Delete запиту

`
async function AxiosDelete(){
    try{
      const result = await axios.delete(`http://localhost:3333/posts/${id}`)
      console.log(result.data);
    }catch(e) {
        console.error(e.message)
        }
  };
`
В цьому разі до нашого запиту додався парамет id. Він слугує для ідентифікації об'єкта, який буде видалений.

У цьому випадку об'єкт result надає інформацію про запит. Потім ви можете знову використовувати console.log для цієї інформації після відправки форми.

### Надсилання Patch запиту

`
async function AxiosPatch(){
    try{
      const result = await axios.patch(`http://localhost:3333/posts/${id}`,{title:'Whoops it is not the last one2 '});
      console.log(result.data);
    }
    catch(e) {
        console.error(e.message)
        }
  };
`

Так як і в запиті Delete - перший параметр - це URL-адреса, на яку буде зроблений запит. Але тут з'являється другий параметр - це дані, які ви будете відправляти для зміни.






