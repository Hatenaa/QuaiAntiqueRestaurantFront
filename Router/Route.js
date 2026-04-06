export default class Route {
    constructor(url, title, pathHtml, path, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
    }
}