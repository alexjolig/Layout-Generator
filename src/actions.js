export const CHANGE_LAYOUT = "CHANGE_LAYOUT";

export function changeLayout(item) {
   return {
      type: CHANGE_LAYOUT,
      layout: item
   }
}
