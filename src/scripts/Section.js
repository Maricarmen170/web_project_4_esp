export default class Section {
    constructor({ items, renderer }, containerSelector){
        this._initialArray = items;
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    renderer(){
        this._initialArray.forEach((item) => {
            this._renderer(item);
        });
    }

    prependItem(element){
        this._container.prepend(element);
    }

    appendItem(element){
        this._container.append(element);
    }

    setArray(data){
        this._initialArray = data
    }
}