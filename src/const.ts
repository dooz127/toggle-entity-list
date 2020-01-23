export const ELEMENT_VERSION = '0.1.0';

const validEntityId = /^(\w+)\.(\w+)$/;

export const isValidEntityId = (entityId: string) => validEntityId.test(entityId);
