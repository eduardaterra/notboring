const blockScroll = () => {
  const html = document?.documentElement;
  const { body } = document;

  if (body.style) {
    html.style.position = "relative";
    body.style.position = "relative";
    html.style.overflow = "hidden";
  }
};

const allowScroll = () => {
  const html = document?.documentElement;
  const { body } = document;

  if (body.style) {
    html.style.position = "";
    body.style.position = "";
    html.style.overflow = "";
  }
};

export function useScrollLock() {
  return { blockScroll, allowScroll };
}
