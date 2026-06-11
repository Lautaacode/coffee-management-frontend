import api    from "../../../core/api/axios";
import type {Payment} from "../interfaces/Payment";
import type { Ticket } from "../../ticket/interfaces/Ticket";



import type {PaymentMethod} from "../interfaces/PaymentMethod";

class PaymentService {

    async findAll(): Promise<Payment[]> {
        const response = await api.get("/payments");
        return response.data;
    }

    async findById(id: number): Promise<Payment> {
        const response = await api.get(`/payments/${id}`);
        return response.data;
    }

    async completePayment(id: number, method: PaymentMethod): Promise<Payment> {
        const response = await api.patch(`/payments/${id}/complete?method=${method}`);
        return response.data;
    }

    async cancelPayment(id: number): Promise<Payment> {
        const response = await api.patch(`/payments/${id}/cancel`);
        return response.data;
    }

    async findTicket(id: number): Promise<Ticket> {
        const response = await api.get(`/payments/${id}/ticket`);
        return response.data;
    }
}

export default new PaymentService();