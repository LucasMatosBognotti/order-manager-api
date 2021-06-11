import Professional from '../infra/typeorm/entity/Professional';

import AppError from '../../../shared/error/AppError';

import IProfessionalRepository from '../repository/IProfessionalRepository';

class FindOneProfessionalService {
  private professionalRepository: IProfessionalRepository;

  constructor(professionalRepository: IProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  public async execute(id: string): Promise<Professional> {
    const professional = await this.professionalRepository.findById(id);

    if (!professional) {
      throw new AppError('Professional does not exist', 404);
    }

    return professional;
  }
}

export default FindOneProfessionalService;
