export declare class URL {
    url: string;
    searchParams: SearchParams;
    constructor(url: string);
}
export declare class SearchParams {
    params: Map<string, string>;
    constructor(url: string);
    set(name: string, value: string): void;
}
