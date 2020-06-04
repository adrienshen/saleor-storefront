const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const searchUrl = `${baseUrl}search/`;
export const categoryUrl = `${baseUrl}category/${slugUrl}`;
export const collectionUrl = `${baseUrl}collection/${slugUrl}`;
export const productUrl = `${baseUrl}product/${slugUrl}`;
export const cartUrl = `${baseUrl}cart/:token?/`;
export const checkoutLoginUrl = `${baseUrl}login/`;
export const pageUrl = `${baseUrl}page/:slug/`;
export const guestOrderDetailsUrl = `/order-history/:token/`;
export const orderConfirmationUrl = `${baseUrl}order-confirmation/`;
export const accountUrl = `${baseUrl}account/`;
export const accountConfirmUrl = `${baseUrl}account-confirm/`;
export const orderHistoryUrl = `${baseUrl}order-history/`;
export const addressBookUrl = `${baseUrl}address-book/`;
export const paymentOptionsUrl = `${baseUrl}payment-options/`;
export const passwordResetUrl = `${baseUrl}reset-password/`;
export const browseCollection = `${baseUrl}collections/cabinets`;
export const cabinetCollection = `${baseUrl}collections/cabinets/:id/:slug`;
export const collectionAvailableColors = `${baseUrl}collections/cabinets/:id/:slug/available-colors`;
export const collectionViewDetails = `${baseUrl}collections/cabinets/:id/:slug/details`;
export const collectionSpecification = `${baseUrl}collections/cabinets/:id/:slug/specification`;
export const collectionItemsIncluded = `${baseUrl}collections/cabinets/:id/:slug/cabinet-parts`;
export const collectionSamples = `${baseUrl}collections/cabinets/:id/:slug/samples`;
export const orderSamples = `${baseUrl}collections/samples`;
export const myAccount = `${baseUrl}my-account`;
