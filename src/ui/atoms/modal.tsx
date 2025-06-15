import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) {
      // モーダルを開く
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else {
      // モーダルを閉じる
      if (dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  // dialog外クリックやEscキーで閉じる処理
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function onCancel(event: Event) {
      event.preventDefault(); // デフォルトの閉じる挙動を止める
      onClose();
    }

    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="max-h-md m-auto max-w-md rounded-xl p-6 shadow-lg backdrop:bg-black/20"
      onClick={(e) => {
        // dialog外クリックで閉じる処理
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      aria-modal="true"
      role="dialog"
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 h-8 w-8 rounded-bl-md bg-gray-300 text-gray-500 hover:text-black"
        aria-label="Close modal"
      >
        ✕
      </button>
      {children}
    </dialog>
  );
}
