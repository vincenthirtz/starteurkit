let dash = [];

const setDashboard = (params) => {
   dash = params;
};

const getDashboard = () => {
    return dash;
};

export default { getDashboard, setDashboard };
