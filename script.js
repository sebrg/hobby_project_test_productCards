let productList = [
    {     
    title: "Rolex Submariner",
    price: 124999,
    imageUrl: "/Ett_projekt/rolexsub.png"
    },
    {     
    title: "Rolex Submariner",
    price: 124999,
    imageUrl: "/Ett_projekt/rolexsub.png"
    },
    {     
    title: "Rolex Submariner",
    price: 124999,
    imageUrl: "/Ett_projekt/rolexsub.png"
    },
    {     
    title: "Rolex Submariner",
    price: 124999,
    imageUrl: "/Ett_projekt/rolexsub.png"
    },
    {     
    title: "Rolex Submariner",
    price: 124999,
    imageUrl: "/Ett_projekt/rolexsub.png"
    },
    {     
    title: "Rolex Submariner",
    price: 124999,
    imageUrl: "/Ett_projekt/rolexsub.png"
    },

]

    for (let i = 0; i < productList.length; i++) {

        const product = productList[i];
        
        productCards(product)
    }

function productCards(product) {

    let main = document.getElementById("products")

    let productcontainer = document.createElement("div")

  
    let imageContainer = document.createElement("div")
    imageContainer.style.flex = "3 0 0px"
    

    let infoContainer = document.createElement("div")
    infoContainer.style.flex = "2 0 0px"
    

    let productImage = document.createElement("img")
    productImage.src = product.imageUrl
    productImage.style.height = "100%"
    productImage.style.width = "100%"
    

    let productTitle = document.createElement("h3")
    productTitle.innerText = product.title
    productTitle.style.display = "flex"
    productTitle.style.justifyContent = "center"

    let productPrice = document.createElement("b")
    productPrice.innerText = product.price + ":-"
    productPrice.style.display = "flex"
    productPrice.style.justifyContent = "center"

    infoContainer.appendChild(productTitle)
    infoContainer.appendChild(productPrice)
    imageContainer.appendChild(productImage)

    productcontainer.appendChild(imageContainer)
    productcontainer.appendChild(infoContainer)
    main.appendChild(productcontainer)

}

