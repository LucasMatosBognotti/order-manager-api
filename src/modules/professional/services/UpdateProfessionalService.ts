import Professional from '../infra/typeorm/entity/Professional';

import AppError from '../../../shared/error/AppError';

import IProfessionalRepository from '../repository/IProfessionalRepository';
import IUpdateProfessionalDTO from '../dtos/IUpdateProfessionalDTO';

class UpdateProfessionalService {
  private professionalRepository: IProfessionalRepository;

  constructor(professionalRepository: IProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  public async execute({
    id,
    name,
    comission,
  }: IUpdateProfessionalDTO): Promise<Professional> {
    const professional = await this.professionalRepository.findById(id);

    if (!professional) {
      throw new AppError('Professional does not exist', 404);
    }

    professional.id = id;
    professional.name = name;
    professional.comission = comission;

    await this.professionalRepository.save(professional);

    return professional;
  }
}

export default UpdateProfessionalService;
