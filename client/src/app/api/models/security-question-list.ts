import { ServiceResponse } from './service-response';
import { SecurityQuestion } from './security-question';
export class SecurityQuestionList extends ServiceResponse {
    data: Array<SecurityQuestion>;
}
