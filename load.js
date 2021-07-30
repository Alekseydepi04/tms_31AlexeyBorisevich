const axios = require('axios');

const load = () => {
    let url = `https://api.thecatapi.com/v1/images/search`
    axios.get(url).then((axios_cat_img_url) => {
        let img_cat_url = axios_cat_img_url.data[0].url;
        let img = document.createElement('img');
        let div = document.getElementById(`cat`);
        img.classList.add(`img_cl`);
        img.setAttribute('src', img_cat_url);
        div.append(img);
        div.addEventListener(`click`, () =>
        {
            change_img();
        });
    })
}

const change_img = () => {
    let img = document.querySelector('img');
    img.remove()
    load()
}

module.exports = load;
