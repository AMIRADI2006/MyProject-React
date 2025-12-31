import { useState } from "react";
import AboutMeEmpty from "./AboutMeEmpty";
import AboutMeEdit from "./AboutMeEdit";
import AboutMeView from "./AboutMeView";

export default function AboutMeSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutMe, setAboutMe] = useState("");

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      {/* Header */}
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0
                 3.75 3.75 0 0 1 7.5 0ZM4.501
                 20.118a7.5 7.5 0 0 1 14.998
                 0A17.933 17.933 0 0 1 12
                 21.75c-2.676 0-5.216-.584
                 -7.499-1.632Z" />
          </svg>
        </span>
        About me
      </h3>

      {/* States */}
      {!aboutMe && !isEditing && (
        <AboutMeEmpty onAdd={() => setIsEditing(true)} />
      )}

      {isEditing && (
        <AboutMeEdit
          value={aboutMe}
          onSave={(text) => {
            setAboutMe(text);
            setIsEditing(false);
          }}
        />
      )}

      {aboutMe && !isEditing && (
        <AboutMeView
          text={aboutMe}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </section>
  );
}
