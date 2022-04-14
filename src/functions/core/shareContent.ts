/**
 * Share content using the Native share functionality from your iOS / Android or Web Browser
 * @param {string} content
 * @param {Array.string} imageUrls
 * @param {string} subject
 * @returns {PromiseLike<{ key: string, value: any }>}
 * @throws  {Error} If no valid key has been specified.
 * @throws  {Error} If no valid value has been specified.
 */
export default function shareContent(content: string, imageUrls?: [string], subject?: string) {
  console.log(content, imageUrls, subject)
}
