"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = exports.URL = void 0;
class URL {
    constructor(url) {
        this.url = url;
        this.searchParams = new SearchParams(url);
    }
}
exports.URL = URL;
class SearchParams {
    constructor(url) {
        this.params = new Map();
        const matches = url.match(/\?(.*)/);
        const query = matches ? matches[1] : '';
        const pairs = query.split('?');
        pairs
            .map((s) => s.split('='))
            .forEach(([k, v]) => {
            this.params.set(k, v);
        });
    }
    set(name, value) {
        this.params[name] = value;
    }
}
exports.SearchParams = SearchParams;
