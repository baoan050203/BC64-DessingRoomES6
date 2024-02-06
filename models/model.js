export class ProductType {
    constructor(tabName, showName, type) {
        this.tabName = tabName;
        this.showName = showName;
        this.type = type;
        //navpill
    }
}
export class Product {
    //tabPanes
    constructor(id, type, name, desc, imgSrc_jpg, imgSrc_png) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.desc = desc;
        this.imgSrc_jpg = imgSrc_jpg;
        this.imgSrc_png = imgSrc_png;
    }
}


// liên kết của  và  là type,
// navPills: muc san pham
//tabPanes:san pham 
//  dựa vô type để lấy dữ liệu, show name làm nội dung

