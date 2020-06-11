namespace Components {
    export class Header {
        constructor() {
            const ele = document.createElement('div');
            ele.innerHTML = "This is Header";
            document.body.appendChild(ele);
        }
    }

    export class Content {
        constructor() {
            const ele = document.createElement('div');
            ele.innerHTML = "This is Content";
            document.body.appendChild(ele);
        }
    }

    export class Footer {
        constructor() {
            const ele = document.createElement('div');
            ele.innerHTML = "This is Footer";
            document.body.appendChild(ele);
        }
    }
}