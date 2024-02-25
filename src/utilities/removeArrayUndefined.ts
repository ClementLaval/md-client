export const removeArrayUndefined = <T>(arr: (T | undefined)[]) =>
  arr.filter((item): item is T => item !== undefined);
