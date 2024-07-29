import React, { useState, useEffect } from "react";

const surahs = [
    { number: 1, name: "Al-Fatiha", ayahs: 7 },
    { number: 2, name: "Al-Baqarah", ayahs: 286 },
    { number: 3, name: "Aali Imran", ayahs: 200 },
    { number: 4, name: "An-Nisa", ayahs: 176 },
    { number: 5, name: "Al-Ma'idah", ayahs: 120 },
    { number: 6, name: "Al-An'am", ayahs: 165 },
    { number: 7, name: "Al-A'raf", ayahs: 206 },
    { number: 8, name: "Al-Anfal", ayahs: 75 },
    { number: 9, name: "At-Tawbah", ayahs: 129 },
    { number: 10, name: "Yunus", ayahs: 109 },
    { number: 11, name: "Hud", ayahs: 123 },
    { number: 12, name: "Yusuf", ayahs: 111 },
    { number: 13, name: "Ar-Ra'd", ayahs: 43 },
    { number: 14, name: "Ibrahim", ayahs: 52 },
    { number: 15, name: "Al-Hijr", ayahs: 99 },
    { number: 16, name: "An-Nahl", ayahs: 128 },
    { number: 17, name: "Al-Isra", ayahs: 111 },
    { number: 18, name: "Al-Kahf", ayahs: 110 },
    { number: 19, name: "Maryam", ayahs: 98 },
    { number: 20, name: "Taha", ayahs: 135 },
    { number: 21, name: "Al-Anbiya", ayahs: 112 },
    { number: 22, name: "Al-Hajj", ayahs: 78 },
    { number: 23, name: "Al-Mu'minun", ayahs: 118 },
    { number: 24, name: "An-Nur", ayahs: 64 },
    { number: 25, name: "Al-Furqan", ayahs: 77 },
    { number: 26, name: "Ash-Shu'ara", ayahs: 227 },
    { number: 27, name: "An-Naml", ayahs: 93 },
    { number: 28, name: "Al-Qasas", ayahs: 88 },
    { number: 29, name: "Al-Ankabut", ayahs: 69 },
    { number: 30, name: "Ar-Rum", ayahs: 60 },
    { number: 31, name: "Luqman", ayahs: 34 },
    { number: 32, name: "As-Sajda", ayahs: 30 },
    { number: 33, name: "Al-Ahzab", ayahs: 73 },
    { number: 34, name: "Saba", ayahs: 54 },
    { number: 35, name: "Fatir", ayahs: 45 },
    { number: 36, name: "Ya-Sin", ayahs: 83 },
    { number: 37, name: "As-Saffat", ayahs: 182 },
    { number: 38, name: "Sad", ayahs: 88 },
    { number: 39, name: "Az-Zumar", ayahs: 75 },
    { number: 40, name: "Ghafir", ayahs: 85 },
    { number: 41, name: "Fussilat", ayahs: 54 },
    { number: 42, name: "Ash-Shura", ayahs: 53 },
    { number: 43, name: "Az-Zukhruf", ayahs: 89 },
    { number: 44, name: "Ad-Dukhan", ayahs: 59 },
    { number: 45, name: "Al-Jathiya", ayahs: 37 },
    { number: 46, name: "Al-Ahqaf", ayahs: 35 },
    { number: 47, name: "Muhammad", ayahs: 38 },
    { number: 48, name: "Al-Fath", ayahs: 29 },
    { number: 49, name: "Al-Hujurat", ayahs: 18 },
    { number: 50, name: "Qaf", ayahs: 45 },
    { number: 51, name: "Adh-Dhariyat", ayahs: 60 },
    { number: 52, name: "At-Tur", ayahs: 49 },
    { number: 53, name: "An-Najm", ayahs: 62 },
    { number: 54, name: "Al-Qamar", ayahs: 55 },
    { number: 55, name: "Ar-Rahman", ayahs: 78 },
    { number: 56, name: "Al-Waqi'a", ayahs: 96 },
    { number: 57, name: "Al-Hadid", ayahs: 29 },
    { number: 58, name: "Al-Mujadila", ayahs: 22 },
    { number: 59, name: "Al-Hashr", ayahs: 24 },
    { number: 60, name: "Al-Mumtahina", ayahs: 13 },
    { number: 61, name: "As-Saff", ayahs: 14 },
    { number: 62, name: "Al-Jumu'a", ayahs: 11 },
    { number: 63, name: "Al-Munafiqun", ayahs: 11 },
    { number: 64, name: "At-Taghabun", ayahs: 18 },
    { number: 65, name: "At-Talaq", ayahs: 12 },
    { number: 66, name: "At-Tahrim", ayahs: 12 },
    { number: 67, name: "Al-Mulk", ayahs: 30 },
    { number: 68, name: "Al-Qalam", ayahs: 52 },
    { number: 69, name: "Al-Haqqah", ayahs: 52 },
    { number: 70, name: "Al-Ma'arij", ayahs: 44 },
    { number: 71, name: "Nuh", ayahs: 28 },
    { number: 72, name: "Al-Jinn", ayahs: 28 },
    { number: 73, name: "Al-Muzzammil", ayahs: 20 },
    { number: 74, name: "Al-Muddathir", ayahs: 56 },
    { number: 75, name: "Al-Qiyama", ayahs: 40 },
    { number: 76, name: "Al-Insan", ayahs: 31 },
    { number: 77, name: "Al-Mursalat", ayahs: 50 },
    { number: 78, name: "An-Naba", ayahs: 40 },
    { number: 79, name: "An-Nazi'at", ayahs: 46 },
    { number: 80, name: "Abasa", ayahs: 42 },
    { number: 81, name: "At-Takwir", ayahs: 29 },
    { number: 82, name: "Al-Infitar", ayahs: 19 },
    { number: 83, name: "Al-Mutaffifin", ayahs: 36 },
    { number: 84, name: "Al-Inshiqaq", ayahs: 25 },
    { number: 85, name: "Al-Buruj", ayahs: 22 },
    { number: 86, name: "At-Tariq", ayahs: 17 },
    { number: 87, name: "Al-Ala", ayahs: 19 },
    { number: 88, name: "Al-Ghashiyah", ayahs: 26 },
    { number: 89, name: "Al-Fajr", ayahs: 30 },
    { number: 90, name: "Al-Balad", ayahs: 20 },
    { number: 91, name: "Ash-Shams", ayahs: 15 },
    { number: 92, name: "Al-Lail", ayahs: 21 },
    { number: 93, name: "Ad-Duha", ayahs: 11 },
    { number: 94, name: "Ash-Sharh", ayahs: 8 },
    { number: 95, name: "At-Tin", ayahs: 8 },
    { number: 96, name: "Al-Alaq", ayahs: 19 },
    { number: 97, name: "Al-Qadr", ayahs: 5 },
    { number: 98, name: "Al-Bayyina", ayahs: 8 },
    { number: 99, name: "Az-Zalzalah", ayahs: 8 },
    { number: 100, name: "Al-Adiyat", ayahs: 11 },
    { number: 101, name: "Al-Qari'a", ayahs: 11 },
    { number: 102, name: "At-Takathur", ayahs: 8 },
    { number: 103, name: "Al-Asr", ayahs: 3 },
    { number: 104, name: "Al-Humaza", ayahs: 9 },
    { number: 105, name: "Al-Fil", ayahs: 5 },
    { number: 106, name: "Quraish", ayahs: 4 },
    { number: 107, name: "Al-Ma'un", ayahs: 7 },
    { number: 108, name: "Al-Kawthar", ayahs: 3 },
    { number: 109, name: "Al-Kafirun", ayahs: 6 },
    { number: 110, name: "An-Nasr", ayahs: 3 },
    { number: 111, name: "Al-Masad", ayahs: 5 },
    { number: 112, name: "Al-Ikhlas", ayahs: 4 },
    { number: 113, name: "Al-Falaq", ayahs: 5 },
    { number: 114, name: "An-Nas", ayahs: 6 }
];

const languages = [
    { code: "ar", name: "Arabic" },
    { code: "en.sahih", name: "English" },
    { code: "fr.hamidullah", name: "French" },
    { code: "de.aburida", name: "German" },
    { code: "tr.diyanet", name: "Turkish" }
];

function Display() {
    const [surah, setSurah] = useState("1");
    const [ayah, setAyah] = useState("");
    const [surahText, setSurahText] = useState("");
    const [language, setLanguage] = useState("ar");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    const handleSurahChange = (event) => {
        setSurah(event.target.value);
        setAyah("");
    };

    const handleAyahChange = (event) => {
        setAyah(event.target.value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://api.alquran.cloud/v1/surah/${surah}${language === "ar" ? "" : `/${language}`}`);
            if (!response.ok) {
                throw new Error("Error");
            }
            const data = await response.json();
            let formattedText;
            if (ayah) {
                const selectedAyah = data.data.ayahs.find(a => a.numberInSurah === parseInt(ayah));
                formattedText = `${selectedAyah.text} ۝${selectedAyah.numberInSurah}`;
            } else {
                formattedText = data.data.ayahs.map(ayah => `${ayah.text}  ۝${ayah.numberInSurah}`).join(" ");
            }
            setSurahText(formattedText);
        } catch (error) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setAyah("");
    }, [surah]);

    const selectedSurah = surahs.find(s => s.number === parseInt(surah));
    const ayahOptions = selectedSurah ? Array.from({ length: selectedSurah.ayahs }, (_, i) => i + 1) : [];

    return (
        <div className="container">
            <div className="select-container">
                <select onChange={handleSurahChange} value={surah}>
                    {surahs.map((surah) => (
                        <option key={surah.number} value={surah.number}>
                            {surah.number}. {surah.name}
                        </option>
                    ))}
                </select>
                <select onChange={handleLanguageChange} value={language}>
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>
                {selectedSurah && (
                    <select onChange={handleAyahChange} value={ayah}>
                        <option value="">Whole Surah</option>
                        {ayahOptions.map((num) => (
                            <option key={num} value={num}>
                                Ayah {num}
                            </option>
                        ))}
                    </select>
                )}
                <button type="button" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {surahText && <div className="surah-text" style={{direction: language === "ar" ? "rtl" : "ltr"}}>{surahText}</div>}
        </div>
    );
}

export default Display;