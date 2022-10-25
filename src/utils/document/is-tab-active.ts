/**
 * Checks if the current tab is active, at the moment of execution
 *
 * @example
 *  setTimeout(() => {
 *      // Will print "true" if tab is till in focus
 *      // Will print "false" if another tab is in focus
 *      console.log({ isTabActive: isTabActive() })
 *  }, 2000)
 */

export const isTabActive = () => !document.hidden
