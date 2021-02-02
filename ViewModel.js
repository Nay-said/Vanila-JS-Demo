this.getProducts();
this.filterPrice();
var products = [];
console.log(rawdata)

// Displayproduct shall be executed piror to ALL methods
function getProducts() {
	products = []
	let category = document.getElementById("category").value;
	console.log(category);
	for (let product of rawdata) {
		if (product.categoryId == category || category == "0") {
			// This need to push "y" or the object
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
	let screenplay = ""
	// this needs to loop through the filtered datas, not the original raw data
	for (let x of products) {
		if (x.productMedia[0] && x.productMedia[0].url) {
			let imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + x.productMedia[0].url;
			let urlParams = "./Detail.html?prodId=" + x.prodId + "&prodTitle=" + x.title;
			screenplay = screenplay + 
				`<div class="col-12 col-md-2 mb-3">
					<a href="` + urlParams + `" style="color: grey;">
						<img style="width: 100%; height: 200px; display: block" src="`+ imgUrl + '">' + 
						`<div style="width: 85%">` + x.title + "</div>" + '$ ' + x.price + 
					`</a>
				</div>`
		}
	}
	document.getElementById("display").innerHTML = screenplay;
}