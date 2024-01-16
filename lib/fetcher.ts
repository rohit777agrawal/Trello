//takes a url and result in json as a string!
export const fetcher = (url: string) => fetch(url).then((res) => res.json());