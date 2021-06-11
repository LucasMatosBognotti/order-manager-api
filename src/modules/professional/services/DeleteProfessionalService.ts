import AppError from '../../../shared/error/AppError';

import IProfessionalRepository from '../repository/IProfessionalRepository';

interface IResponse {
  message: string;
}

class DeleteProfessionalService {
  private professionalRepository: IProfessionalRepository;

  constructor(professionalRepository: IProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  public async execute(id: string): Promise<IResponse> {
    const professional = await this.professionalRepository.findById(id);

    if (!professional) {
      throw new AppError('Professional does not exist', 404);
    }

    await this.professionalRepository.delete(professional.id);

    return {
      message: 'Professional deleted successfully',
    };
  }
}

export default DeleteProfessionalService;
