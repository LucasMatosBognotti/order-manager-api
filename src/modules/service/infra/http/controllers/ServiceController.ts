import { Request, Response } from 'express';

import ServiceRepository from '../../typeorm/repository/ServiceRepository';

import CreateServiceServices from '../../../services/CreateServiceServices';
import FindAllServiceServices from '../../../services/FindAllServiceServices';
import FindOneServiceServices from '../../../services/FindOneServiceServices';
import UpdateServiceServices from '../../../services/UpdateServiceServices';
import DeleteServiceServices from '../../../services/DeleteServiceServices';

class ServiceController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, price } = req.body;

    const serviceRepository = new ServiceRepository();

    const createService = new CreateServiceServices(serviceRepository);

    const service = await createService.execute({
      name,
      price,
    });

    return res.json(service);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const serviceRepository = new ServiceRepository();

    const findAllService = new FindAllServiceServices(serviceRepository);

    const services = await findAllService.execute();

    return res.json(services);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const serviceRepository = new ServiceRepository();

    const findOneService = new FindOneServiceServices(serviceRepository);

    const service = await findOneService.execute(id);

    return res.json(service);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, name, price } = req.body;

    const serviceRepository = new ServiceRepository();

    const updateService = new UpdateServiceServices(serviceRepository);

    const update = await updateService.execute({
      id,
      name,
      price,
    });

    return res.json(update);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const serviceRepository = new ServiceRepository();

    const deleteService = new DeleteServiceServices(serviceRepository);

    const service = await deleteService.execute(id);

    return res.json(service);
  }
}

export default ServiceController;
