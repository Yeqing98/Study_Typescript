interface Item {
    name: string
}

class DataManager<T extends Item> {
    constructor(private data: T[]) {}

    getItem(index: number) : string {
        return this.data[index].name;
    }
}

// const data = new DataManager<string>(['1']);
// data.getItem(0)

const data = new DataManager([{name: 'dell'}])