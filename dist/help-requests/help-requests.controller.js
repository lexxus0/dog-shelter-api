"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpRequestsController = void 0;
const common_1 = require("@nestjs/common");
const help_requests_service_1 = require("./help-requests.service");
const help_requests_dto_1 = require("./dto/help-requests.dto");
let HelpRequestsController = class HelpRequestsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto) {
        const record = await this.service.create(dto);
        return {
            id: record._id,
            message: 'Дякуємо! Заявку отримано.',
            createdAt: record.createdAt,
        };
    }
};
exports.HelpRequestsController = HelpRequestsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [help_requests_dto_1.CreateHelpRequestDto]),
    __metadata("design:returntype", Promise)
], HelpRequestsController.prototype, "create", null);
exports.HelpRequestsController = HelpRequestsController = __decorate([
    (0, common_1.Controller)('help-requests'),
    __metadata("design:paramtypes", [help_requests_service_1.HelpRequestsService])
], HelpRequestsController);
//# sourceMappingURL=help-requests.controller.js.map