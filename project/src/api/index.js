import axios from "../utils/axios"

export const getshowing = () => {
    return new Promise((resolve, reject) => {
        let url =
            "/hehe/ajax/movieOnInfoList?token=&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}