"use client";

import { FieldData, LayoutData } from "@/types/user-data";
import FieldLayoutDisplay from "./field-layout-display";
import FieldLayoutForm from "./field-layout-form";
import { useState } from "react";

type Props = {
  fields?: FieldData[];
  layouts?: LayoutData[];
  edit?: boolean;
};

const createEmptyLayout = (): LayoutData => ({
  layoutId: 0,
  year: new Date().getFullYear(),
  title: "未設定",
  fieldId: 0,
  fieldName: "未設定",
  direction: "vertical",
  gap: 0,
  memo: "",
  ridges: [],
});

export default function FieldLayout({ edit = false, fields, layouts }: Props) {
  const [layout, setLayout] = useState<LayoutData>(
    layouts && layouts.length > 0 ? layouts[0] : createEmptyLayout(),
  );

  const handleChange = (next: LayoutData) => {
    setLayout(next);
  };

  return (
    <article data-layout="plan">
      <nav>
        <ol>
          {!layouts || layouts.length === 0 ? (
            <li>
              <h3 className="app-blurred-bg-white w-fit rounded-t-lg px-4 py-1 text-xl font-bold">
                {new Date().getFullYear()}年
              </h3>
            </li>
          ) : (
            layouts.map((l) => (
              <li key={`nav-${l.layoutId}`}>
                <h3 className="app-blurred-bg-white w-fit rounded-t-lg px-4 py-1 text-xl font-bold">
                  {l.year}年
                </h3>
              </li>
            ))
          )}
        </ol>
      </nav>

      <div className="app-blurred-bg-white min-w-full rounded-lg rounded-tl-none p-4">
        <div className="flex w-auto items-start justify-start rounded-md border-2 border-white bg-white/50 p-4 shadow-sm">
          {!layouts || layouts.length === 0 ? (
            // データがない場合は登録用フォームだけを表示
            <div className="w-full p-4">
              <div className="mb-2 text-center text-gray-500">
                データがありません。まずはレイアウトを登録しましょう！
              </div>
              <FieldLayoutForm
                layout={layout}
                fields={fields}
                onChange={handleChange}
              />
            </div>
          ) : (
            // layouts がある場合は従来通り表示
            layouts.map((l) =>
              edit ? (
                <div key={l.layoutId} className="flex gap-4">
                  <FieldLayoutDisplay layout={layout} />
                  <FieldLayoutForm
                    layout={layout}
                    fields={fields}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <FieldLayoutDisplay layout={l} key={l.layoutId} />
              ),
            )
          )}
        </div>
      </div>
    </article>
  );
}
