/**
 * Returns true if provided element is currently in focus (ctive).
 * 
 * @example
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const isButtonInFocus = isElementInFocus(buttonRef.current)
 */

export const isElementInFocus = (el: Element | null) => el === document.activeElement
