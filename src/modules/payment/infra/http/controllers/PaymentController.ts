import { Request, Response } from 'express';

import PaymentRepository from '../../typeorm/repository/PaymentRepository';

import CreatePaymentServices from '../../../services/CreatePaymentServices';
import FindAllPaymentServices from '../../../services/FindAllPaymentServices';
import FindOnePaymentServices from '../../../services/FindOnePaymentServices';
import UpdatePaymentServices from '../../../services/UpdatePaymentServices';
import DeletePaymentServices from '../../../services/DeletePaymentServices';

class PaymentController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { value, card_id, order_id, payment_method_id } = req.body;

    const paymentRepository = new PaymentRepository();

    const createPayment = new CreatePaymentServices(paymentRepository);

    const Payment = await createPayment.execute({
      value,
      card_id,
      order_id,
      payment_method_id,
    });

    return res.json(Payment);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const paymentRepository = new PaymentRepository();

    const findAllPayment = new FindAllPaymentServices(paymentRepository);

    const Payments = await findAllPayment.execute();

    return res.json(Payments);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const paymentRepository = new PaymentRepository();

    const findOnePayment = new FindOnePaymentServices(paymentRepository);

    const Payment = await findOnePayment.execute(id);

    return res.json(Payment);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, value, card_id, order_id, payment_method_id } = req.body;

    const paymentRepository = new PaymentRepository();

    const updatePayment = new UpdatePaymentServices(paymentRepository);

    const Payment = await updatePayment.execute({
      id,
      value,
      card_id,
      order_id,
      payment_method_id,
    });

    return res.json(Payment);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const paymentRepository = new PaymentRepository();

    const deletePayment = new DeletePaymentServices(paymentRepository);

    const service = await deletePayment.execute(id);

    return res.json(service);
  }
}

export default PaymentController;
