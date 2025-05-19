export interface Svgl {
    id: number,
    route: string | { light?: string, dark?: string },
    title: string,
    url: string,
    category: string | string[],
    wordmark?: string | { light?: string, dark?: string },
    brandUrl?: string
}