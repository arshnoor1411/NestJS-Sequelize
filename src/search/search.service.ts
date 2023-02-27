import { Injectable } from '@nestjs/common';
import { applicationConfig } from 'config';
import MeiliSearch from 'meilisearch';
import { CreateSearchInput } from './dto/create-search.input';
import { UpdateSearchInput } from './dto/update-search.input';

@Injectable()
export class SearchService {
  client: MeiliSearch;
  isMeiliConnected = false;

  constructor() {
    this.client = new MeiliSearch({
      host: applicationConfig.meilisearch.host,
      apiKey: applicationConfig.meilisearch.key,
    });

    // this.healthCheck();
    // this.updateIndexSetting();
  }
  create(createSearchInput: CreateSearchInput) {
    return 'This action adds a new search';
  }

  findAll() {
    return `This action returns all search`;
  }

  findOne(id: number) {
    return `This action returns a #${id} search`;
  }

  update(id: number, updateSearchInput: UpdateSearchInput) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }
}
