export class ImageInfos {
    src: string;
    alt: string;
    placeholder: string;
    link?: string;

    constructor(src: string, alt: string, placeholder: string, link?: string) {
        this.src = src;
        this.alt = alt;
        this.placeholder = placeholder;
        this.link = link;
    }
}
