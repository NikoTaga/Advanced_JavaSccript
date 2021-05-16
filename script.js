const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    ];

    const renderGoodsItem = (title='', price='') => {
    return `<div class="goods-item"><div class="img-item"></div><h3>${title}</h3>
            <p>${price}</p><button class="item-button" type="button">Добавить</button></div>`;
    };

    const renderGoodsList = (list=[]) => {
        let doogsStr = '';
        for (let i = 0; i < list.length; i++) {
            doogsStr = doogsStr + renderGoodsItem(list[i].title, list[i].price);
        }
        document.querySelector('.goods-list').innerHTML = doogsStr;

        // let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
        // document.querySelector('.goods-list').innerHTML = goodsList;
    };
    
    renderGoodsList(goods);
    