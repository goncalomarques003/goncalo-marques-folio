import { Language, useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const languages: { code: Language; flag: string; name: string }[] = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "pt", flag: "🇵🇹", name: "Português" },
  { code: "es", flag: "🇪🇸", name: "Español" },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="text-lg"
          title={lang.name}
        >
          {lang.flag}
        </Button>
      ))}
    </div>
  );
};
