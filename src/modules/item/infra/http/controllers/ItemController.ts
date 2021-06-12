import { Request, Response } from 'express';

import ItemRepository from '../../typeorm/repository/ItemRepository';

import CreateItemServices from '../../../services/CreateItemServices';
import FindAllItemServices from '../../../services/FindAllItemServices';
import FindOneItemServices from '../../../services/FindOneItemServices';
import UpdateItemServices from '../../../services/UpdateItemServices';
import DeleteItemServices from '../../../services/DeleteItemServices';

class ItemController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      quantity,
      addition,
      discount,
      order_id,
      service_id,
      professional_id,
    } = req.body;

    const itemRepository = new ItemRepository();

    const createItem = new CreateItemServices(itemRepository);

    const item = await createItem.execute({
      quantity,
      addition,
      discount,
      order_id,
      service_id,
      professional_id,
    });

    return res.json(item);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const itemRepository = new ItemRepository();

    const findAllItem = new FindAllItemServices(itemRepository);

    const Items = await findAllItem.execute();

    return res.json(Items);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const itemRepository = new ItemRepository();

    const findOneItem = new FindOneItemServices(itemRepository);

    const item = await findOneItem.execute(id);

    return res.json(item);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      id,
      quantity,
      addition,
      discount,
      order_id,
      service_id,
      professional_id,
    } = req.body;

    const itemRepository = new ItemRepository();

    const updateItem = new UpdateItemServices(itemRepository);

    const item = await updateItem.execute({
      id,
      quantity,
      addition,
      discount,
      order_id,
      service_id,
      professional_id,
    });

    return res.json(item);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const itemRepository = new ItemRepository();

    const deleteItem = new DeleteItemServices(itemRepository);

    const item = await deleteItem.execute(id);

    return res.json(item);
  }
}

export default ItemController;
