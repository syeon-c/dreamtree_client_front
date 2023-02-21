import consts from "@/consts/const";

export function getPersonImageUrl(url) {
  return "public/person.jpg"
  // return `${consts.IMG_DOMAIN}/${url}` || "public/person.jpg"
}
export function getImageUrl(url) {
  return `${consts.IMG_DOMAIN}/${url}` || "public/no_image.jpg"
}

export function getThumbnailImageUrl(url) {
  return `t_${consts.IMG_DOMAIN}/${url}` || "public/no_image.jpg"
}
