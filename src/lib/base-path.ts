export function withBase(path: string, base = import.meta.env.BASE_URL): string {
  const normalizedBase = `/${base.replace(/^\/+|\/+$/g, '')}`;
  const prefix = normalizedBase === '/' ? '' : normalizedBase;
  const normalizedPath = `/${path.replace(/^\/+/, '')}`;

  if (
    prefix &&
    (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`))
  ) {
    return normalizedPath;
  }

  return `${prefix}${normalizedPath}` || '/';
}
