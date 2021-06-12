import AppError from '../../../shared/error/AppError';
import Message from '../../../shared/error/Message';

import IServiceRepository from '../repository/IServiceRepository';

class DeleteServiceServices {
  private serviceRepository: IServiceRepository;

  constructor(serviceRepository: IServiceRepository) {
    this.serviceRepository = serviceRepository;
  }

  public async execute(id: string): Promise<Message> {
    const service = await this.serviceRepository.findById(id);

    if (!service) {
      throw new AppError('Service does not exist', 404);
    }

    await this.serviceRepository.delete(service.id);

    return {
      message: 'Service deleted successfully',
    };
  }
}

export default DeleteServiceServices;
