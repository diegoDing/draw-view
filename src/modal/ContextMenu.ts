import {ComponentData} from "./Component";

export declare interface ContextMenu{
    x:number;
    y:number;
    show:boolean;
    data?:ComponentData;
    index?:number;
}
export declare interface Menu{
    key?:string;
    text?:string;
    value?:string;
    handle?:void;
}
