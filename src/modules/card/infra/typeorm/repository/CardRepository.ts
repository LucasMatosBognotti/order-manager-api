import { getRepository, Repository } from 'typeorm';

import Card from '../entity/Card';

import ICreateCardDTO from '../../../dtos/ICreateCardDTO';
import ICardRepository from '../../../repository/ICardRepository';

class CardRepository implements ICardRepository {
  private ormRepository: Repository<Card>;

  constructor() {
    this.ormRepository = getRepository(Card);
  }

  public async create(dataCard: ICreateCardDTO): Promise<Card> {
    const card = this.ormRepository.create(dataCard);

    await this.ormRepository.save(card);

    return card;
  }

  public async findAll(): Promise<Card[] | undefined> {
    const cards = await this.ormRepository.find();

    return cards;
  }

  public async findById(id: string): Promise<Card | undefined> {
    const card = await this.ormRepository.findOne({ where: { id } });

    return card;
  }

  public async save(card: Card): Promise<Card> {
    const cardSave = await this.ormRepository.save(card);

    return cardSave;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default CardRepository;
