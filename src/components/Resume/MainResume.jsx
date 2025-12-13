import { useState, useEffect } from 'react';
import ProfileCard from "./Profile Card";
import PersonalInfoEdit from "./Edite/Personal InfoEdit";
import PersonalInfoView from "./View/Personal InfoView";
import TestResume from "./View/TestResume";

import api from "../../api/axios"; // مهم

export default function MainResume() {

    const [isEditingPersonal, setIsEditingPersonal] = useState(false);

    // استیت برای نگهداری اطلاعات از بک اند
    const [personalInfo, setPersonalInfo] = useState(null);

    // گرفتن اطلاعات از بک اند موقع لود شدن کامپوننت
    useEffect(() => {
        api.get("/v1/personal-info")
            .then(res => {
                setPersonalInfo(res.data.data);
            })
            .catch(err => {
                console.log("Error fetching personal info:", err);
            });
    }, []);

    // هندل ذخیره‌سازی از فرم ادیت
    const handleSave = async (updatedData) => {
        try {
            const res = await api.put("/v1/personal-info", updatedData);

            // آپدیت استیت با داده‌ی جدید برگشتی از بک‌اند
            setPersonalInfo(res.data.data);

            // برگرد به حالت نمایش
            setIsEditingPersonal(false);

        } catch (error) {
            console.log("Error updating personal info:", error);
        }
    };

    if (!personalInfo) return <p className="p-5">Loading...</p>;

    return (
        <>
            <ProfileCard data={personalInfo}/>

            {!isEditingPersonal && (
                <PersonalInfoView 
                    data={personalInfo}
                    onEdit={() => setIsEditingPersonal(true)}
                />
            )}

            {isEditingPersonal && (
                <PersonalInfoEdit 
                    data={personalInfo}
                    onSave={handleSave}
                />
            )}

            <TestResume />
        </>
    );
}
