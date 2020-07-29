let dash = [];

const setDashboard = (params) => {
    dash = params;
};

const getDashboard = () => {
    return dash;
};

const getDashboardById = (id) => {
    return dash.filter(element => element.id = id);
};

export default { getDashboard, setDashboard, getDashboardById };
