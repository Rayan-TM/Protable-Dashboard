import Swal from "sweetalert2";

const Toast1 = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const Toast2 = Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
  position: "top-start",
  padding: "8px",
  width: "20em",
  color: "#fff",
  background: "#22B9FF",
  customClass: {
    icon: "swal2-icon",
  },
});

export { Toast1, Toast2 };
