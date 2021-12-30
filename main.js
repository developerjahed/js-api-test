const shop={
    name:'jahid store',
    address:"Bangladesh",
    profit:1500,
    product:['laptop', 'mobile', 'pepsi'],
    owner:{
        name:'jahid islam',
        profession:'web developer'
    },
    number:"017000000"
};
console.log(shop);
const shopStringified=JSON.stringify(shop);
console.log(shopStringified);

const converted=JSON.parse(shopStringified);
console.log(converted);
const h1=document.getElementById('h1');
console.log(h1.innerText=shop.owner.name);