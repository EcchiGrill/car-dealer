export const YEARS = Array.from(
  {
    length:
      new Date().getFullYear() - Number(process.env.NEXT_PUBLIC_FROM_YEAR) + 1,
  },
  (_, i) => (Number(process.env.NEXT_PUBLIC_FROM_YEAR) + i).toString()
).sort((a, b) => Number(b) - Number(a));
