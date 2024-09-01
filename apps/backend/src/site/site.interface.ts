// monitor.interfaces.ts
export interface SiteStatus {
  id: number;
  up: boolean;
  createdAt: Date;
}

export interface StatusResponse {
  // Sites contains the current status of all sites,
  // keyed by the site ID.
  sites: SiteStatus[];
}

export interface PingResult {
  up: boolean;
}
