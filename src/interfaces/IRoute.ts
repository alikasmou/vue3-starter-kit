export interface IRouteBase {
    name: string;
    title: string;
}

export interface IRoute extends IRouteBase {
    subs: Array<IRouteBase>;
}