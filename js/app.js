// variables
const searchBtn = document.querySelector('.submit-btn');
let news = new News();
let ui = new UI();

// event listeners


eventListenerFunc();

function eventListenerFunc() {
    searchBtn.addEventListener('click', loadNews);
}

function loadNews(e) {
    e.preventDefault();
    let inputTextValue = document.querySelector('.text-input').value;
    let inputCountryValue = document.querySelector('#country').value;
    let inputCategoryValue = document.querySelector('#category').value;


    if (inputTextValue !== '' || inputCountryValue !== '' || inputCategoryValue !== ''){
        news.queryAPI(inputTextValue, inputCountryValue, inputCategoryValue)
        .then(data =>{
            console.log(data);
            ui.createNewsCard(data.data.articles);
        })
    }else {
        ui.printMessage('plz enter value','err');
    }
}