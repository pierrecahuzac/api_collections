import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionDto } from './create-collection.dto';
import { User } from 'src/users/user';

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {
    id: string;
}
