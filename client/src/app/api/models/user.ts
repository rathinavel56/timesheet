import { ServiceResponse } from './service-response';
export class User extends ServiceResponse {
    id: String;
    created_at: String;
    update_at: String;
    name: String;
    employee_id: Number;
    role_id: String;
    manager_id: String;
    security_question_id: String;
    security_question_answer: String;
    project_id: String;
    infra_tower_id: String;
    password: String;
    is_active: boolean;
    role: any;
    manager: any;
    shore_type: Number;
    project: any;
    infra: any;
}
