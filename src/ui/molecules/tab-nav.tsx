type Props = {
  years: number[];
  onYearSelect: (year: number) => void; // 年度を選択したときに呼び出す関数
};

export default function TabNav({ years, onYearSelect }: Props) {
  return (
    <nav>
      <ol>
        {!years || years.length === 0 ? (
          <li>
            <h3 className="app-blurred-bg-white w-fit rounded-t-lg px-4 py-1 text-xl font-bold first:rounded-tl-none">
              {new Date().getFullYear()}年
            </h3>
          </li>
        ) : (
          years.map((year, index) => (
            <li key={`nav-${index}`}>
              <h3
                className="app-blurred-bg-white w-fit rounded-t-lg px-4 py-1 text-xl font-bold first:rounded-tl-none"
                onClick={() => onYearSelect(year)} // クリック時に親に選択した年度を通知
              >
                {year}年
              </h3>
            </li>
          ))
        )}
      </ol>
    </nav>
  );
}
