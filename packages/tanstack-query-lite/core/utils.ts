import { QueryKey } from "./types";

/**
 * QueryKey 배열을 안정적인 해시 문자열로 변환합니다.
 * 객체나 배열 등 다양한 타입을 포함한 QueryKey를 처리할 수 있습니다.
 */
export function hashKey(queryKey: QueryKey): string {
  return JSON.stringify(queryKey, (_, val) => {
    // 함수나 정의되지 않은 값이 포함되어 있을 수 있으므로 안전하게 처리
    return typeof val === 'function' || val === undefined ? null : val;
  });
}

/**
 * 두 QueryKey가 동일한지 비교합니다.
 */
export function areKeysEqual(keyA: QueryKey, keyB: QueryKey): boolean {
  return hashKey(keyA) === hashKey(keyB);
}