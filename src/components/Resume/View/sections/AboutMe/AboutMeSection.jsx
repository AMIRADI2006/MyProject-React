import { useState, useEffect } from "react";
import AboutMeEmpty from "./AboutMeEmpty";
import AboutMeEdit from "./AboutMeEdit";
import AboutMeView from "./AboutMeView";
import api from "../../../../../api/axios";

export default function AboutMeSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutMe, setAboutMe] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 گرفتن داده از بک‌اند
  useEffect(() => {
    async function fetchAboutMe() {
      try {
        const res = await api.get("/v1/about-me");
        if (res.data?.content) {
          setAboutMe(res.data.content);
        }
      } catch (err) {
        console.log("No about me yet");
      } finally {
        setLoading(false);
      }
    }

    fetchAboutMe();
  }, []);

  // 🔹 ذخیره یا ویرایش
  const handleSave = async (text) => {
    if (!text.trim()) return;

    try {
      const res = await api.post("/v1/about-me", {
        content: text, // ⬅️ اسم درست فیلد
      });

      setAboutMe(res.data.content);
      setIsEditing(false);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  if (loading) return null;

  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
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
        About me
      </h3>

      {!aboutMe && !isEditing && (
        <AboutMeEmpty onAdd={() => setIsEditing(true)} />
      )}

      {isEditing && (
        <AboutMeEdit
          value={aboutMe}
          onSave={handleSave}
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
