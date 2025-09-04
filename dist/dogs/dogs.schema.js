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
exports.DogSchema = exports.Dog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Dog = class Dog {
    name;
    gender;
    age;
    weight;
    description;
    breed;
    photoUrl1;
    photoUrl2;
    photoUrl3;
    emotionalStability;
    obedience;
    healthCondition;
    socialization;
};
exports.Dog = Dog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Dog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['male', 'female'] }),
    __metadata("design:type", String)
], Dog.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Dog.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Dog.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dog.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dog.prototype, "breed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dog.prototype, "photoUrl1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dog.prototype, "photoUrl2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dog.prototype, "photoUrl3", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 10 }),
    __metadata("design:type", Number)
], Dog.prototype, "emotionalStability", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 10 }),
    __metadata("design:type", Number)
], Dog.prototype, "obedience", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 10 }),
    __metadata("design:type", Number)
], Dog.prototype, "healthCondition", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 10 }),
    __metadata("design:type", Number)
], Dog.prototype, "socialization", void 0);
exports.Dog = Dog = __decorate([
    (0, mongoose_1.Schema)()
], Dog);
exports.DogSchema = mongoose_1.SchemaFactory.createForClass(Dog);
//# sourceMappingURL=dogs.schema.js.map