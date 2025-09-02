import { DogsService } from './dogs.service';
import { Dog } from './dogs.schema';
export declare class DogsController {
    private readonly dogsService;
    constructor(dogsService: DogsService);
    create(dogData: Partial<Dog>): Promise<Dog>;
    findAll(breed?: string, page?: string, limit?: string): Promise<{
        data: Dog[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): Promise<Dog>;
    update(id: string, updateData: Partial<Dog>): Promise<Dog>;
    remove(id: string): Promise<Dog>;
}
