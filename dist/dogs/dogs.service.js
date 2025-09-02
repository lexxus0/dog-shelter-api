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
exports.DogsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dogs_schema_1 = require("./dogs.schema");
let DogsService = class DogsService {
    dogModel;
    constructor(dogModel) {
        this.dogModel = dogModel;
    }
    async create(dogData) {
        const newDog = new this.dogModel(dogData);
        return newDog.save();
    }
    async findAll(breed, page = 1, limit = 10) {
        const filter = breed ? { breed } : {};
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.dogModel.find(filter).skip(skip).limit(limit).exec(),
            this.dogModel.countDocuments(filter).exec(),
        ]);
        return { data, total, page, limit };
    }
    async findOne(id) {
        const dog = await this.dogModel.findById(id).exec();
        if (!dog)
            throw new common_1.NotFoundException(`Dog with id ${id} not found`);
        return dog;
    }
    async update(id, updateData) {
        const dog = await this.dogModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!dog)
            throw new common_1.NotFoundException(`Dog with id ${id} not found`);
        return dog;
    }
    async remove(id) {
        const dog = await this.dogModel.findByIdAndDelete(id).exec();
        if (!dog)
            throw new common_1.NotFoundException(`Dog with id ${id} not found`);
        return dog;
    }
};
exports.DogsService = DogsService;
exports.DogsService = DogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dogs_schema_1.Dog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DogsService);
//# sourceMappingURL=dogs.service.js.map