export default interface IUpdatePaymentDTO {
  id: string;
  value: number;
  order_id: string;
  card_id: string;
  payment_method_id: string;
}
