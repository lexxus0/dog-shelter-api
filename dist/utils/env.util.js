"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvVariable = void 0;
const validateEnvVariable = (value, name) => {
    if (!value)
        throw new Error(`Missing or invalid ${name} environment variable`);
    return value;
};
exports.validateEnvVariable = validateEnvVariable;
//# sourceMappingURL=env.util.js.map