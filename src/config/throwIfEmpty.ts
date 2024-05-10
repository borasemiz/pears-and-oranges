export function throwIfEmpty(value: string | undefined | null): string {
  if (value === undefined || value === null) {
    throw new Error('the value does not exist');
  }

  return value;
}