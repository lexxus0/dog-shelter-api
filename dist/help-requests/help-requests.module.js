"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpRequestsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const help_request_schema_1 = require("./schemas/help-request.schema");
const help_requests_service_1 = require("./help-requests.service");
const help_requests_controller_1 = require("./help-requests.controller");
let HelpRequestsModule = class HelpRequestsModule {
};
exports.HelpRequestsModule = HelpRequestsModule;
exports.HelpRequestsModule = HelpRequestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: help_request_schema_1.HelpRequest.name, schema: help_request_schema_1.HelpRequestSchema, collection: 'help_requests' }]),
        ],
        controllers: [help_requests_controller_1.HelpRequestsController],
        providers: [help_requests_service_1.HelpRequestsService],
    })
], HelpRequestsModule);
//# sourceMappingURL=help-requests.module.js.map