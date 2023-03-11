export class ImageInfos {
    src: string;
    alt: string;
    placeholder: string;
    link?: string;
    aufnahmeDatum?: string;

    constructor(src: string, alt: string, placeholder: string, link?: string, aufnahmeDatum?: string) {
        this.src = src;
        this.alt = alt;
        this.placeholder = placeholder;
        this.link = link;
        this.aufnahmeDatum = aufnahmeDatum;
    }
}
