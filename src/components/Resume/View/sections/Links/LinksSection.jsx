import { useState } from "react";
import LinksEmpty from "./LinksEmpty";
import LinksEdit from "./LinksEdit";
import LinksView from "./LinksView";

export default function LinksSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [links, setLinks] = useState([]); // array of objects: { platform, url }

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </span>
        Links
      </h3>

      {!links.length && !isEditing && (
        <LinksEmpty onAdd={() => setIsEditing(true)} />
      )}

      {isEditing && (
        <LinksEdit
          links={links}
          onSave={(newLinks) => {
            setLinks(newLinks);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}

      {links.length > 0 && !isEditing && (
        <LinksView
          links={links}
          onEdit={() => setIsEditing(true)}
          onRemove={(index) => {
            setLinks(links.filter((_, i) => i !== index));
          }}
        />
      )}
    </section>
  );
}