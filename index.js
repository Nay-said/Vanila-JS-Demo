let products = []
filterCategory("0")

cateHandler = () => filterCategory(
	document.getElementById("category").value
)

function filterCategory(cate) {
	products = []
	console.log(cate)
	for (let product of rawdata) {
		if (product.categoryId == cate || cate == "0") {
			products.push(product)
		}
	}
	randerData()
}

function filterPrice() {
	console.log(products)
	let price = document.getElementById("price").value;
	for (let element of rawdata) {
		if (price == 0) {
			products.push(element);
		}
		if (element.price <= 100 && price == 100) {
			products.push(element);
		}
		if (element.price > 100 && element.price <= 500 && price == 500) {
			products.push(element);
		}
		if (element.price > 500 && element.price <= 1000 && price == 1000) {
			products.push(element);
		}
		if (element.price > 1000 && price == 1001) {
			products.push(element);
		}
	}
	randerData()
	products = []
}

function lowtohigh() {
	rawdata.sort(function (objectA, objectB) {
		var valueA = objectA.price;
		var valueB = objectB.price;
		if (valueB < valueA) return 1;
		else if (valueB > valueA) return -1;
		else return 0;
	})
	filterPrice();
}

function hightolow() {
	rawdata.sort(function (objectC, objectD) {
		var valueC = objectC.price;
		var valueD = objectD.price;
		if (valueC < valueD) return 1
		else if (valueC > valueD) return -1
		else return 0;
	})
	filterPrice();
}

function randerData() {
	let eachProduct = ''
	for (let i of products) {
		if (i.productMedia[0] && i.productMedia[0].url) {
			let imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + i.productMedia[0].url;
			let urlParams = "./detail.html?prodId=" + i.prodId + "&prodTitle=" + i.title;

			eachProduct += `
				<div class="col-12 col-md-2 mb-3">
					<a href="${urlParams}" style="color: grey;">
						<img src="${imgUrl}" style="width: 100%; height: 200px; display: block">
						<p style="width: 90%; height: 35px">${i.title}</p>
						<p>$ ${i.price}</p>
					</a>
				</div>`
		}
	}
	document.getElementById('display').innerHTML = eachProduct;
}