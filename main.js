
async function getProducts(){
    const request= await fetch("https://dummyjson.com/products");
    const data=await request.json();
    const products =data.products;
    console.log(products);

    const productsInfo= products.map(function(ele)
    {
console.log(ele.title);
console.log(ele.thumbnail);
console.log(ele.price);


        return result=`<div class="product"> 
        <h2>${ele.title}</h2><p>"${ele.brand}"</p><img src="${ele.thumbnail}"/><span>${ele.price}</span></div>`;
        
    }).join('');

    document.querySelector(".products").innerHTML=productsInfo;

}

getProducts();