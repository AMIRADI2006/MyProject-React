import { useState } from "react";
import EducationEmpty from "./EducationEmpty";
import EducationEdit from "./EducationEdit";
import EducationView from "./EducationView";

export default function EducationSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [educations, setEducations] = useState([]);

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347M12 3.493a59.903 59.903 0 0 1 10.399 5.84M12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
        Education
      </h3>

      {!educations.length && !isEditing && (
        <EducationEmpty onAdd={() => setIsEditing(true)} />
      )}

      {isEditing && (
        <EducationEdit
          educations={educations}
          onSave={(list) => {
            setEducations(list);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}

      {educations.length > 0 && !isEditing && (
        <EducationView
          educations={educations}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </section>
  );
}
