/**
 * Returns the currently selected text from a textarea element, or null if nothing selected.
 */
export function getSelectedText(textareaElement) {
  if (!textareaElement) return null;
  const { selectionStart, selectionEnd, value } = textareaElement;
  if (selectionStart === selectionEnd) return null;
  return value.substring(selectionStart, selectionEnd);
}
