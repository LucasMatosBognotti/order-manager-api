import Professional from '../infra/typeorm/entity/Professional';

import AppError from '../../../shared/error/AppError';

import IProfessionalRepository from '../repository/IProfessionalRepository';

class FindAllProfessionalService {
  private professionalRepository: IProfessionalRepository;

  constructor(professionalRepository: IProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  public async execute(): Promise<Professional[]> {
    const professional = await this.professionalRepository.findAll();

    if (!professional?.length) {
      throw new AppError('Professionals does not exist', 404);
    }

    return professional;
  }
}

export default FindAllProfessionalService;
