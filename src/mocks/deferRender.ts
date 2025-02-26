async function deferRender() {
  await import('./browser.ts')

  return
}

export {
  deferRender
}