class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><div class="img-item"></div><h3>${this.title}</h3>
        <p>${this.price}</p><button class="item-button" type="button">Добавить</button></div>`;
    }
}

 
class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];    
    }

    getTotalSumm() {
        let totalSumm = 0;
        for (let i = 0; i < this.goods.length; i++) {
            totalSumm += this.goods[i].price;
        }
        return `<h1>${String(totalSumm)}</h1>`;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
        document.querySelector('.totalSum').innerHTML = this.getTotalSumm();
    };
}

class BasketGoodsList extends GoodsList {
    constructor() {
        super()
        this.quantity = 0;
    }
}

class BasketGoodsItem extends GoodsItem{
    constructor() {
        super()
        this.quantity = 0;
    }
}


// const list = new BasketGoodsList()
const list = new GoodsList();
list.fetchGoods();
list.render();