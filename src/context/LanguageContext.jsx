import { createContext, useState } from "react";

export const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  // de, en, jp
  const [language, setLanguage] = useState("de");

  const languages = ["de", "en", "jp"];

  function changeLanguage(newLanguage) {
    if (!languages.includes(newLanguage)) {
      return;
    }
    setLanguage(newLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
