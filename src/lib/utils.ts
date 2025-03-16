/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeGetSessionStorageGetItem(
  key: string,
): Record<string, any> | null {
  try {
    const data = sessionStorage.getItem(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  } catch {
    return null;
  }
}
