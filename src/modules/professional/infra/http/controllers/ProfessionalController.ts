import { Request, Response } from 'express';

import ProfessionalRepository from '../../typeorm/repository/ProfessionalRepository';

import CreateProfessionalService from '../../../services/CreateProfessionalService';
import FindAllProfessionalService from '../../../services/FindAllProfessionalService';
import FindOneProfessionalService from '../../../services/FindOneProfessionalService';
import UpdateProfessionalService from '../../../services/UpdateProfessionalService';
import DeleteProfessionalService from '../../../services/DeleteProfessionalService';

class ProfessionalController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, comission } = req.body;

    const professionalRepository = new ProfessionalRepository();

    const createProfessional = new CreateProfessionalService(
      professionalRepository,
    );

    const professional = await createProfessional.execute({
      name,
      comission,
    });

    return res.json(professional);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const professionalRepository = new ProfessionalRepository();

    const findAllProfessional = new FindAllProfessionalService(
      professionalRepository,
    );

    const professionals = await findAllProfessional.execute();

    return res.json(professionals);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const professionalRepository = new ProfessionalRepository();

    const findOneProfessional = new FindOneProfessionalService(
      professionalRepository,
    );

    const professional = await findOneProfessional.execute(id);

    return res.json(professional);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, name, comission } = req.body;

    const professionalRepository = new ProfessionalRepository();

    const updateProfessional = new UpdateProfessionalService(
      professionalRepository,
    );

    const professional = await updateProfessional.execute({
      id,
      name,
      comission,
    });

    return res.json(professional);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const professionalRepository = new ProfessionalRepository();

    const deleteProfessional = new DeleteProfessionalService(
      professionalRepository,
    );

    const professional = await deleteProfessional.execute(id);

    return res.json(professional);
  }
}

export default ProfessionalController;
