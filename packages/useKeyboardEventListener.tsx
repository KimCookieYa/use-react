import { useEffect, useCallback } from 'react';

// Define a type for standard keyboard keys
type KeyboardKey =
  | 'Backspace'
  | 'Tab'
  | 'Enter'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'CapsLock'
  | 'Escape'
  | 'Space'
  | ' '
  | 'PageUp'
  | 'PageDown'
  | 'End'
  | 'Home'
  | 'ArrowLeft'
  | 'ArrowUp'
  | 'ArrowRight'
  | 'ArrowDown'
  | 'Insert'
  | 'Delete'
  | 'Meta'
  | 'ContextMenu'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | ';'
  | '='
  | ','
  | '-'
  | '.'
  | '/'
  | '`'
  | '['
  | '\\'
  | ']'
  | "'";

export default function useKeyboardEventListener(
  key: KeyboardKey,
  callback: (event: KeyboardEvent) => void,
  options?: boolean | AddEventListenerOptions,
) {
  const handleKeyEvent = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event);
      }
    },
    [key, callback],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent, options);
    return () => {
      window.removeEventListener('keydown', handleKeyEvent, options);
    };
  }, [handleKeyEvent, options]);
}
