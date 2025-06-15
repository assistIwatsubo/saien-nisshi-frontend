"use client";

import { useModal } from "@/hooks/useModal";
import Modal from "../atoms/modal";
import FormLogin from "./forms/form-login";
import Button from "../atoms/button";
import LinkButton from "../atoms/link-button";

export default function LoginWithModal() {
  const { isOpen, open, close } = useModal();
  return (
    <div
      data-role="button-wrapper"
      className="container flex flex-col items-center justify-center py-4 text-center"
    >
      <Button onClick={open} color="secondary">
        ログイン
      </Button>
      <p className="mt-4 mb-1 bg-white/75 px-2 text-xs">
        ↓ユーザー登録がまだの方はこちら↓
      </p>
      <LinkButton href="/signup" color="primary">
        新規ユーザー登録
      </LinkButton>
      <Modal isOpen={isOpen} onClose={close}>
        <FormLogin />
      </Modal>
    </div>
  );
}
