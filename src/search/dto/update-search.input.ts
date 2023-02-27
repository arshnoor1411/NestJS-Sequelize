import { CreateSearchInput } from './create-search.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSearchInput extends PartialType(CreateSearchInput) {
  id: number;
}
