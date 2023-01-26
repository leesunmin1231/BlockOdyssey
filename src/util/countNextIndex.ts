export default function countNextIndex(next: number, totalLength: number): number {
  if (next >= totalLength) {
    return next - totalLength;
  }
  if (next < 0) {
    return totalLength + next;
  }
  return next;
}
