import { toast } from "sonner"


export function dismissAllToasts() {
  return toast.dismiss();
}

export function undoToast(title: string, description: string) {
  return toast(title, { description, action: { label: "undo", onClick: () => { } } })
}

export function successToast(title: string, description: string) {
  return toast.success(title, { description, action: { label: "undo", onClick: () => { } } })
}

export function warningToast(title: string, description: string) {

  return toast.warning(title, { description, action: { label: "undo", onClick: () => { } } })
}