/**
 * Returns the currently selected text.
 */

export const getSelectedText = () => window.getSelection()?.toString() ?? ''
