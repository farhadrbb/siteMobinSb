import axios from "axios";



const axiosCustom = (_config, _data) => {

    const { token, member_id } =
        JSON.parse(sessionStorage.getItem('login'))
            ? JSON.parse(sessionStorage.getItem('login'))
            : {
                token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
                member_id: "_0zehXYBdxxYGfkX5_wd",
            }

    let config = {
        baseURL: getUrl(),
        method: "post",
        headers: { "content-type": "application/json" },
        ..._config,
        data: {
            api_key: "d025488f-8ec6-4434-afbe-b6a5343815a7",
            token,
            member_id,
            ..._data
        }
    }

    return (
        axios(config)
    )

}




function getUrl() {

    let protocol = window.location.protocol
    let hostName = window.location.hostname

    if (!protocol || !hostName || hostName === 'localhost') {
        return "https://www.mobinsb.ir/GradDB/V1/"
    }

    return `${protocol}//${hostName}/GradDB/V1/`

}

export default axiosCustom;