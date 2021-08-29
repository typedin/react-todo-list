export default function createId(ids: Array<number>): number {
  if (!ids.length) {
    return 1;
  }
  return Math.max(...ids) + 1;
}
