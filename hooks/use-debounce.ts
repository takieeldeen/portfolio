import { useEffect, useState, useRef } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// A debounce hook that calls a callback after the debounce delay
// This avoids the ESLint warning about calling setState in useEffect
export function useDebouncedCallback<T>(
  value: T,
  delay: number,
  onDebounce: (value: T) => void,
): void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevValueRef = useRef<T>(value);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only trigger callback if value actually changed
    if (value !== prevValueRef.current && value) {
      timeoutRef.current = setTimeout(() => {
        prevValueRef.current = value;
        onDebounce(value);
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, onDebounce]);
}
