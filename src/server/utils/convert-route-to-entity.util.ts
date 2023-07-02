const mapping: Record<string, string> = {
  events: 'event',
  items: 'item',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
