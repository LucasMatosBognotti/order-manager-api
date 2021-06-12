import Card from '../infra/typeorm/entity/Card';

import ICreateCardDTO from '../dtos/ICreateCardDTO';

export default interface ICardRepository {
  create(dataCard: ICreateCardDTO): Promise<Card>;
  findAll(): Promise<Card[] | undefined>;
  findById(id: string): Promise<Card | undefined>;
  save(card: Card): Promise<Card>;
  delete(id: string): Promise<void>;
}
