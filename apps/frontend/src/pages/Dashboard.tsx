import SiteList from '@/components/SiteList';
import { FC } from "react";

const DashboardPage: FC = () => (
  <div className="min-h-full container px-4 mx-auto my-16">
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
      Uptime Monitoring
    </h2>
    <p className="mt-2 text-sm text-gray-500">
      Monitor the uptime of your websites and APIs.
    </p>
    <main className="pt-8 pb-16">
      <SiteList />
    </main>
  </div>
);

export default DashboardPage;