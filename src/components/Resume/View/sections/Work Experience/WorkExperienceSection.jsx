import { useState } from "react";
import WorkExperienceEmpty from "./WorkExperienceEmpty";
import WorkExperienceEdit from "./WorkExperienceEdit";
import WorkExperienceView from "./WorkExperienceView";

export default function  WorkExperienceSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState([]); 

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
        </span>
        Work Experience
      </h3>

      {!experiences.length && !isEditing && (
        <WorkExperienceEmpty onAdd={() => setIsEditing(true)} />
      )}

      {isEditing && (
        <WorkExperienceEdit
          experiences={experiences}
          onSave={(newExperiences) => {
            setExperiences(newExperiences);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}

      {experiences.length > 0 && !isEditing && (
        <WorkExperienceView
          experiences={experiences}
          onEdit={() => setIsEditing(true)}
          onRemove={(index) => {
            setExperiences(experiences.filter((_, i) => i !== index));
          }}
        />
      )}
    </section>
  );
}