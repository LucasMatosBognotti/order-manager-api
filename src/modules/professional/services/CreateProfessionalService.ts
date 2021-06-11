import Professional from '../infra/typeorm/entity/Professional';

import ICreateProfessionalDTO from '../dtos/ICreateProfessionalDTO';
import IProfessionalRepository from '../repository/IProfessionalRepository';

class CreateProfessionalService {
  private professionalRepository: IProfessionalRepository;

  constructor(professionalRepository: IProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  public async execute({
    name,
    comission,
  }: ICreateProfessionalDTO): Promise<Professional> {
    const professional = await this.professionalRepository.create({
      name,
      comission,
    });

    return professional;
  }
}

export default CreateProfessionalService;
