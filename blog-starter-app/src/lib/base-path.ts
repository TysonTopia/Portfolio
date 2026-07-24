const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath =
  configuredBasePath === "/" ? "" : configuredBasePath.replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (!basePath || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}

export function withBasePathInContent(content: string) {
  return content.replace(
    /(src|href)=["'](\/(?!\/)[^"']*)["']/g,
    (_, attribute: string, path: string) =>
      `${attribute}="${withBasePath(path)}"`,
  );
}
