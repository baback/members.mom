export function ogImageUrl(section: string, title: string, description: string) {
  const params = new URLSearchParams({ section, title, description });
  return `/og?${params.toString()}`;
}
