const isLogin = () => {
  if (localStorage.getItem("Token")) {
    return true;
  }
  return false;
};

const generateHash = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < charactersLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const toggleFullScreen = () => {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
};

const dragOverHandler = (e) => {
  e.preventDefault();
  const parent = e.target.parentElement;
  const isParent = [...parent.classList].includes("list-container");
  if (isParent) {
    const draggingItem = parent.querySelector(".item.opacity-60");
    const siblings = [...parent.querySelectorAll(".item:not(.opacity-60)")];
    const newSibling = siblings.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;

    if (newSibling == null) {
      parent.appendChild(draggingItem);
    } else {
      parent.insertBefore(draggingItem, newSibling);
    }
  }
};



export { isLogin, generateHash, toggleFullScreen, dragOverHandler };
