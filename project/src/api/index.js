import axios from "../utils/axios"

// 获取正在上映的数据
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

// 获取即将上映的数据
export const getcomming = () => {
    return new Promise((resolve, reject) => {
        let url =
            "/hehe/ajax/mostExpected?ci=59&limit=10&offset=0&token=&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}

// 获取即将上映的数据
export const getcomme = () => {
    return new Promise((resolve, reject) => {
        let url =
            "/hehe/ajax/comingList?ci=59&token=&limit=10&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}


// 根据id获取数据
export const getmoredata = (movieId) => {
    return new Promise((resolve, reject) => {
        console.log(movieId)

        let url =
            `/hehe/ajax/moreComingList?token=&movieIds=${movieId[0]}%2C${movieId[1]}%2C${movieId[2]}%2C${movieId[3]}%2C${movieId[4]}%2C${movieId[5]}%2C${movieId[6]}%2C${movieId[7]}%2C${movieId[8]}%2C${movieId[9]}&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10`;
        console.log(url)
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}