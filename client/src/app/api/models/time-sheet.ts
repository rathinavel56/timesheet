export class TimeSheet {
    created_at: String;
    update_at: String;
    manager_id: String;
    shore_type: Number;
    date: String;
    project_id: String;
    infra_tower_id: String;
    bau: Number;
    ot_planned: Number;
    ot_unplanned: Number;
    addtion_hours_planned: Number;
    addtion_hours_desc_planned: String;
    addtion_hours_unplanned: Number;
    addtion_hours_desc_unplanned: String;
    weekend: Boolean;
    billed_hour: Number;
    non_billed_hour: Number;
}
