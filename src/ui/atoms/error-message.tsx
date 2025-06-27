type Props = {
  message: string;
  className?: string;
};

export default function ErrorMessage({
  message = "データの取得に失敗しました",
  className,
}: Props) {
  return (
    <p className={`text-sm text-[var(--app-attention-color)] ${className}`}>
      {message}
    </p>
  );
}
