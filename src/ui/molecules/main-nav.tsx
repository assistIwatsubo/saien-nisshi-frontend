type NavItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  color: string;
};

type Props = {
  navItems: NavItem[];
  selected: string | null;
  onClick: (key: string) => void;
};

export default function MainNav({ navItems, selected, onClick }: Props) {
  return (
    <nav className="flex w-1/4 flex-col items-start justify-start">
      <ul className="w-full">
        {navItems.map((item) => {
          const isSelected = item.key === selected;

          return (
            <li key={item.key} className="w-full">
              <button
                onClick={() => onClick(item.key)}
                className={`relative flex w-full items-center gap-2 overflow-hidden border-l-4 bg-[linear-gradient(to_right,rgba(255,255,255,0.75),rgba(255,255,255,0))] px-4 py-2 transition-colors duration-500`}
                style={{ borderColor: item.color }}
              >
                <span
                  className="pointer-events-none absolute top-0 left-0 h-full w-full transition-all duration-500"
                  style={{
                    backgroundColor: `${isSelected ? item.color : "transparent"}`,
                    zIndex: 0,
                    animation: `${isSelected ? "fillForward" : "fillBackward"} 0.5s forwards`,
                  }}
                />

                <span
                  className={`${isSelected && "font-bold text-white"} relative z-10`}
                >
                  {item.icon}
                </span>
                <span
                  className={`${isSelected && "font-bold text-white app-text-shadow"} relative z-10`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        @keyframes fillForward {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fillBackward {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </nav>
  );
}
