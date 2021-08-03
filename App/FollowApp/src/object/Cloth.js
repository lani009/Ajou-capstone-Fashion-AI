export default class Cloth {
    constructor(name, type, color, maker, imgPath) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.maker = maker;
        this.imgPath = imgPath;
    }

    get name() {
        return this.name;
    }

    get type() {
        return this.type;
    }

    get color() {
        return this.color;
    }

    get maker() {
        return this.maker;
    }

    get imgPath() {
        return this.imgPath;
    }
}
