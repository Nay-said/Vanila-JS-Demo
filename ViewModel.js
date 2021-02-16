this.getProducts();
this.filterPrice();
var products = [];

console.log(rawdata)

function getProducts() {
	products = []
	let category = document.getElementById("category").value;
	console.log(category);
	for (let product of rawdata) {
		if (product.categoryId == category || category == "0") {
			// push "0" or the object
			products.push(product);
		}
	}
	this.allProducts();
}

function filterPrice() {
	products = []
	let a = document.getElementById("price").value;
	console.log(a);
	for (let b of rawdata) {
		if (a == 0) {
			products.push(b);
		}
		if (b.price <= 100 && a == 100) {
			products.push(b);
		}
		if (b.price > 100 && b.price <= 500 && a == 500) {
			products.push(b);
		}
		if (b.price > 500 && b.price <= 1000 && a == 1000) {
			products.push(b);
		}
		if (b.price > 1000 && a == 1001) {
			products.push(b);
		}
	}
	this.allProducts();
}

function lowtohigh() {
	rawdata.sort(function (objectA, objectB) {
		var valueA = objectA.price;
		var valueB = objectB.price;;
		if (valueB < valueA) return 1;
		else if (valueB > valueA) return -1;
		else return 0;
	})
	this.filterProduct();
}

function hightolow() {
	rawdata.sort(function (objectC, objectD) {
		var valueC = objectC.price;
		var valueD = objectD.price;
		if (valueC < valueD) return 1
		else if (valueC > valueD) return -1
		else return 0;
	})
	this.filterPrice();
}

function allProducts() {
	let eachProduct = ''
	// loop through filtered datas, not original rawdata
	for (let x of products) {
		if (x.productMedia[0] && x.productMedia[0].url) {
			let imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + x.productMedia[0].url;
			let urlParams = "./Detail.html?prodId=" + x.prodId + "&prodTitle=" + x.title;
			eachProduct += `
				<div class="col-12 col-md-2 mb-3">
					<a href="${urlParams}" style="color: grey;">
						<img src="${imgUrl}" style="width: 100%; height: 200px; display: block">
						<p style="width: 90%; height: 35px">${x.title}</p>
						<p>$ ${x.price}</p>
					</a>
				</div>`
		}
	}
	// Inject String Template Into HTML
	document.getElementById('display').innerHTML = eachProduct;
}