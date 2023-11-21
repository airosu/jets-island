/**
 * Returns an element based on a provided selector, same as ".querySelector()":
 * 
 * @example
    const title = select("h1");
    const className = select(".class");
    const message = select("#message", formElem);
 */

export const select = (selector: string, scope: Document | Element | null = document) => {
    return scope ? scope.querySelector(selector) : null
    // return scope.querySelector(selector)
}
