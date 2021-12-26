import { setFlagsFromString } from 'v8';

export class URL {
  url: string;
  searchParams: SearchParams;

  constructor(url: string) {
    this.url = url;
    this.searchParams = new SearchParams(url);
  }
}

export class SearchParams {
  params: Map<string, string>;

  constructor(url: string) {
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

  set(name: string, value: string): void {
    this.params[name] = value;
  }
}
