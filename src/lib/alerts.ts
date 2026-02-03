import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import type { NavigateFunction } from "react-router-dom";

export interface SuccessAlertOptions {
  title?: string;
  text?: string;
  timer?: number; // ms; if set, auto-close after timer
}

/**
 * Mostra um alerta de sucesso reutilizável.
 */
export async function showSuccessAlert(options: SuccessAlertOptions = {}) {
  const { title = "Sucesso", text = "Operação concluída com sucesso.", timer } = options;

  return Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "Continuar",
    timer,
    timerProgressBar: !!timer,
  });
}

/**
 * Simula loading (delay) e depois mostra um alerta de sucesso. Se for passado `navigate` e `redirectPath`, redireciona após confirmação.
 * Reutilizável para cenários de login/ação com redireção.
 */
export async function showLoadingThenSuccessRedirect(
  navigate: NavigateFunction | null,
  redirectPath = "/dashboard",
  options: SuccessAlertOptions = {},
  loadingTime = 1500
) {
  // Simula loading
  await new Promise((r) => setTimeout(r, loadingTime));

  // Mostra alerta
  await showSuccessAlert(options);

  // Redireciona se possível
  if (navigate) {
    navigate(redirectPath);
  }
}
