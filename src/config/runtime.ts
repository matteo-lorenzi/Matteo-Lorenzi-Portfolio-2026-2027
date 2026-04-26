export const formspreeEndpoint =
  import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? "";

export const isFormspreeConfigured = formspreeEndpoint.length > 0;
