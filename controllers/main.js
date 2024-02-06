// @ts-nocheck

import Data from "../data/Data.json" assert { type: 'json' };
import { Product, ProductType } from "../models/model.js";


const RenderNavPills = () => {
  let content = ""
  const NavPills = Data.navPills
  for (let index = 0; index < NavPills.length; index++) {
    const productType = new ProductType()

    for (const key in NavPills[index]) {

      productType[key] = NavPills[index][key]// == value
    }

    content += `
                    <li class="nav-item">
                    <button onclick="RenderProductsByTab('${productType.type}')" class="btn btn-info m-2" >
                    ${productType.showName}
                    </button>
            </li>
        `
  }
  document.getElementById("nav-pills").innerHTML = content
}


const RenderProductsByTab = (type = Data.navPills[0].type) => {//default is tab áo
  const tabPanes = Data.tabPanes
  let products = [], content = ""
  if (tabPanes) {
    products = tabPanes.filter(product => product.type === type)
  }
  for (let index = 0; index < products.length; index++) {
    const product = new Product()
    for (let key in products[index]) {
      product[key] = products[index][key]
    }
    content += `
            <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${product.imgSrc_jpg}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.desc}</p>

                    <button onclick="TryOnProduct('${product.id}')" class="btn btn-primary">Thử đồ</button>
                </div>
            </div>
            </div>
        `

  }
  document.getElementById("tab-content").innerHTML = content


}


RenderNavPills();
RenderProductsByTab()

const TryOnProduct = (id) => {
  const product = Data.tabPanes.find(item => item.id === id) //return object is true or undefind is false

  if (product) {
    switch (product.type) {
      case "shoes":
        document.getElementsByClassName("feet")[0].style.backgroundImage = `url(${product.imgSrc_png})`
        break;

      case "topclothes":
        document.getElementsByClassName("bikinitop")[0].style.backgroundImage = `url(${product.imgSrc_png})`
        break;

      case "botclothes":
        console.log(document.getElementsByClassName("bikinibottom"));
        document.getElementsByClassName("bikinibottom")[0].style.backgroundImage = `url(${product.imgSrc_png})`
        break;

      default:
        console.log(product.type);
        document.getElementsByClassName(`${product.type}`)[0].style.backgroundImage = `url(${product.imgSrc_png})`

        break;
    }
  }
};

window.RenderProductsByTab = RenderProductsByTab
window.TryOnProduct = TryOnProduct