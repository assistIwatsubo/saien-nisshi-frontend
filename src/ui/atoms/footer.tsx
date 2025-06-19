const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative z-2 w-full bg-[var(--app-home-base-color)]">
      <p className="text-center text-xs leading-loose text-[var(--app-primary-color)]">
        ©アシストシステムズ株式会社　Since {currentYear}
      </p>
    </footer>
  );
}
