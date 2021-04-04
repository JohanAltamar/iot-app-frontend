import Swal from "sweetalert2"

export const errorAlert = (title = '') => {
  Swal.fire(title, undefined, "error")
}
