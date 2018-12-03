export function page2Offset(pageIndex: number, pageSize: number): { position: string, offset: string } {
  const position = (pageIndex - 1) * pageSize + 1;
  const offset = pageSize;
  return { position: String(position), offset: String(offset) };
}
