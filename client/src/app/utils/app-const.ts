export class AppConst {
    public static readonly STORE_API_PATHS = {
        SECURITYQUESTION: '/security_question',
        REGISTER: '/register',
        LOGIN: '/login',
        ROLE: '/role',
        USER: '/users',
        USERBYID: '/user',
        MANAGERS: '/managers',
        INFRATOWER: '/infra_tower',
        PROJECT: '/project',
        PROJECT_INFRA_TOWER: '/projectInfra',
        PROJECT_INFRA_TOWER_LIST: '/projectInfra/list',
        PROJECTLIST: '/project/list',
        INFRATOWERLIST: '/infra_tower/list',
        DEFAULTTIMESHEET: '/default_time_sheet',
        DAILYTIMESHEET: '/daily_time_sheet',
        FORGETPASSWORD: '/forgot_password',
        CHANGEPASSWORD: '/change_password'
    };

    public static readonly SERVICE_STATUS = {
        SUCCESS: 'success',
        FAILED: 'failed'
    };

    public static readonly BAU = [
    {
        id: 0,
        name: 'Select BAU',
        value: 0
    },
    {
        id: 1,
        name: 'Full Day Billable',
        value: 8
    },
    {
        id: 2,
        name: 'Half Day Billable',
        value: 4
    },
    {
        id: 3,
        name: 'Full Day Non Billable',
        value: 8
    },
    {
        id: 4,
        name: 'Half Day Non Billable',
        value: 4
    },
    {
        id: 5,
        name: 'Planned Leave',
        value: 0
    },
    {
        id: 6,
        name: 'Emergency Leave',
        value: 0
    },
    {
        id: 7,
        name: 'Sick Leave',
        value: 0
    },
    {
        id: 8,
        name: 'Week-off / Weekend',
        value: 0
    },
    {
        id: 9,
        name: 'Holiday',
        value: 0
    }];

    public static readonly OT_PLANNED = [
    {
        id: 0,
        name: 'No'
    },
    {
        id: 1,
        name: 'Yes'
    }];

    public static readonly OT_UNPLANNED = [{
        id: 0,
        name: 'No'
    },
    {
        id: 1,
        name: 'Yes'
    }];

    public static readonly MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    public static readonly WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}
