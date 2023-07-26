export interface Item {
    id:String;
    item:String;
    checked:boolean;
}

export default class ListItem implements Item {
   
    constructor(
        private _id:String = '',
        private _item:String = '',
        private _checked:boolean = false,
    ){}
    get id():String {
        return this._id;
    }
    set id(id:String) {
        this._id = id;
    }
    get item():String {
        return this._item;
    }
    set item(item:String) {
        this._item = item;
    }
    get checked():boolean {
        return this._checked;
    }
    set checked(checked:boolean) {
        this._checked = checked;
    }
}