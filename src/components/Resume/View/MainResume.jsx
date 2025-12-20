import { useState, useEffect } from 'react';
import ProfileCard from "./Profile Card";
import PersonalInfoEdit from "../Edite/Personal InfoEdit";
import PersonalInfoView from "./Personal InfoView";
import TestResume from "./TestResume";

import api from "../../../api/axios";

export default function MainResume() {

    const [isEditingPersonal, setIsEditingPersonal] = useState(false);

    const [personalInfo, setPersonalInfo] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/v1/personal-info');
                setPersonalInfo(response.data.profile);
            } catch (error) {
                console.log("Error fetching personal info:", error);
            }
        }
        fetchData();
    }, []);

    // هندل ذخیره‌سازی از فرم ادیت
    const handleSave = async (updatedData) => {
        try {
            const res = await api.put("/v1/personal-info", updatedData);

            // آپدیت استیت با داده‌ی جدید برگشتی از بک‌اند
            setPersonalInfo(res.data.profile);
            
            // برگرد به حالت نمایش
            setIsEditingPersonal(false);

        } catch (error) {
            console.log("Error updating personal info:", error);
        }
    };

    if (!personalInfo) return <p className="p-5">Loading...</p>;

    return (
        <>
            <ProfileCard data={personalInfo} />

            {!isEditingPersonal && (<PersonalInfoView data={personalInfo} onEdit={() => setIsEditingPersonal(true)}/>)}

            {isEditingPersonal && (<PersonalInfoEdit data={personalInfo} onSave={handleSave}/>)}

            <TestResume />
        </>
    );
}
