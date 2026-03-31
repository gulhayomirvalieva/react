import React, { useEffect, useState } from "react";
import { getProfile, updateProfile, deleteUser } from "../services/userService";
import "./MyProfile.css";
import Navbar from "../components/Navbar";

const MyProfile = () => {
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        password: "",
        photoUrl: "",
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const userId = localStorage.getItem("userId");

    // 🔹 Profilni olish
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfile(userId);
                setProfile({
                    username: data.username || "",
                    email: data.email || "",
                    password: "",
                    photoUrl: data.photoUrl || "",
                });
                setLoading(false);
            } catch (err) {
                console.error("Profile fetch error:", err);
                setMessage("⚠️ Profilni yuklab bo‘lmadi");
                setLoading(false);
            }
        };
        fetchProfile();
    }, [userId]);

    // 🔹 Input o‘zgarishlari
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    // 🔹 Profilni yangilash
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updated = await updateProfile(userId, profile);
            setProfile({
                ...updated.user,
                password: "",
            });
            setMessage("✅ Profil muvaffaqiyatli yangilandi");
        } catch (err) {
            console.error("Profile update error:", err);
            setMessage("❌ Profilni yangilashda xatolik");
        }
    };

    // 🔹 Profilni o‘chirish
    const handleDelete = async () => {
        if (!window.confirm("Profilingizni o‘chirmoqchimisiz?")) return;
        try {
            await deleteUser();
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            alert("🗑 Profil o‘chirildi!");
            window.location.href = "/"; // Bosh sahifaga qaytadi
        } catch (err) {
            console.error("Delete profile error:", err);
            setMessage("❌ Profilni o‘chirishda xatolik");
        }
    };

    if (loading) return <p>⏳ Yuklanmoqda...</p>;

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <h2>My Profile</h2>

                {profile.photoUrl ? (
                    <img src={profile.photoUrl} alt="Profile" className="profile-img" />
                ) : (
                    <div className="no-photo">No Photo</div>
                )}

                <form className="profile-form" onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={profile.username}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                            placeholder="Yangi parol kiriting"
                        />
                    </label>

                    <label>
                        Photo URL:
                        <input
                            type="text"
                            name="photoUrl"
                            value={profile.photoUrl}
                            onChange={handleChange}
                            placeholder="Rasm URL kiriting"
                        />
                    </label>

                    <div className="profile-buttons">
                        <button type="submit" className="update-btn">Update Profile</button>
                        <button type="button" className="delete-btn" onClick={handleDelete}>Delete Profile</button>
                    </div>
                </form>

                {message && <p className="message">{message}</p>}
            </div>
        </>
    );
};

export default MyProfile;
