import { getRepository, Repository } from 'typeorm';
import ICreateProfessionalDTO from '../../../dtos/ICreateProfessionalDTO';
import IProfessionalRepository from '../../../repository/IProfessionalRepository';
import Professional from '../entity/Professional';

class ProfessionalRepository implements IProfessionalRepository {
  private ormRepository: Repository<Professional>;

  constructor() {
    this.ormRepository = getRepository(Professional);
  }

  public async create(
    dataProfessional: ICreateProfessionalDTO,
  ): Promise<Professional> {
    const professional = this.ormRepository.create(dataProfessional);

    await this.ormRepository.save(professional);

    return professional;
  }

  public async findAll(): Promise<Professional[] | undefined> {
    const professionals = await this.ormRepository.find();

    return professionals;
  }

  public async findById(id: string): Promise<Professional | undefined> {
    const professional = await this.ormRepository.findOne(id);

    return professional;
  }

  public async save(professional: Professional): Promise<Professional> {
    const saveProfessional = await this.ormRepository.save(professional);

    return saveProfessional;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ProfessionalRepository;
