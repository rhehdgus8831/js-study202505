const productList = [
    {
        id: 1,
        name: '무선 이어폰',
        category: '전자기기',
        price: 129000,
        tags: ['무선', '노이즈캔슬링', '블루투스'],
        isAvailable: true,
        rating: 4.5,
    },
    {
        id: 2,
        name: '유기농 사과 5kg',
        category: '식품',
        price: 24000,
        tags: ['과일', '유기농', '신선함'],
        isAvailable: false,
        rating: 4.7,
    },
    {
        id: 3,
        name: '게이밍 노트북',
        category: '전자기기',
        price: 1790000,
        tags: ['게임용', '고성능', '신제품'],
        isAvailable: true,
        rating: 4.9,
    },
    {
        id: 4,
        name: '친환경 샴푸',
        category: '생활용품',
        price: 8900,
        tags: ['친환경', '천연', '저자극'],
        isAvailable: true,
        rating: 3.9,
    },
    {
        id: 5,
        name: '수면 안대',
        category: '생활용품',
        price: 5900,
        tags: ['숙면', '여행용'],
        isAvailable: false,
        rating: 4.2,
    },
];

//판매 중인 상품만 골라보세요.
// → isAvailable: true인 것만!

function filter(callback) {
    const list = [];
    for (const element of productList) {
        if (callback(element)) {
            list.push(element);
        }
    }
    return list;
}


const result1 = filter(user => user.isAvailable === true);
console.log(result1);
console.log("====================");

// 가격이 1만 원 이하인 저가 상품만 걸러보세요.


function filter1(callback) {
    const list = [];
    for (const element of productList) {
        if (callback(element)) {
            list.push(element.name);
        }
    }
    return list;
}

const result2 = filter1(userPrice => userPrice.price <= 10000);
console.log(result2);
console.log("====================");



// 카테고리가 '전자기기'인 상품만 필터링해보세요.

function filter2(callback){
    const list = []
    for (const element of productList) {
        if(callback(element)){
            list.push(element)
        }
    }
    return list
}

const result3 = filter2(userCategory => userCategory.category === `전자기기`);
console.log(result3);
console.log("====================");










