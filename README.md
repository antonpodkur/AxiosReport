# Axios Report
### Проект для демонстрації основних можливостей бібліотеки axios та порівняння її з вбудованим в javascript fetch.

## Встановлення

### 1. Docker
1. Встановити Docker (відрізняється під кожну ОС. Ubuntu - `sudo apt install docker`)
2. Створити папку проекту (Linux, MacOs - `mkdir ~/AxiosReport`, Windows PowerShell - `mkdir C:\AxiosReport`)
3. Зайти в створену папку (Linux, MacOs - `cd ~/AxiosReport`, Windows PowerShell - `cd C:\AxiosReport`)
4. Завантажуємо контейнери
```sh
sudo docker pull antonpodkur/api-axios-report
sudo docker pull antonpodkur/react-axios-report
```
5. Встановити docker-compose (Ubuntu - `sudo apt install docker-compose`)
6. Створити файл `docker-compose.yml`
7. Вставити в нього наступний текст:
```
version: "3"
services: 
    react-app:
        image: antonpodkur/react-axios-report
        stdin_open: true
        ports: 
            - "3000:3000"
        depends_on: 
            - api-server
    api-server:
        image: antonpodkur/api-axios-report
        ports: 
            - "3333:3333"
    
```
8. Запустити проект (Linux, MacOs - `sudo docker-compose up`, Windows - `docker-compose up`)

### 2. Node
1. Склонувати проект - `git clone https://github.com/antonpodkur/AxiosReport.git`
2. Зайти в проект - `cd AxiosReport`
3. Встановити залежності:
`cd server && npm i`
`cd ../client && npm i`
4. Запустити сервер - `cd server && npm start`
5. Запустити клієнт - `cd client && npm start`

### Доповідь можете знайти [тут](https://github.com/antonpodkur/AxiosReport/blob/master/doc/readme.md)
### [Проект](https://github.com/antonpodkur/AxiosReport)
