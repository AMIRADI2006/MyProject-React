import { useState } from "react";
import PreferredJobBenefitsEmpty from "./PreferredJobBenefitsEmpty";
import PreferredJobBenefitsEdit from "./PreferredJobBenefitsEdit";
import PreferredJobBenefitsView from "./PreferredJobBenefitsView";

export default function PreferredJobBenefitsSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [benefits, setBenefits] = useState([]); // array of strings

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-10">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </span>
        Preferred Job Benefits
      </h3>

      {!benefits.length && !isEditing && (
        <PreferredJobBenefitsEmpty onAdd={() => setIsEditing(true)} />
      )}

      {isEditing && (
        <PreferredJobBenefitsEdit
          selectedBenefits={benefits}
          onSave={(newBenefits) => {
            setBenefits(newBenefits);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}

      {benefits.length > 0 && !isEditing && (
        <PreferredJobBenefitsView
          benefits={benefits}
          onEdit={() => setIsEditing(true)}
          onRemove={(benefitToRemove) => {
            setBenefits(benefits.filter(b => b !== benefitToRemove));
          }}
        />
      )}
    </section>
  );
}