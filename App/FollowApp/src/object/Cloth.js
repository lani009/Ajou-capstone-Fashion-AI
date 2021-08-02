export default class Cloth {
    constructor(name, type, color, maker, imgPath) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.maker = maker;
        this.imgPath = imgPath;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getColor() {
        return this.color;
    }

    getMaker() {
        return this.maker;
    }

    getImgPath() {
        return this.imgPath;
    }
}
