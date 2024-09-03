export type MonitorStatusType = {
  id: number;
  up: boolean;
  createdAt: string | any;
}

export type DoCheckType = {
  id: number;
  url: string;
}

export type PingResultType = {
  up: boolean;
}