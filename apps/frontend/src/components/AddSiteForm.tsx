import { FC, useState } from "react";
import { useSaveSiteMutation } from "@/hooks/useSiteQuery";
import { validURL } from "@/utils/ValidURL";

const AddSiteForm: FC = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [url, setUrl] = useState("");
    const save = useSaveSiteMutation();
  
    const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      save.mutate(url);
      setFormOpen(false);
    };
  
    if (!formOpen) {
      return (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          onClick={() => setFormOpen(true)}
        >
          Add website
        </button>
      );
    }
  
    return (
      <form onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="google.com"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
  
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm enabled:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75"
              disabled={!validURL(url)}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };

export default AddSiteForm;