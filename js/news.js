class News {
    constructor() {
        this.keyOfSite = "b5440dfb798f46c2b833a3cc581174d0";
    }

    async queryAPI(inputTextValue, inputCountryValue, inputCategoryValue) {
        let url = 'https://newsapi.org/v2/'
        if (inputCountryValue === '' && inputCategoryValue === '') {
            url += 'everything?';
        } else {
            url += 'top-headlines?';
        }
        if (inputTextValue !== '') {
            url += `q=${inputTextValue}&`;
        }
        if (inputCountryValue !== '') {
            url += `country=${inputCountryValue}&`
        }
        if (inputCategoryValue !== '') {
            url += `category=${inputCategoryValue}&`
        }
        url += `apiKey=${this.keyOfSite}`

        let fetchUrl = await fetch(url);
        let data = await fetchUrl.json();
        return {
            data
        }

    }


}