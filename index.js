showProductList(rawdata)

function showProductList(data) {
  let productForShow = ''

  for (let i of data) {
    let imgURL = 
      'https://storage.googleapis.com/luxe_media/wwwroot/' + i.productMedia[0].url

      productForShow = 
      `
        <div>
          <img src="${imgURL}" style="height: 200px; display: block"/>
          <p style="width:85%">${i.title}</p>
          <p>$ ${x.price}</p>
        </div>
      `
  }
  document.getElementById('display').innerHTML = productForShow
}