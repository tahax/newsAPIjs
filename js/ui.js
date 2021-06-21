class UI {

    printMessage(msg, classes) {
        let body = document.querySelector('body');
        let showAlert = document.createElement("div");
        showAlert.className = 'showalert';
        if (classes === 'acc') {
            showAlert.innerHTML = `<div class='accept-box tak-iranyekan-bold'>${msg}</div>`;
        } else if (classes === 'err') {
            showAlert.innerHTML = `<div class='alertBox tak-iranyekan-bold'>${msg}</div>`;
        }
        body.appendChild(showAlert);
        setTimeout(() => {
            showAlert.classList.add('opacity-come');
        }, 10)
        setTimeout(() => {
            showAlert.classList.add('opacity-out');
            setTimeout(() => {
                showAlert.remove();
            }, 1000)
        }, 2000)
    }

    createNewsCard(array) {
        if (array.length === 0){
            this.printMessage('NO NEWS','err')
        }else {
            ui.printMessage('done','acc');

            array.forEach((obj) => {
                document.querySelector('.cart-parents').innerHTML += `
                <div class="tak-padding-cart col-12 col-md-12 col-lg-12">
                    <div class="tak-cart tak-padding">
                    ${obj.urlToImage !== null ? `<img src="${obj.urlToImage}" class="tak-img-cart">` : ''}
                        <h3 class="h3">${obj.title}</h3>
                        <span class="tak-span-desc">${obj.description}</span>
                        <div class="tak-deatiles">
                            <span>${obj.publishedAt}</span>
                            <span>${obj.author}</span>
                        </div>
                        
                        <a href="${obj.url}" target="_blank" class="tak-a-button"> see more </a>
                    </div>
                </div>
            `

            })
        }

    }



}