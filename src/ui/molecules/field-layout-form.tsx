"use client";

import { FieldData, LayoutData } from "@/types/user-data";

type Props = {
  layout: LayoutData;
  fields?: FieldData[];
  onChange: (next: LayoutData) => void;
};

export default function FieldLayoutDisplay({
  layout,
  fields = [],
  onChange,
}: Props) {
  const update = <K extends keyof LayoutData>(key: K, value: LayoutData[K]) => {
    onChange({ ...layout, [key]: value });
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-bold text-[var(--app-primary-color)]">
        レイアウト編集
      </h3>

      {/* --- 基本情報 --- */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">タイトル</label>
        <input
          type="text"
          value={layout.title}
          onChange={(e) => update("title", e.target.value)}
          className="input"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">方向(direction)</label>
        <select
          value={layout.direction}
          onChange={(e) => update("direction", e.target.value)}
          className="input"
        >
          <option value="vertical">縦畝（vertical）</option>
          <option value="horizontal">横畝（horizontal）</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">畝間(gap) [cm]</label>
        <input
          type="number"
          value={layout.gap}
          onChange={(e) => update("gap", Number(e.target.value))}
          className="input"
        />
      </div>

      {/* --- 畝の一覧 --- */}
      <div className="mt-6">
        <h4 className="font-bold">畝（Ridges）</h4>

        <div className="mt-2 flex flex-col gap-4">
          {layout.ridges?.map((ridge, idx) => (
            <div key={ridge.ridgeId} className="rounded border p-2">
              <p className="mb-2 text-sm font-bold">
                {ridge.name}（ID: {ridge.ridgeId}）
              </p>

              {/* サイズ */}
              <label className="text-xs">畝幅(size) [cm]</label>
              <input
                type="number"
                value={ridge.size}
                onChange={(e) => {
                  const next = [...(layout.ridges ?? [])];
                  next[idx] = { ...ridge, size: Number(e.target.value) };
                  onChange({ ...layout, ridges: next });
                }}
                className="input mt-1"
              />

              {/* ridgeDetails はここでさらに展開 */}
              <div className="mt-3">
                <p className="text-xs font-bold">作付区画（ridgeDetails）</p>
                {ridge.ridgeDetails?.map((detail, dIdx) => (
                  <div key={detail.ridgeDetailId} className="mt-2 ml-2">
                    <label className="text-xs">作物名</label>
                    <input
                      type="text"
                      value={detail.cropName}
                      onChange={(e) => {
                        const nextRidges = [...(layout.ridges ?? [])];
                        const nextDetails = [...(ridge.ridgeDetails ?? [])];
                        nextDetails[dIdx] = {
                          ...detail,
                          cropName: e.target.value,
                        };
                        nextRidges[idx] = {
                          ...ridge,
                          ridgeDetails: nextDetails,
                        };
                        onChange({ ...layout, ridges: nextRidges });
                      }}
                      className="input text-xs"
                    />

                    <label className="mt-1 text-xs">区画比率(ratio)</label>
                    <input
                      type="number"
                      value={detail.ratio}
                      onChange={(e) => {
                        const nextRidges = [...(layout.ridges ?? [])];
                        const nextDetails = [...(ridge.ridgeDetails ?? [])];
                        nextDetails[dIdx] = {
                          ...detail,
                          ratio: Number(e.target.value),
                        };
                        nextRidges[idx] = {
                          ...ridge,
                          ridgeDetails: nextDetails,
                        };
                        onChange({ ...layout, ridges: nextRidges });
                      }}
                      className="input text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
