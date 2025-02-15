export function validateDevice() {
  if (typeof window !== "undefined") {
    const regex = new RegExp(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
    const userAgent =
      typeof window?.navigator === "undefined" ? "" : navigator?.userAgent;

    const isMobile = Boolean(regex.exec(userAgent));

    return { isMobile };
  }
  return { isMobile: false };
}
