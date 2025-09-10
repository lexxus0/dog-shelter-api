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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpRequestSchema = exports.HelpRequest = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let HelpRequest = class HelpRequest {
    fullName;
    helpType;
    email;
    preferredContact;
    phone;
    comment;
    agree;
    createdAt;
    updatedAt;
};
exports.HelpRequest = HelpRequest;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HelpRequest.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['Фінансова допомога', 'Волонтерство', 'Інше'] }),
    __metadata("design:type", String)
], HelpRequest.prototype, "helpType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, lowercase: true, trim: true }),
    __metadata("design:type", String)
], HelpRequest.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['Електронна пошта', 'Телефон'] }),
    __metadata("design:type", String)
], HelpRequest.prototype, "preferredContact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], HelpRequest.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], HelpRequest.prototype, "comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], HelpRequest.prototype, "agree", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], HelpRequest.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], HelpRequest.prototype, "updatedAt", void 0);
exports.HelpRequest = HelpRequest = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], HelpRequest);
exports.HelpRequestSchema = mongoose_1.SchemaFactory.createForClass(HelpRequest);
//# sourceMappingURL=help-request.schema.js.map