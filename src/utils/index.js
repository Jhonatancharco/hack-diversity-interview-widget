export const randomID = () => `_${Math.random().toString(36).substr(2)}`


// this function is used in our async middleware (epics) 
export const createBeforeServerMessage = ({ message: { context, attributes, ...rest } }) => ({
  ...rest,
  // "context" is information about the current site visitor
  context: {
    ...context,
    platform: window.navigator.platform,
    language: window.navigator.language,
  },
  // "attributes" is information that we want to keep track of.
  attributes: {
    ...attributes,
    sentFromWidget: true,
    clientTimestamp: Date.now(),
  }
})
