import { Project } from './project';
import { InfraTower } from './infra-tower';
export class ProjectInfraTower {
    _id: String;
    id: String;
    created_at: String;
    update_at: String;
    project_id: String;
    infra_tower_id: String;
    project: Project;
    infra_tower: InfraTower;
    is_active: boolean;
}
