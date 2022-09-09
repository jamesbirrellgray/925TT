"use strict";
// ./api-v1/services/worldsService.js
Object.defineProperty(exports, "__esModule", { value: true });
const worlds = {
    Earth: {
        name: 'Earth'
    }
};
const worldsService = {
    getWorlds(name) {
        return worlds[name] ? [worlds[name]] : [];
    }
};
exports.default = worldsService;
//# sourceMappingURL=worldsService.js.map