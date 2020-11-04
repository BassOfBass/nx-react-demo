export function formatRating(rating: number) {
  const formattedRating = Math.round( rating * 100 ) / 10;

  return `${formattedRating} / 10`;
  
}