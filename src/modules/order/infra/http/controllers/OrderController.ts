import { Request, Response } from 'express';

import OrderRepository from '../../typeorm/repository/OrderRepository';

import CreateOrderServices from '../../../services/CreateOrderServices';
import FindAllOrderServices from '../../../services/FindAllOrderServices';
import FindOneOrderServices from '../../../services/FindOneOrderServices';
import UpdateOrderServices from '../../../services/UpdateOrderServices';
import DeleteOrderServices from '../../../services/DeleteOrderServices';

class OrderController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { customer_name } = req.body;

    const orderRepository = new OrderRepository();

    const createOrder = new CreateOrderServices(orderRepository);

    const order = await createOrder.execute({
      customer_name,
    });

    return res.json(order);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const orderRepository = new OrderRepository();

    const findAllOrder = new FindAllOrderServices(orderRepository);

    const orders = await findAllOrder.execute();

    return res.json(orders);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const orderRepository = new OrderRepository();

    const findOneOrder = new FindOneOrderServices(orderRepository);

    const order = await findOneOrder.execute(id);

    return res.json(order);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, customer_name } = req.body;

    const orderRepository = new OrderRepository();

    const updateOrder = new UpdateOrderServices(orderRepository);

    const order = await updateOrder.execute({
      id,
      customer_name,
    });

    return res.json(order);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const orderRepository = new OrderRepository();

    const deleteOrder = new DeleteOrderServices(orderRepository);

    const service = await deleteOrder.execute(id);

    return res.json(service);
  }
}

export default OrderController;
