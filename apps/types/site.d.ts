export type SiteType = {
  id: number;
  url: string;
  created_at: Date;
};

export type SiteListType = SiteType[];

export type SiteAddType = {
  url: string;
};