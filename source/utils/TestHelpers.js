exports.reactStyleToInline = (style) =>
  JSON.stringify(style)
    .replace(/[{"}]/g, '')
    .replace(/[,]/g, ';')
    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
    .toLowerCase()
    .concat(';');
